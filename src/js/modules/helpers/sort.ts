export const sortByAscending = (array: number[]) => {
  return [...array].sort((a, b) => {
    return a - b
  })
}

export const sortByDescending = (array: number[]) => {
  return [...array].sort((a, b) => {
    return b - a
  })
}
