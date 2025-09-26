function ipv4Parser(ip, mask){
  
  var ipnetwork = new Array(4);
  
  var idhosta = new Array(4);
  
  var ip = ip.split('.');
  var mask = mask.split('.');
  
  for(var i = 0; i < ip.length; i++)
  {
    ipnetwork[i] = ip[i] & mask[i];
    idhosta[i] = ip[i] & ~mask[i];
  }
  return [ipnetwork.join('.'), idhosta.join('.')];
}
