import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      if (hash) {
        document
          .getElementById(decodeURIComponent(hash.slice(1)))
          ?.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(timer);
  }, [pathname, hash]);
  useEffect(() => {
    const title =
      pathname === "/"
        ? "Engineering the future"
        : pathname.split("/").filter(Boolean).join(" · ").replace(/-/g, " ");
    document.title = `${title.charAt(0).toUpperCase() + title.slice(1)} | Richascend`;
  }, [pathname]);
  return null;
}
