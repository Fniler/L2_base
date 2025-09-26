function howManyTimes(time1, time2) {
  let s = new Date(time1);
  let f = new Date(time2);
  let total = 0;

  while (s < f) 
  {
    let h = s.getHours();
    let m = s.getMinutes();
    let sec = s.getSeconds();

    if (m === 0 && sec < (h % 12 || 12)) 
    {
      total++;
    } 
    else if (m === 30 && sec === 0) 
    {
      total++;
    }
    s = new Date(s.getTime() + 1000);
  }
  return total;
}
