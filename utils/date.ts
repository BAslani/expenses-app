export const getDateDifference = (date: Date, days: number) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}
