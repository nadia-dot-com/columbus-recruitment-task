export const getDiscountPrice = (price: number, discount: number): number =>
  price - (discount * price) / 100;