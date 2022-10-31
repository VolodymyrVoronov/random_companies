import getRandomNumberMinMax from "./getRandomNumberMinMax.js";

const getRandomValueFromArray = (array) => {
  const index = getRandomNumberMinMax(0, array.length - 1);

  return array[index];
};

export default getRandomValueFromArray;
