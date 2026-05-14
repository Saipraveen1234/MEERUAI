/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'meeru-orange': '#E8683A',
        'meeru-orange-light': '#FEF3EE',
        'meeru-peach': '#F5E6DC',
        'meeru-brown': '#5C3D2E',
        'meeru-dark-brown': '#3D2518',
        'meeru-cream': '#FDF8F5',
        'meeru-gray': '#6B6B6B',
        'meeru-light-gray': '#F5F5F5',
        'meeru-border': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
