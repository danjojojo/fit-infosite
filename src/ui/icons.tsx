"use client";

import { PiArrowDownThin, PiListThin, PiXThin } from "react-icons/pi";

import { IoIosWarning } from "react-icons/io";

import { SlArrowRight } from "react-icons/sl";

export const icons = {
  close: PiXThin,
  list: PiListThin,
  arrow_down: PiArrowDownThin,
  warning: IoIosWarning,
  arrow_right: SlArrowRight,
};

export function generalIcon(icon: keyof typeof icons) {
  const GeneralIcon = icons[icon];
  return <GeneralIcon />;
}
