import React from "react";

interface MonogramProps {
  className?: string;
  size?: number;
}

export const Monogram: React.FC<MonogramProps> = ({
  className = "h-8 w-auto",
  size = 32,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-label="Bhavin Shankur Monogram"
    >
      <rect width="100" height="100" rx="20" fill="#0A0A0A" />
      <path
        d="M30 28H56C63.732 28 70 34.268 70 42C70 49.732 63.732 56 56 56H30V28Z"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M30 46H58C65.732 46 72 52.268 72 60C72 67.732 65.732 74 58 74H30V46Z"
        stroke="#FFFFFF"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="50" r="3" fill="#3B82F6" />
    </svg>
  );
};
