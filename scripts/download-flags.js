#!/usr/bin/env node

/**
 * 从 country-flag-icons 下载 SVG 国旗图标
 * https://github.com/catamphetamine/country-flag-icons
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/catamphetamine/country-flag-icons/master/3x2';
const FLAGS_DIR = path.join(__dirname, '../src/svg-icons/flags');

// 从我们的 countries 数据中获取所有国家代码
const countriesPath = path.join(__dirname, '../src/data/countries.ts');
const countriesContent = fs.readFileSync(countriesPath, 'utf-8');

// 提取所有国家代码 - 匹配所有 code: 'XX' 的模式
const countryCodes = [];
const codeRegex = /code:\s*['"]([A-Z]{2})['"]/g;
let match;
while ((match = codeRegex.exec(countriesContent)) !== null) {
  if (!countryCodes.includes(match[1])) {
    countryCodes.push(match[1]);
  }
}

console.log(`📋 找到 ${countryCodes.length} 个国家代码`);

// 确保目录存在
if (!fs.existsSync(FLAGS_DIR)) {
  fs.mkdirSync(FLAGS_DIR, { recursive: true });
  console.log(`✅ 创建目录: ${FLAGS_DIR}`);
}

// 下载单个 SVG 文件
function downloadSVG(countryCode) {
  return new Promise((resolve, reject) => {
    const url = `${GITHUB_RAW_URL}/${countryCode}.svg`;
    const filePath = path.join(FLAGS_DIR, `${countryCode}.svg`);

    // 如果文件已存在，跳过
    if (fs.existsSync(filePath)) {
      console.log(`⏭️  跳过 ${countryCode}.svg (已存在)`);
      resolve();
      return;
    }

    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ 下载 ${countryCode}.svg`);
          resolve();
        });
      } else if (res.statusCode === 404) {
        console.log(`⚠️  ${countryCode}.svg 不存在于 country-flag-icons`);
        resolve();
      } else {
        reject(new Error(`下载失败: ${url} (${res.statusCode})`));
      }
    }).on('error', (err) => {
      console.error(`❌ ${countryCode}.svg 下载错误:`, err.message);
      reject(err);
    });
  });
}

// 批量下载（每次5个并发）
async function downloadAll() {
  console.log('\n🚀 开始下载 SVG 文件...\n');
  
  const BATCH_SIZE = 5;
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < countryCodes.length; i += BATCH_SIZE) {
    const batch = countryCodes.slice(i, i + BATCH_SIZE);
    const promises = batch.map(code => 
      downloadSVG(code)
        .then(() => downloaded++)
        .catch(() => failed++)
    );
    
    await Promise.all(promises);
    
    // 显示进度
    const progress = Math.min(i + BATCH_SIZE, countryCodes.length);
    console.log(`\n📊 进度: ${progress}/${countryCodes.length}`);
  }

  console.log('\n' + '='.repeat(50));
  console.log('✨ 下载完成！');
  console.log(`📥 已下载: ${downloaded} 个文件`);
  console.log(`⏭️  已跳过: ${skipped} 个文件`);
  if (failed > 0) {
    console.log(`❌ 失败: ${failed} 个文件`);
  }
  console.log('='.repeat(50));
  console.log('\n💡 下一步: 运行 npm run generate-svg-index 生成索引文件');
}

// 执行下载
downloadAll().catch((err) => {
  console.error('\n❌ 下载过程出错:', err);
  process.exit(1);
});
