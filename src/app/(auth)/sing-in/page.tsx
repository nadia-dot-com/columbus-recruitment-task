import classes from "./page.module.css";
import { Button } from "@/src/components/ui/Button/Button";
import { GitHub, Google } from "@deemlol/next-icons";

export default function SingIn() {
  return (
    <div className={classes.container}>
      <h1>Sing In</h1>
      <Button><GitHub color="#000"/> Continue with Google</Button>
      <Button><Google color="#000"/> Continue with GitHub</Button>
      <div className={classes.divider}>
        <span> Or continue with email </span>
      </div>
      <form className={classes.form} action="">
        <div>
          <label htmlFor="email" className={classes.srOnly}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className={classes.srOnly}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <Button>Sing In</Button>
      </form>
      Don't have an account? Sign up
    </div>
  );
}
