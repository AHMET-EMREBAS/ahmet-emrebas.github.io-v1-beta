export function groupBy(items: Record<string, any>[], group: string) {
  const obj: any = {};
  // groupBy(this.fields, 'group')

  for (const i of items) {
    const gname: string = i[group] || 'undefined';
    obj[gname] = i;
  }
  return obj;
}
