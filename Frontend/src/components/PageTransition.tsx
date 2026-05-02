import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const containerRef = useRef<HTMLDivElement>(null);
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    if (
      pathnameRef.current === pathname &&
      containerRef.current?.style.opacity === "1"
    )
      return;
    pathnameRef.current = pathname;
    const el = containerRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const raf = requestAnimationFrame(() => {
      el.style.transition =
        "opacity 0.4s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div ref={containerRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
