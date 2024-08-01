import { config } from 'under-io-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{js,jsx,ts,tsx}', '.storybook/**/*.{js,jsx,ts,tsx}'],
    relative: true,
  },
  darkMode: ['class'],
  plugins: [],
  theme: config,
}
