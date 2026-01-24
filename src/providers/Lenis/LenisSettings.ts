import type { LenisOptions } from "lenis";

const easing = (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t));

export const mobileScrollSettings: LenisOptions = {
	duration: 3.5,
	touchMultiplier: 2,
	easing,
};

export const desktopScrollSettings: LenisOptions = {
	duration: 1.6,
	wheelMultiplier: 1.2,
	easing,
};
