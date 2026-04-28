"use client";
import ReactLenis from "lenis/react";
import { useEffect, useState } from "react";
import {
  desktopScrollSettings,
  mobileScrollSettings,
} from "@/src/providers/Lenis/LenisSettings";
import "lenis/dist/lenis.css";
import type { ChildrenProps } from "@/src/types/Props";

export const Lenis = ({ children }: ChildrenProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 1023px)");

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQueryList.matches);

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
