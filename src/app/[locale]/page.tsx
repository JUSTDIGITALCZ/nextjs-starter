// src/app/[locale]/page.tsx
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

export async function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
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
