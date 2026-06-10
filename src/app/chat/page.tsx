import classes from './page.module.css';
import { sendMessageAction } from "../actions";
import { Button } from '@/src/components/ui/Button/Button';

export default function Chat() {
  return (
    <div className={classes.container}>
      <h2>Chat</h2>
      <form action={sendMessageAction} className={classes.form}>
        <label htmlFor="message" hidden>Message</label>
        <input type="text" id="message" placeholder="Message" name='message'/>
        <Button>Send</Button>
      </form>
    </div>
  );
}
