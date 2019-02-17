export const CARDS_COUNT = 18;

// const getRandomFromInterval = function (min, max) {
// return Math.floor(Math.random() * (max - min) + min);
// };

const getRandomSet = (min, max, number) => {
  let res = new Set();
  while (res.size < number) {
    res.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return res;
};

const setImg = getRandomSet(1, 19, 9);

// const getImgScr = ()=> {
// const src = [];
// for (let i = 0; i <= 8; i++) {
//   src.push(getRandomFromInterval(1, 19));
// }
// return src;
// };

// const cardsNumber = getImgScr();
const cardsNumber = [...setImg];

export const allcardsNumber = [...cardsNumber, ...cardsNumber];

const getCardsSrc = ()=> {
  const imgSrc = [];
  for (let i = 0; i < CARDS_COUNT; i++) {
    imgSrc[i] = `img/${allcardsNumber[i]}.png`;
  }
  return imgSrc;
};

export const initialState = {
  score: 0,
  time: 0,
  scr: getCardsSrc()
};

