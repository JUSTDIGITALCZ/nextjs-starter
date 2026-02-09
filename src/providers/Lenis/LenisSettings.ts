import type { LenisOptions } from "lenis";

const easing = (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t));

export const mobileScrollSettings: LenisOptions = {
	touchMultiplier: 2,
	easing,
	anchors: {
		offset: -80,
		duration: 1.2,
	},
};

export const desktopScrollSettings: LenisOptions = {
	wheelMultiplier: 1.2,
	easing,
	anchors: {
		offset: -80,
		duration: 1.2,
	},
};
