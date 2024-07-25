import { time, timeEnd } from "console";
import { List } from "./types";
import { getUnsortedList } from "./get-unsorted-list";

function selectionSort(list: List) {
  for (let i = 0; i < list.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[minIndex] > list[j]) {
        minIndex = j;
      }
    }

    const temp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = temp;
  }
}

const list = getUnsortedList(100);
time("selection-sort");
selectionSort(list);
timeEnd("selection-sort");
console.log(list);
