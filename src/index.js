module.exports = function getZerosCount(number, base) {
  let arr = [];
  let ost;
  let chas;
  let bufer = number;
  let string = "";
  do {
    ost = bufer % base;
    chas = Math.floor(bufer / base);
    arr.push(ost);
    bufer = chas;
    } while (chas >= base)
  arr.push(chas);
  for (let i = arr.length - 1; i >= 0; i--){
    string += arr[i];
    }
  let num = Number(string);
 let k = 0;
 let n = 1;
 while (Math.floor(num/(Math.pow(5,n))) > 0) {
   k = k + Math.floor(num/(Math.pow(5,n)));
   n++;
 }
 return k;
 }
