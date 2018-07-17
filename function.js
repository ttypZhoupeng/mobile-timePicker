window.range = function(n) {
  const arr = []
  for(var i=0;i<n;i++){
    arr.push(i>9?i+'':('0'+i))
  }
  return arr
}