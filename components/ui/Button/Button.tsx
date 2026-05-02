'use client'

import classes from "./Button.module.css";

type Button = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (...args: any[]) => void;
  disabled?: boolean;
};

export function Button({
  text,
  type,
  onClick,
  disabled,
}: Button) {

  return (
    <button
      className={classes.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label="button"
    >
      {text}
    </button>
  );
}