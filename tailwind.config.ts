import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				theme: "rgba(var(--c-bg-theme), <alpha-value>)",
				ltheme: "rgba(var(--c-txt-theme), <alpha-value>)",

				tp: "rgba(var(--c-txt-pri), <alpha-value>)",
				ts: "rgba(var(--c-txt-sec), <alpha-value>)",

				bp: "rgba(var(--c-bg-pri), <alpha-value>)",
				bs: "rgba(var(--c-bg-sec), <alpha-value>)",
			},
			transitionTimingFunction: {
				"no-delay": "cubic-bezier(0, 1, 0, 1)",
			},
			screens: {
				"2lg": "1200px",
			},
			lineHeight: {
				"0": "0",
			},
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
export default config;
