module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transform: ['hover', 'focus'], // Ensure hover/focus states for transforms are enabled
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // Custom fade-in animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      // No need to add rotateY directly here
    },
  },
  plugins: [],
};
