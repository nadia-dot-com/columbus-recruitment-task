import classes from "./LoadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={classes.loader} role="status" aria-label="Loading">
      <div className={classes.spinner} />
    </div>
  );
}
