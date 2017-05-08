var salesTaxRates = {

  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var salesData = 0;
var taxRates = 0;
var result = {};


function add(a, b) {
  return a + b;
}


  var salesObj = {

  Telus: {
    totalSales: 0,
    totalTaxes: 0
  },
  Bombardier: {
    totalSales: 0,
    totalTaxes: 0
  }
};

function calculateSalesTax(salesData, taxRates) {

  for (i=0; i < salesData.length; i++) {
    var totalSales = salesData[i].sales.reduce(add, 0);
    var totalTaxes = totalSales * taxRates[salesData[i].province];
    salesObj[salesData[i].name].totalSales += totalSales;
    salesObj[salesData[i].name].totalTaxes += totalTaxes;
  }
  //totalSales = salesData.sales.reduce(add,0);
    console.log(salesObj);

  // Implement your code here
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/