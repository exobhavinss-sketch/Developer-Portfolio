import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "status" | "mono" | "default";
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  pulse = false,
  className,
}) => {
  if (variant === "status") {
    return (
      <div
        className={twMerge(
          clsx(
            "inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-surface-low border border-border text-on-surface select-none",
            className
          )
        )}
      >
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          )}
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
        </span>
        <span className="font-mono text-xs uppercase tracking-wider font-semibold">
          {children}
        </span>
      </div>
    );
  }

  if (variant === "mono") {
    return (
      <span
        className={twMerge(
          clsx(
            "font-mono text-xs px-2 py-0.5 rounded bg-surface-container text-on-surface-variant hairline-border uppercase tracking-wider",
            className
          )
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-container text-on-surface",
          className
        )
      )}
    >
      {children}
    </span>
  );
};
