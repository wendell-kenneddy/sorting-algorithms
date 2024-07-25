import { time, timeEnd } from "console";
import { getUnsortedList } from "./get-unsorted-list";
import { List } from "./types";

function bubbleSort(list: List) {
  if (!list.length) return;

  for (let i = 0; i < list.length; i++) {
    let swapped = false;

    for (let j = 0; j < list.length - i; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }
}

const list = getUnsortedList(100);
console.log(list);
time("bubble-sort");
bubbleSort(list);
timeEnd("bubble-sort");
console.log(list);
