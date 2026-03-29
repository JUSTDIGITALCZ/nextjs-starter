// src/types/next-intl.d.ts
import cs from "../../messages/cs.json";

type Messages = typeof cs;

declare global {
	interface IntlMessages extends Messages {}
}
