// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'orange': {
			500: '#FF5C28',
			600: '#E84A16'
		  }
		},
		fontFamily: {
		  'sans': ['Inter', 'sans-serif'],
		  'display': ['Anton', 'sans-serif'], // For the "nexCRAFT" text if needed
		},
	  },
	},
	plugins: [],
  }