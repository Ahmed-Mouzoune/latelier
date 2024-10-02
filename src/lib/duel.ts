export function generateAllPossiblePairWithoutDuplicate(
  cats: ICat[]
): CatVersus[] {
  const pairs: CatVersus[] = [];

  for (let i = 0; i < cats.length; i++) {
    for (let j = i + 1; j < cats.length; j++) {
      pairs.push([cats[i], cats[j]]);
    }
  }
  shuffleArray(pairs);
  return pairs;
}

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}
