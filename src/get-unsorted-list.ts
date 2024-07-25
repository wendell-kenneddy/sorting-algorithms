export function getUnsortedList(length: number) {
  return Array(length)
    .fill(0)
    .map(() => Math.round(Math.random() * 1000));
}
