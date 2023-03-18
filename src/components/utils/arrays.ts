
export function transformListIntoRowsOfElems<Type>(data:Type[], colPerRow: number = 3):Array<Array<Type>>  {
    const rows: Array<Array<Type>> = [];
    let row: Type[] = [];
  
    data.forEach(function (elem, index) {
      row.push(elem);
      if (index != 0 && (index + 1) % colPerRow == 0) {
        rows.push(row);
        row = [];
      }
    }, Object.create(null));
    return rows;
}