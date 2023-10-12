const makeDivCharts = require('./make-tag-list')
console.log(makeDivCharts)

const { listCharts } = require('billboard-top-100');


let chartArray = [];

listCharts((err, charts) => {

  console.log(charts);

});

