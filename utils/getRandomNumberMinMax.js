const getRandomNumberMinMax = (minValue = 0, maxValue = 10) => {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

export default getRandomNumberMinMax;
