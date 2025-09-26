function primeFactors(n) {
    let str = "";
    let divis = 2;

    while (n > 1) 
    {
        let power = 0;

        while (n % divis === 0)
        {
            n = Math.floor(n / divis);
            power++;
        }

        if (power === 1) 
        {
            str += "(" + divis + ")";
        } 
      else if (power > 1) 
        {
            str += "(" + divis + "**" + power + ")";
        }

        divis++;
    }

    return str;
}
