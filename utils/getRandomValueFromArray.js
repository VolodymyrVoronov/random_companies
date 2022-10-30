import getRandomArbitrary from "./getRandomNumberMinMax.js";

const getRandomValueFromArray = (array) => {
  const index = getRandomArbitrary(0, array.length - 1);

  return array[index];
};

export default getRandomValueFromArray;
