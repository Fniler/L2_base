function cache(func) {
  const memo = {};
  return function() 
  {
    const key = JSON.stringify(arguments);
    if (memo.hasOwnProperty(key)) 
    {
      return memo[key];
    }
    return memo[key] = func.apply(this, arguments);
  };
}
