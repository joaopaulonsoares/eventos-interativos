export function filterArrayOfObjects(arrayList: any[], searchString: string) {
  return arrayList.filter((event : any) => Object.values(event).some((value: any) => (`${value}`).toLowerCase().includes(searchString.toLowerCase())));
}
