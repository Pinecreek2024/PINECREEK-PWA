module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      // Extend Tailwind theme here
    },
  },
  variants: {
    // Define variants if needed
  },
  plugins: [
    // Add any Tailwind plugins here
  ],
};
