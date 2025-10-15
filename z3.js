function whatCentury(year)
{
  var centr = Math.ceil(year / 100);
  
  if (centr > 10 && centr < 20) 
  {
    return centr + "th";
  }
  
  switch (centr % 10) {
    case 1: return centr + "st";
    case 2: return centr + "nd";
    case 3: return centr + "rd";
    default: return centr + "th";
  }
}
