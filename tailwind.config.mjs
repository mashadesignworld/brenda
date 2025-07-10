// tailwind.config.js
/* Import Font Awesome CSS */
import '@fortawesome/fontawesome-svg-core/styles.css';
import typography from '@tailwindcss/typography'; // Import the plugin
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ['var(--font-eb-garamond)', 'serif'],
        // Add the new font families
        'great-vibes': ['var(--font-great-vibes)', 'cursive'],
        'dancing-script': ['var(--font-dancing-script)', 'cursive'],
      },
      colors: {
        // Define custom colors to match the image more closely
       'brand-dark-teal': '#333333', // This is now a dark grey!
        'brand-gold': '#FDD87B', // Gold/yellowish color for highlights
        'brand-pink': '#FF8777', // Pinkish color for the button
        'brand-light-pink': '#FFC4BD', // Lighter pink for the button gradient
          'brand-pink': '#E82C81', // A deep pink, similar to Patrice Washington's branding
        'brand-light-pink': '#FF69B4', // A lighter pink
        'accent-yellow': '#FFD700', // You can try other yellows likergb(254, 10, 173) for brighter, or #FDD835 for a slightly softer tone
      'access-green': '#444be6', // A soft green for the access button
      }
    },
  },
  plugins: [ typography, // Use the imported plugin
   ],
};