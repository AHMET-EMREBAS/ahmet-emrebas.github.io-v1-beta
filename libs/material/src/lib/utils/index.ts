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
