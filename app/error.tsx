"use client";

import { ErrorBadge } from "@/components/ui/ErrorBadge/ErrorBadge";
import classes from "./error.module.css";
import { ERROR_MESSAGE } from "@/lib/constants";

export default function ErrorState() {
  return (
    <div className={classes.error}>
      <ErrorBadge />
      <div className={classes.errorMessage}>{ERROR_MESSAGE}</div>
    </div>
  );
}
