export function groupBy<T>(items: T[], group: keyof T & string) {
  const obj: any = {};
  // groupBy(this.fields, 'group')

  for (const i of items) {
    const gname = i[group] || 'undefined';
    obj[gname] = i;
  }
  return obj as Record<string, T>;
}
