"use client";

import { useState } from "react";

export function useGlobalState() {
  const [toggledNavMenu, setToggledNavMenu] = useState<boolean>(false);

  return {
    toggledNavMenu,

    setToggledNavMenu,
  };
}
