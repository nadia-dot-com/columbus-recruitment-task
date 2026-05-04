import classes from './Badge.module.css'

export function Badge({quantity}: {quantity: number}) {
    return <div className={classes.badge}>{quantity}</div>
}