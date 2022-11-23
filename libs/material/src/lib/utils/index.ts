export function groupBy<T>(items: T[], group: keyof T & string) {
  const obj: any = {};
  // groupBy(this.fields, 'group')

  for (const i of items) {
    const gname = i[group] || 'undefined';
    if (obj[gname]) {
      obj[gname].push(i);
    } else {
      obj[gname] = [];
      obj[gname].push(i);
    }
  }
  return obj as Record<string, T[]>;
}

export function uniqueBy<T>(items: T[], field: keyof T & string) {
  const nlist: T[] = [];

  for (const i of items) {
    if (nlist.find((e) => e[field] === i[field])) {
      continue;
    }
    nlist.push(i);
  }

  return nlist;
}
