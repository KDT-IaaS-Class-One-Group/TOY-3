const { listCharts } = require('billboard-top-100');

listCharts((err, charts) => {
  let chartArray = [];
  for (let i = 0; i < charts.length; i++){
    for (let j = chartArray.length; j <= chartArray.length; j++){
        chartArray[j] = "<a href = " + charts[i].url +">" + charts[i].name + "</a><br>";

        fs.writeFile('billboard.html', chartArray.join([]), function() {
          console.log('File created');
        });
        
        break
        
      }
    }
  });

