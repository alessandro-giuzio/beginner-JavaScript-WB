console.log('it worked!');

function calcBill(bill, taxRate = 0.13, tipRate = 0.15) {
  const total = bill + bill * taxRate + bill * tipRate;
  return total;
}

const myTotal = calcBill(100, 0.13);
const myTotal2 = calcBill(500, 0.13);
console.log(myTotal);
console.log(myTotal2);
