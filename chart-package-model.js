const { listCharts } = require('billboard-top-100');
const http = require('http');
const fs = require('fs');

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

    http.createServer(function(request, response){
      console.log(request.method)
      console.log(request.url)
    
      let writeHeadObject = {
        'Content-Type' : 'text-html'
      }
    
      response.writeHead(200, writeHeadObject)
    
      fs.readFile("./billboard.html", function(err, data){
        if(err){
          console.error("파일을 읽지 못했습니다.")
        } else {
          response.end(data)
        }
      })
    
    }).listen(8080);