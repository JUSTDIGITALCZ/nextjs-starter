// src/app/[locale]/page.tsx
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
	return [{ locale: "cs" }, { locale: "en" }];
}

export default async function Page({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations("home");

	return (
		<div className="flex h-screen bg-black items-center justify-center">
			<h1>{t("title")}</h1>
		</div>
	);
}
