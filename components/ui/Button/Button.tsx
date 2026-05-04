import { ReactNode } from "react";
import classes from "./Button.module.css";

type Button = {
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (...args: any[]) => void;
  disabled?: boolean;
  children?: ReactNode;
};

export function Button({ text, type, onClick, disabled, children }: Button) {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
      {text}
    </button>
  );
}
