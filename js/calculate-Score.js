// export const calculateScore = (answer, card) => {
// let score = 0;
// if (answer.correct) {
// score += (card.closed * 42);
// }
// score -= 84;
// return score;
// };

export const calculateScore = (correctanswer, card) => {
  let score;
  if (score == undefined) {
    score = 0;
  }
  if (correctanswer === 1) {
    score += (card.closed * 42);
  }
  score -= 84;
  debugger;
  return score;

};
