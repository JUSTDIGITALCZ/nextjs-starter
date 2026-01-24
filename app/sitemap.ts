import type { MetadataRoute } from "next";

const getBaseUrl = () => {
	if (process.env.NEXT_PUBLIC_SITE_URL) {
		return process.env.NEXT_PUBLIC_SITE_URL;
	}

	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}

	return "http://localhost:3000";
};

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = getBaseUrl();
	const lastModified = new Date("2026-01-24");

	return [
		{
			url: `${baseUrl}/`,
			lastModified,
			changeFrequency: "yearly",
			priority: 1,
		},
	];
}
