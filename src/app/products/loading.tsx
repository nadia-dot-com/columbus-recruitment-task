import classes from "./loading.module.css";
import { LoadingSpinner } from "@/src/components/ui/LoadingSpinner/LoadingSpinner";

export default function Loading() {
  return (
    <div className={classes.loading}>
      <LoadingSpinner />
    </div>
  );
}
