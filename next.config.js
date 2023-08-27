const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
	pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
	redirects: () => {
		return [
			{
				source: '/docs',
				destination: '/docs/getting-started',
				statusCode: 301,
			},
			{
				source: '/examples',
				destination: '/examples/basic',
				statusCode: 302,
			},
		];
	},
	reactStrictMode: true,
});
