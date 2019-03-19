export function range<T>(length: number, fill?: T): Array<T> {
  return new Array(length).fill(fill);
}

export function flatten<T>(list: T[][]): T[] {
  return ([] as T[]).concat(...list);
}

export function intersect(list1: any[], list2: any[]): (boolean | undefined)[] {
  return list1.map((l: any, index: number) =>
    l === list2[index] ? true : undefined
  );
}

export function take(list: any[], length: number) {
  return range(length, null).map((_, i) => list[i]);
}

export function deepCopy<T>(list: T[]) {
  return ([] as T[]).concat(list);
}
