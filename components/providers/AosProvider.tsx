"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

export default function AosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 56,
      delay: 0,
      anchorPlacement: "top-bottom",
      disable: prefersReduced,
    });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    AOS.refresh();
  }, [pathname]);

  return <>{children}</>;
}
