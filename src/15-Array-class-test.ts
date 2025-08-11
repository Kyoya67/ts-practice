class RepeatArray<T> extends Array<T> {
    repeat(times: number): RepeatArray<T> {
      const result = new RepeatArray<T>();
      for (let i = 0; i < times; i++) {
        result.push(...this);
      }
      return result;
    }
  }
  
  const arrClass = new RepeatArray(1, 2, 3);
  const json = JSON.stringify(arrClass); // "[1,2,3]" ← ここまでは同じ
  const back = JSON.parse(json);
  
  console.log(back instanceof RepeatArray); // false
  console.log(back instanceof Array);       // true

  console.log("================")

  function repeatArray<T>(arr: T[], times: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < times; i++) {
      result.push(...arr);
    }
    return result;
  }
  
  // 使い方
  const arr = [1, 2, 3];
  const repeated = repeatArray(arr, 3);
  console.log(repeated);
  