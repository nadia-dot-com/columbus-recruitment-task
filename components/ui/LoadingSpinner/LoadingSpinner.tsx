import classes from "./LoadingSpinner.module.css";

export function LoadingSpinner() {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner} />
    </div>
  );
}
