/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"bg":"#FFF9F6",
				"rds":{
					"brand":{
					"lbd": "rgb(0,113,120)",
					"fftd":  "rgb(226,146,79)",
					"rds":  "rgb(121,50,138)",
					"yoad":  "rgb(154,37,84)",
					"ppa":  "rgb(42,210,197)",					
					"fad":  "rgb(83,166,47)",
					"ftd":  "rgb(220,103,109)",
					"pca":  "rgb(0,130,203)"
				}				
			}},
			fontFamily:{
				"rds-sans":["Noto Sans","sans-serif"],
				"rds-serif":["Noto Serif","serif"]
			}
		},
	},
	plugins: [],
}
