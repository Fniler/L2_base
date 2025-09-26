function hasTwoCubeSums(n) {
  let count = 0;
  let max = Math.floor(Math.cbrt(n));

  for (let a = 1; a <= max; a++) 
  {
    for (let b = a + 1; b <= max; b++)
    {
      if (a * a * a + b * b * b === n) 
      {
        count++;
        if (count === 2) 
          {
          return true;
          }
      }
    }
  }

  return false;
}
