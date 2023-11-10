function rentalCarCost(days) {
    // Your solution here
    const dailyPrice= 40;
    let totalCost = days * dailyPrice;
    if (days >=7)
      {
        totalCost -= 50;
        
      }else if(days >=3)
        {
          totalCost-= 20;
        }
    return totalCost;
    }