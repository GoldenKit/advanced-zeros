module.exports = function getzeros(number, base) {
  let buferBase = base;
   let zeros = number;
   for (let i = 2; i <= buferBase; i++){
     if (buferBase % i == 0){
       let count1 = 0;
       while (buferBase % i == 0){
         count1++;
         buferBase = Math.floor(buferBase / i);
       }
       let buferNumber = number;
       let count2 = 0;
       while (buferNumber / i  > 0){
         buferNumber = Math.floor(buferNumber / i);
         count2 += buferNumber;
       }
       zeros = Math.min(zeros, Math.floor(count2 / count1));
     }
   }
   return zeros;
 }
