"use client";

import Link from "next/link";
import { useState } from "react";

type Variant = "light" | "dark";

interface BaseProps {
  text: string;
  variant?: Variant;
  className?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
  disabled?: never;
}

interface ButtonProps extends BaseProps {
  href?: never;
  target?: never;
  rel?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

type WaveButtonProps = LinkProps | ButtonProps;

export default function WaveButton({
  text,
  variant = "light",
  className = "",
  href,
  target,
  rel,
  onClick,
  type,
  disabled,
}: WaveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const colors =
    variant === "light"
      ? "bg-white text-[#16a637]"
      : "bg-[#16a637] text-white";

  const base = `inline-flex items-center justify-between ${colors} text-lg font-bold px-12 py-5 rounded-full transition-transform duration-300 w-72 ${
    disabled ? "opacity-60 cursor-not-allowed" : "hover:scale-110"
  } ${className}`;

  const inner = (
    <>
      <span className="flex">
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform"
            style={
              isHovered && !disabled
                ? { animation: `wave 0.4s ease-in-out ${i * 0.05}s` }
                : undefined
            }
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
      <span>→</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={base}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={base}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {inner}
    </button>
  );
}
