function isCircleSorted( arr ) {
  var drops = 0;
  for (var i = 0; i < arr.length; i++) 
  {
    var nextIndex = (i + 1) % arr.length;
    if (arr[i] > arr[nextIndex]) 
    {
      drops++;
    }
  }
  return drops <= 1;
}
