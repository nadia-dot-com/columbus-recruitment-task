import { LoadingSpinner } from "@/src/components/ui/LoadingSpinner/LoadingSpinner";
import classes from './loading.module.css';

export default function Loading() {
  return (
    <div className={classes.Loading}>
      <LoadingSpinner />
    </div>
  );
}
