function wave(str) {
  
  let res = [];

  for (let i = 0; i < str.length; i++) 
  {
    if (str[i] === " ") 
      {
        continue; 
      }

    let waved = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    res.push(waved);
  }
  return res;
}
