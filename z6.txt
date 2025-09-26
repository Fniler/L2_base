function toWeirdCase(string){
  var result = '';
  var index = 0;
  
  for(var i = 0; i < string.length; i++) 
  {
    if(string[i] === ' ')
    {
      result += ' ';
      index = 0;
    } else if(index % 2 === 0) 
    {
      result += string[i].toUpperCase();
      index++;
    } else if(index % 2 !== 0) 
    {
      result += string[i].toLowerCase();
      index++;
    }
  }

  return result;
};
