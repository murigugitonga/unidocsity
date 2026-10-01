/**
 * The code in this reusable component stands for 
 * 
 */

import { cn } from "@/lib/utils/cn";
import type { ButtonHTMLAttributes } from "react";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium translation-colors",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        {
          "rounded-lg bg-blue-600 text-white hover:bg-blue-700":
            variant === "primary",
          "rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-200":
            variant === "secondary",
          "rounded-lg border border-gray-300 bg-white text-gray-900 hover:bg-gray-50":
            variant === "outline",
          "rounded-lg text-gray-700 hover:bg-gray-100": variant === "ghost",
        },
        {
          "px-3 py-2 text-sm": size === "sm",
          "px-4 py-2.5 text-sm": size === "md",
          "px-5 py-3 text-base": size === "lg",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
