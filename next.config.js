/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'thumbs.static-thomann.de',
			},
			{
				protocol: 'https',
				hostname: 'fast-images.static-thomann.de',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'no-store',
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
