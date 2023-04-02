export function transformListIntoRowsOfElems<Type>(data:Type[], colPerRow: number = 3):Array<Array<Type>>  {
  const _data = [...data];
  const numRows = Math.ceil(_data.length / colPerRow);
  const result = [];
  for (let i = 0; i < numRows; i++) {
    result.push(_data.slice(i * colPerRow, (i + 1) * colPerRow));
  }

  return result;
}
