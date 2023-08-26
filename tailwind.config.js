/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx,md,mdx}',
		'./components/**/*.{js,jsx,ts,tsx,md,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,jsx,ts,tsx,md,mdx}',
		'./node_modules/@k8pai/tailwind-inputs/**/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				montez: ['"Montez", cursive'],
				dance: [`Averia Libre`],
			},
		},
	},
	plugins: [],
};
