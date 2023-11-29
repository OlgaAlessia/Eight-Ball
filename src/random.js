/** get a random item from the given list. */

function getRandomAnswer(arr) {

  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];

}

export { getRandomAnswer };