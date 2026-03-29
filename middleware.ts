// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
	matcher: [
		// Match all pathnames except for static files, _next internals, and API routes
		"/((?!_next|_vercel|api|.*\\..*).*)",
	],
};
