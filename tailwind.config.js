function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: withOpacity('--pl-color-primary'),
        'primary-dark': withOpacity('--pl-color-primary-dark'),
      },
      borderRadius: {
        primary: 'var(--pl-border-radius-primary)',
      },
    },
  },
  plugins: [],
}
