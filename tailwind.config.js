/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(var(--pl-color-primary))',
      },
    },
  },
  plugins: [],
}
