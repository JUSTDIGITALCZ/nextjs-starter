import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
	locales: ['cs', 'en'],
	defaultLocale: 'cs',
	localePrefix: 'as-needed',
	localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
