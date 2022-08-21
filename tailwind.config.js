module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#5865f2', 
        grayDiscord: '#2C2F33'
      },
      backgroundImage: {
        'pattern': "url('discord.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
