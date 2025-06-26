import { useEffect, useState } from "react";

export function useHeader() {
  const [toggledMenu, setToggledMenu] = useState<boolean>(false);
  const [navDisplay, setNavDisplay] = useState<boolean>(true);
  const SCROLL_TIMEOUT: number = 2000;

  const toggleMenu = () => {
    setToggledMenu((prev) => {
      const newState = !prev;
      document.body.style.overflowY = !prev ? "hidden" : "auto";
      return newState;
    });
  };

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setNavDisplay(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (toggledMenu) {
          return;
        }
        setNavDisplay(false);
      }, SCROLL_TIMEOUT);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [toggledMenu]);

  return {
    navDisplay,
    toggledMenu,

    toggleMenu,
  };
}
