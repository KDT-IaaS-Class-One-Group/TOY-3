const makeDivCharts = require('./make-tag-list')
console.log(makeDivCharts)

const { listCharts } = require('billboard-top-100');


let chartArray = [];

listCharts((err, charts) => {

  console.log(charts);
  for (let i = 0; i < charts.length; i++){

    for (let j = chartArray.length; j <= chartArray.length; j++){
      chartArray[j] = "<div>" + charts[i].name +" "+charts[i].url + "</div>";
      break
    }

  }
  
});

