export interface NavItem {
  label: string;
  href: string;
  isAnchor: boolean;
}

export const navigationItems: NavItem[] = [
  { label: "About", href: "#about", isAnchor: true },
  { label: "Orbion", href: "#orbion", isAnchor: true },
  { label: "Projects", href: "#projects", isAnchor: true },
  { label: "Skills", href: "#skills", isAnchor: true },
  { label: "Journey", href: "#experience", isAnchor: true },
  { label: "Certifications", href: "#certifications", isAnchor: true },
  { label: "Contact", href: "#contact", isAnchor: true },
];
