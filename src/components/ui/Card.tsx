import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  interactive = false,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          "bg-surface rounded-xl hairline-border p-6 transition-all duration-200",
          interactive &&
            "hover:border-on-surface hover:shadow-xs cursor-pointer",
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
