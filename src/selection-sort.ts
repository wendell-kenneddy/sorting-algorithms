import { time, timeEnd } from "console";

type List = Array<string | number>;

function selectionSort(list: List, startIndex: number) {
  if (!list.length) return list;

  const sortedList: List = [...list];

  for (let i = startIndex; i < list.length; i++) {
    const current = sortedList[i];

    if (current < sortedList[startIndex]) {
      const temp = sortedList[startIndex];
      sortedList[startIndex] = current;
      sortedList[i] = temp;
    }
  }

  if (startIndex == list.length - 1) return list;
  return selectionSort(sortedList, startIndex + 1);
}

const unsortedList = Array(100)
  .fill(0)
  .map(() => Math.round(Math.random() * 999));

time("sort-function");
const sortedList = selectionSort(unsortedList, 0);
timeEnd("sort-function");
console.log(sortedList);
