function expandedForm(numb) {
 numb = String(numb);
  
 let res = [];
  
 for (var i = 0; i < numb.length; i++) 
 {
  if (numb[i] == 0) 
  {
    continue;
  }
  else res.push(numb[i] + "0".repeat(numb.length -i -1))
 }
 return res.join(" + ")
}
