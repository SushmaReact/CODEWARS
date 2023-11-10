 //car cost 40$ per day 
 //if you rent for 7 days you get 50$ off
 //if you rent for 3 days you get 20$ off

 // Solution 1
const rentalCarCost = (d) => {
    const DAY_COST = 40
    let discount = d >= 7 ? 50 : (d >= 3) ? 20 : 0
    return DAY_COST * d - discount 
  } 
// solution 2    
  function rentalCarCost(d) {
    var sum = 40 * d;
    
    if (d >= 3) sum -= 20;
    if (d >= 7) sum -= 50;
    
    return sum;
  }

// Solution 3 
function rentalCarCost(d) {
    return 40 * d - (d >= 7 ? 50 : d >= 3 ? 20 : 0)
      
  }
// Solution 4 it is simeler to above one 
  function rentalCarCost(d) {
    return 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0)
  
    
  } 