/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,svelte}',
    './components/**/*.{js,ts,jsx,tsx,mdx,svelte}',
    './app/**/*.{js,ts,jsx,tsx,mdx,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#cecece',
        'base-color': '#333',
        'menu-bg': '#363636FA',
        'light-gray': '#a9acae',
        accents: '#f6f7f7',
        'active-nav': '#7c7c7c',
      },
      maxWidth: {
        'custom-screen': '1056px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'xl-22': '22px',
        'xl-28': '28px',
        'xl-40': '40px',
        'xl-42': '42px',
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        common: '5px 10px 30px rgba(0,0,0,0.25)',
      },
      fontFamily: {
        manrope: ['Manrope','sans-serif'],
      },
    },
  },
  plugins: [
    require('autoprefixer')
  ]
}
