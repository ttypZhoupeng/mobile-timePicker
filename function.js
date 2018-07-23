// 获取时间数组 0-23（h） 0-59 (m)
window.range = function (n) {
  const arr = []
  for(var i=0;i<n;i++){
    arr.push(i>9?i+'':('0'+i))
  }
  return arr
}

 function formatDate(timestamp, format) {
  if (!timestamp) {
    return '';
  }
  const date = new Date(Number.parseInt(timestamp, 10));
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let i = date.getMinutes();
  let s = date.getSeconds();
  const w = date.getDay();
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  m = m < 10 ? '0' + m : m;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  i = i < 10 ? '0' + i : i;
  s = s < 10 ? '0' + s : s;

  return format.replace('YYYY', y)
    .replace('MM', m)
    .replace('DD', d)
    .replace('H', h)
    .replace('i', i)
    .replace('s', s)
    .replace('WW', week[w]);
}