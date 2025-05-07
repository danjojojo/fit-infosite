"use client";

import { PiArrowDownThin, PiListThin, PiXThin } from "react-icons/pi";
import { IoIosWarning, IoMdFlag } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

export const icons = {
  close: PiXThin,
  list: PiListThin,
  arrow_down: PiArrowDownThin,
  warning: IoIosWarning,
  arrow_right: SlArrowRight,
  arrow_right_w_tail: GoArrowRight,
  flag: IoMdFlag,
  email: TfiEmail,
  phone: BsTelephone,
  facebook: FaFacebook,
  instagram: AiFillInstagram,
  twitter: RiTwitterXFill,
};

export function generalIcon(icon: keyof typeof icons) {
  const GeneralIcon = icons[icon];
  return <GeneralIcon />;
}
