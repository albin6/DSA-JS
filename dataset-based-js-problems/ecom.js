const data = require("./ecom-data.json");

// Calculate the total revenue.
function calculateRevenue(orders) {
  let revenue = 0;
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < orders[i].items.length; j++) {
      revenue += orders[i].items[j].price;
    }
  }
  return revenue;
}

const totalRevenue = calculateRevenue(data.orders);
console.log(totalRevenue);

// Find the top 3 selling products by quantity.
function topSelling(orders) {}

const topSellingProduct = topSelling(data.orders);
console.log(topSellingProduct);

// Return the average order value.
