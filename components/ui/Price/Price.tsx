import { getDiscountPrice } from "@/utils/getDiscountPrice";
import classes from "./Price.module.css";

export const Price = ({
  price,
  promotion,
}: {
  price: number;
  promotion?: number;
}) => {
  return (
    <div className={classes.price}>
      {promotion ? (
        <div className={classes.promotionContainer}>
          <div>US${getDiscountPrice(price, promotion).toFixed(2)}</div>
          <div className={classes.originalPrice} aria-label="Original price">
            US${Number(price).toFixed(2)}
          </div>
        </div>
      ) : (
        <div>US${Number(price).toFixed(2)}</div>
      )}
    </div>
  );
};
