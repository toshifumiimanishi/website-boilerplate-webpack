export const numberWithDelimiter = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const zeroPadding = (number: number, targetLength = 2) => {
  return number.toString().padStart(targetLength, '0')
}
