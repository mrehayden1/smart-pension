export function pickPair<T>(choices: T[]): [ T, T ] | null {
  if (choices.length < 2) {
    return null;
  } else {
    const shuffled = choices.slice().sort(() => Math.random() - 0.5);
    return [ shuffled[0], shuffled[1] ];
  }
}
