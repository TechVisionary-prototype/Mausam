/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#6250C7',
          deep: '#5140B5',
          dark: '#3E2F96',
          canvas: '#F1F0F5',
          card: '#FFFFFF',
          text: '#171622',
          muted: '#89869A',
          yellow: '#FFCE20',
          cyan: '#22D3EE',
          cloud: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(98, 80, 199, 0.08), 0 4px 12px -2px rgba(23, 22, 34, 0.04)',
        'purple': '0 12px 32px -4px rgba(98, 80, 199, 0.35)',
        'floating': '0 20px 40px -10px rgba(23, 22, 34, 0.12)',
      },
      borderRadius: {
        '3xl': '28px',
        '4xl': '36px',
      }
    },
  },
  plugins: [],
}
