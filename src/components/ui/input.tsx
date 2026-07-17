import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", disabled = false, ...props }: InputProps) {
  return (
    <input
      className={`input-base ${disabled ? "input-disabled" : ""} ${className}`.trim()}
      disabled={disabled}
      {...props}
    />
  );
}
