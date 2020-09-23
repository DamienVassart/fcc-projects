/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {
  var status, change = [], due = cash - price;
  var units = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]; 

  var amounts = cid.reduce((res, val, i, arr) => res.concat(arr[i][1]), []);
  var available = +amounts.reduce((a, b) => a + b, 0).toFixed(2);

  if (available < due || amounts.filter((e, i) => units[i] <= due).reduce((a, b) => a + b) < due) status = "INSUFFICIENT_FUNDS";
  else if (available === due) {
    due -= available;
    status = "CLOSED";
    change = cid;
  }
  else {
    var res = [];
    status = "OPEN";
    for (let i = 8; i >= 0; i--) {
      if (units[i] <= due) {
        while (amounts[i] > 0 && due >= 0 && +due.toFixed(2) - units[i] >= 0) {
          amounts[i] -= units[i];
          due -= units[i];
          !res.includes(cid[i][0]) ? res.push(cid[i][0], units[i]) : res[res.indexOf(cid[i][0]) + 1] += units[i];
        } // end while
      } // end if
    } // end for
    change = res;
  } // end else
  
  return {status,change};
}
