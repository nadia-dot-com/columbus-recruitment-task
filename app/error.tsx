"use client";

import classes from "./error.module.css";
import { ErrorBadge } from "@/components/ui/ErrorBadge/ErrorBadge";
import { ERROR_MESSAGE } from "@/lib/constants";
import { Button } from "@/components/ui/Button/Button";

const node = process.env.NODE_ENV;

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className={classes.error}>
      <ErrorBadge />
      <div className={classes.errorMessage}>{node === 'production' ? ERROR_MESSAGE : error.message}</div>
      <Button text="TRY AGAIN!" onClick={reset} type="reset"/>
    </div>
  );
}
