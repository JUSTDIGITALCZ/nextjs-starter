"use client";
import ReactLenis from "lenis/react";
import { useEffect, useState } from "react";
import {
  desktopScrollSettings,
  mobileScrollSettings,
} from "@/src/providers/Lenis/LenisSettings";
import type { ChildrenProps } from "@/src/types/Props";

export const Lenis = ({ children }: ChildrenProps): React.ReactNode => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 1023px)").matches
      : false,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQueryList = window.matchMedia("(max-width: 1023px)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQueryList.addEventListener("change", handleMediaChange);

    return () =>
      mediaQueryList.removeEventListener("change", handleMediaChange);
  }, []);

  const scrollSettings = isMobile
    ? mobileScrollSettings
    : desktopScrollSettings;

  return (
    <ReactLenis root options={scrollSettings}>
      {children}
    </ReactLenis>
  );
};
