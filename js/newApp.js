// Parse XML to JSON
  // 1 month rate is an Array of Objects - [{"date": "21.03.2016","rate": 3.26}]

/*d3.xml('https://www.treasury.gov/resource-center/data-chart-center/interest-rates/pages/XmlView.aspx?data=yieldyear&year=2017',function(err,data) {
  console.dir(data);
  if(err) throw err;
  data = [].map.call(data.querySelectorAll("entry > content"), function(d) {
    console.log(d);
  })
})*/

d3.json('../data/parsedData.json',function(err,data) {
  if(err) throw err;
  console.dir(data);
})
