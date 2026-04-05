/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#22d3ee',
          500: '#06b6d4'
        }
      },
      boxShadow: {
        soft: '0 20px 45px -30px rgba(34, 211, 238, 0.35)'
      }
    }
  },
  plugins: []
}
