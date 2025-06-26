export interface NavLink {
  name: string;
  section: string;
}

export interface NavHeaderProps {
  links: NavLink[];
}
export interface NavLinksProps {
  toggleMenu: () => void;
  links: NavLink[];
}