export interface NavItem {
  label: string;
  href: string;
  isAnchor: boolean;
}

export const navigationItems: NavItem[] = [
  { label: "About", href: "#about", isAnchor: true },
  { label: "Projects", href: "#projects", isAnchor: true },
  { label: "Skills", href: "#skills", isAnchor: true },
  { label: "Experience", href: "#experience", isAnchor: true },
  { label: "Contact", href: "#contact", isAnchor: true },
];
