function findMissing(list) {  
  const differen = list[2] - list[1];
  
  for(i = 0; i < list.length - 1; i++) 
  {
    if(list[i + 1] - list[i] !== differen) 
      {
        return list[i] + differen;
      }
  }
}
