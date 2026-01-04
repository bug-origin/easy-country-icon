import { defineConfig } from 'tsup';

export default defineConfig([
  // Main build with dts
  {
    entry: ['src/index.ts', 'src/emoji.ts', 'src/svg.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    minify: true,
  },
  // SVG icons module (paths only, no actual SVG imports)
  {
    entry: ['src/svg-icons/index.ts'],
    outDir: 'dist/svg-icons',
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: false,
    treeshake: true,
    minify: true,
  },
]);
