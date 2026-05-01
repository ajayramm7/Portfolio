/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        paper: '#f8fafc',
        brand: {
          50: '#ecfeff',
          100: '#cffafe',
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75'
        }
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.10)'
      }
    }
  },
  plugins: []
};
