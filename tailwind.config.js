/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'nav-gray': "#324951",
        'nav-bg':'#D9D9D9',
        'blue':'#5391DE',
        'l-blue':'#60A6FD',
        'd-blue':'#002E67',
        'brown':'#AE8564',
        'l-brown':'#E6DAD1',
        'd-brown':'#443122'
        
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/hero.png')",
        'flight': "url('./assets/plane.png')",
      }
    },
  },
  plugins: [],
}

