export const shuffle = <T>([...array]: T[]) => {
  const arrayLength = array.length

  for (let i = 0; i < arrayLength; i++) {
    const randomIndex: number = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]
  }

  return array
}
