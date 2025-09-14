import { useEffect, useState } from "react";

function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (
    x: number,
    y: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    window.scrollTo({ top: y, left: x, behavior });
  };

  return { scrollPosition, scrollTo };
}

export default useWindowScroll;
