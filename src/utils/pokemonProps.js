export const calcBST = (bases) => {
  const basesArr = bases.map((item) => {
    return item.base_stat;
  });
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return basesArr.reduce(reducer);
};
