module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'drawer': '#1E2640',
        'black_12': '#1A181E',
        'black_30': '#4D4D4D',
        'black_50': '#808080',
        'black_85': '#D9D9D9',
        // 'body_bg': '#E5E5E5',
        'black_90': '#E6E6E6',
        'black_95': '#F2F2F2',
      },
      textUnderlineOffset: {
        20: '20px',
      }
    },
  },
  plugins: [],
}