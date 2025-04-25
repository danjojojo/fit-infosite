"use client";

import { PiArrowDownThin, PiListThin, PiXThin } from "react-icons/pi";

export const icons = {
  close: PiXThin,
  list: PiListThin,
  arrow_down: PiArrowDownThin,
};

export function generalIcon(icon: keyof typeof icons) {
  const GeneralIcon = icons[icon];
  return <GeneralIcon />;
}
