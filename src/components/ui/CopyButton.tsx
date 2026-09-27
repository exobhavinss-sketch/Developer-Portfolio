"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  label,
  className,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={twMerge(
        clsx(
          "inline-flex items-center gap-2 px-3 py-2 rounded bg-surface-low hover:bg-surface-container font-mono text-xs text-on-surface-variant hover:text-on-surface transition-all hairline-border cursor-pointer select-none",
          copied && "ring-1 ring-secondary text-secondary",
          className
        )
      )}
      title="Click to copy to clipboard"
      aria-label={copied ? "Copied" : `Copy ${textToCopy}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-secondary" />
          <span className="font-semibold text-secondary">
            COPIED TO CLIPBOARD ✓
          </span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-on-surface-muted" />
          <span>{label || textToCopy}</span>
        </>
      )}
    </button>
  );
};
