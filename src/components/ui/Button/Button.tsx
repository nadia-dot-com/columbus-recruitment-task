import { ReactNode } from "react";
import classes from "./Button.module.css";

type Button = {
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (...args: any[]) => void;
  disabled?: boolean;
  children?: ReactNode;
  ariaLabel?: string;
  className?: string;
};

export function Button({
  text,
  type,
  onClick,
  disabled,
  children,
  ariaLabel,
  className,
}: Button) {
  return (
    <button
      className={`${classes.button} ${className ?? ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
      {text}
    </button>
  );
}
