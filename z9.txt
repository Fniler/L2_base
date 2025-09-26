function solution(str) {
    let arr = [];
    let i = 0;
  
    while (i < str.length) 
    {
        if (i + 1 < str.length) 
        {
            arr.push(str[i] + str[i + 1]);
        } 
      else 
        {
            arr.push(str[i] + "_");
        }
        i = i + 2;
    }
    return arr;
}
