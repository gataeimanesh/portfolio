//business cacluations

//hide an show elements

/*function hideElements() {

}

/*function idFinder(ele) {
    var id = ele.id;

    console.log('area element id = ' + id);
  }

function hideElementOnClick(){
    idFinder(this);
    document.getElementById(id).hidden = true;

}*/




function hideCards() {
    var hiddenCards = document.getElementById("card", "card3", "card5", "card7", "card9", "card11");
    hiddenCards = 'none';
}

//math

//gross profits = sales revenue - cost of sales 

function getInputValueGrossProfit() {
    // Selecting the input element and get its value 
    salesRevenueInput = document.getElementById("salesRevenue").value;
    console.log(salesRevenueInput);
    costOfSalesInput = document.getElementById("costOfSales").value;

    //calculating val 
    grossProfit = salesRevenueInput - costOfSalesInput;
    console.log(grossProfit);
    return grossProfit;
}

function displayGrossProfit() {
    document.getElementById("grossProfit").placeholder = "£" + grossProfit
    document.getElementById("disGP").innerHTML = "£" + grossProfit
}

// Net profit = gross profit − other operating expenses and interest
function getInputValueNetProfit() {
    otherOperatingExpensesAndIntrests = document.getElementById("otherOperatingExpensesAndIntrests").value;

    netProfit = grossProfit - otherOperatingExpensesAndIntrests;
    console.log(grossProfit);
    console.log(netProfit);
    return netProfit;
}

function displaynetProfit() {
    document.getElementById("disNP").innerHTML = "£" + netProfit
}

// Gross Profit Margin = (gross profit ÷ sales revenue) × 100
function getInputValueGrossProfitMargin() {

    grossProfitMargin = (grossProfit / salesRevenueInput) * 100;
    console.log(grossProfitMargin);
}

function displayGrossProfitMargin() {
    document.getElementById("disGPM").innerHTML = grossProfitMargin + "%"
}

// Net profit margin = 	(Net profit ÷ Sales Revenue) × 100
function netProfitMargin() {

    netProfitMargin = (netProfit / salesRevenueInput) * 100;
    console.log(netProfitMargin);
}

function displaynetProfitMargin() {
    document.getElementById("disNPM").innerHTML = netProfitMargin + "%"
}


// Average Rate of Return = (average anual profit(total profit/ number of years)/cost of investment)*100
function averageRateOfReturn() {
    var averageAnualProfit = document.getElementById("averageAnualProfit").value;
    var totalProfit = document.getElementById("totalProfit").value;
    var numberOfYears = document.getElementById("numberOfYears").value;
    var costOfInvestment = document.getElementById("costOfInvestment").value;

    averageRateOfReturn1 = (averageAnualProfit * (totalProfit / numberOfYears) / costOfInvestment) * 100;
    console.log(averageRateOfReturn1);
}

function displayAverageRateOfReturn() {
    document.getElementById("disAROR").innerHTML = averageRateOfReturn1 + "%"
}


//chart 
/*const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

olddata = [0, 10, 5, 2, 20, 30, 45];
newdata = [11, 10, 10, 10, 20, 10, 10];

const data = {
    labels: labels,
    datasets: [{
        label: '2022',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: olddata,
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

function addData(chart, label, data) {
    chart.data.datasets[0].data = newdata;
    chart.update();
}











*/
