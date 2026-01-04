// React Example
import React from 'react';
import { getCountryEmoji, getCountryData, searchCountries } from 'easy-country-icon/emoji';
import { getCountrySVG } from 'easy-country-icon/svg';

// Example 1: Simple emoji flag display
export function SimpleFlag({ code }: { code: string }) {
  return (
    <span style={{ fontSize: '2rem' }}>
      {getCountryEmoji(code)}
    </span>
  );
}

// Example 2: Country selector with search
export function CountrySelector() {
  const [search, setSearch] = React.useState('');
  const [selected, setSelected] = React.useState<string | null>(null);
  
  const countries = search 
    ? searchCountries(search)
    : [];
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {countries.map((country) => (
          <li
            key={country.code}
            onClick={() => setSelected(country.code)}
            style={{ cursor: 'pointer' }}
          >
            {country.emoji} {country.name} ({country.code})
          </li>
        ))}
      </ul>
      {selected && (
        <div>
          Selected: {getCountryEmoji(selected)} {getCountryData(selected)?.name}
        </div>
      )}
    </div>
  );
}

// Example 3: SVG flag with custom size
export function CustomSVGFlag({ code }: { code: string }) {
  const svg = getCountrySVG(code, {
    width: 48,
    height: 48,
    className: 'custom-flag'
  });
  
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}

// Example 4: Country list with flags
export function CountryList() {
  const countries = [
    'US', 'CN', 'GB', 'JP', 'DE', 'FR', 'IT', 'ES', 'CA', 'AU'
  ];
  
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {countries.map((code) => {
        const data = getCountryData(code);
        return (
          <div key={code} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem' }}>{data?.emoji}</div>
            <div style={{ fontSize: '0.8rem' }}>{data?.name}</div>
          </div>
        );
      })}
    </div>
  );
}

// Example 5: Vue 3 Example
/*
<template>
  <div>
    <span class="flag">{{ flag }}</span>
    <div v-html="svg"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { getCountryEmoji } from 'easy-country-icon/emoji';
import { getCountrySVG } from 'easy-country-icon/svg';

const props = defineProps<{ code: string }>();

const flag = computed(() => getCountryEmoji(props.code));
const svg = computed(() => getCountrySVG(props.code, { width: 32, height: 32 }));
</script>
*/

// Example 6: Vanilla JavaScript
/*
import { getCountryEmoji, getAllCountries } from 'easy-country-icon/emoji';

const select = document.getElementById('country-select');
const allCountries = getAllCountries();

allCountries.forEach(country => {
  const option = document.createElement('option');
  option.value = country.code;
  option.textContent = `${country.emoji} ${country.name}`;
  select.appendChild(option);
});

select.addEventListener('change', (e) => {
  const code = e.target.value;
  const emoji = getCountryEmoji(code);
  document.getElementById('selected-flag').textContent = emoji;
});
*/
