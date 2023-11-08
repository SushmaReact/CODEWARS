function rentalCarCost(days) {
    // Your solution here
    const dailyprice= 40;
    let totalcost = days * dailyprice;
    if (days >=7)
      {
        totalcost= totalcost-50;
        
      }else if(days >=3)
        {
          totalcost= totalcost-20;
        }
    return totalcost;
    }