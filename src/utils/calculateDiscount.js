export default function calculateDiscount(price, originalPrice) {
  const discount = 100 - (price * 100) / originalPrice;
  return Math.floor(discount);
}
