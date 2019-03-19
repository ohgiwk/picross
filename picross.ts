import { range, flatten, intersect, take, deepCopy } from "./list";

function getCertaintyCell(list: number[], length: number) {
  let _list1 = list.map(i => [...range(i, true), undefined]);
  const list1 = take(flatten(_list1), length);
  const list2 = deepCopy(list1).reverse();

  return intersect(list1, list2);
}

function main() {
  const x = 25;
  const y = 25;

  const rows = [[1], [1, 1, 1], [1, 1, 1], [1, 1, 1]];
  const columns = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

  const rowResults = rows.map(r => getCertaintyCell(r, x));
  const columnResults = columns.map(r => getCertaintyCell(r, y));
  console.log(rowResults);
  console.log(columnResults.length);
}
main();
