const getSalePrice = (styleArr) => {

  const originalPrice = Number(styleArr[0].original_price);
  console.log(originalPrice)
  let min = originalPrice;
  styleArr.forEach((obj) => {
    if (obj.sale_price !== null && Number(obj.sale_price) < min) {
      min = Number(obj.sale_price);
    }
  });
  if (min === originalPrice) {
    return null;
  }
  return min;
};
export default getSalePrice;
