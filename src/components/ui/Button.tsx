import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary active:scale-[0.995] select-none text-center";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs rounded",
    md: "px-4 py-2 text-sm rounded",
    lg: "px-5 py-2.5 text-base rounded",
  };

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-[#222222] border border-transparent shadow-xs",
    secondary:
      "bg-surface text-on-surface hairline-border hover:bg-surface-low hover:border-on-surface",
    outline:
      "bg-transparent text-on-surface hairline-border hover:bg-surface-low hover:border-on-surface",
    ghost:
      "bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container",
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
