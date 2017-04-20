var fs = require('fs'),
xml2js = require('xml2js')
request = require('request');

const url  = "https://www.treasury.gov/resource-center/data-chart-center/interest-rates/pages/XmlView.aspx?data=yieldyear&year=2017";

request(url,function(err,res,body) {
  if(err) {
    console.error(err);
    // Write body
  } else {
    //console.dir(body);
    parseXML(body);
  }
})


function parseXML(body) {
  var parser = xml2js.Parser();
  parser.parseString(body, function(err,res) {
    if(err) {
      console.error(err);
    } else {
      console.log("XML parsed result");
      //console.log(res);
      var entries = res.pre.entry;
      //console.log(entries);
      //console.log(entries[10].content[0]);
      console.dir(entries[10].content[0]['m:properties'][0]['d:BC_2YEAR'][0]._);
      var properties = {};
      var onemonthProperties  = [];
      var threemonthProperties  = [];
      var sixmonthProperties  = [];
      var oneyearProperties  = [];
      var twoyearProperties  = [];
      var threeyearProperties  = [];
      var fifthyearProperties  = [];
      var sevenyearProperties  = [];
      var tenyearProperties  = [];
      var twentyyearProperties  = [];
      var thirtyyearProperties  = [];
      entries.forEach(function(entry) {
        //var values = {[]}
        //properties.push(entry.content[0]['m:properties'][0]);
        console.log("Date ");
        console.dir(entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._);
        console.log("1 Month");
        console.log(entry.content[0]['m:properties'][0]['d:BC_1MONTH'][0]._);
        console.log("3 Month");
        console.log(entry.content[0]['m:properties'][0]['d:BC_3MONTH'][0]._);
        console.log("6 Month");
        console.log(entry.content[0]['m:properties'][0]['d:BC_6MONTH'][0]._);
        console.log("1 Year");
        console.log(entry.content[0]['m:properties'][0]['d:BC_1YEAR'][0]._);
        console.log("2 Year");
        console.log(entry.content[0]['m:properties'][0]['d:BC_2YEAR'][0]._);
        console.log("3 Year");
        console.log(entry.content[0]['m:properties'][0]['d:BC_3YEAR'][0]._);
        console.log("5 Year");
        console.log(entry.content[0]['m:properties'][0]['d:BC_5YEAR'][0]._);
        console.log("7 Year");
        console.log(entry.content[0]['m:properties'][0]['d:BC_7YEAR'][0]._);
        console.log("10 Year");
        console.log(entry.content[0]['m:properties'][0]['d:BC_10YEAR'][0]._);
        console.log("20 Year");
        console.log(entry.content[0]['m:properties'][0]['d:BC_20YEAR'][0]._);
        console.log("30 Year");
        console.log(entry.content[0]['m:properties'][0]['d:BC_30YEAR'][0]._);

        var onemonth =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_1MONTH'][0]._
        };
        onemonthProperties.push(onemonth);
        var threemonth =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_3MONTH'][0]._
        };
        threemonthProperties.push(threemonth);
        var sixmonth =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_6MONTH'][0]._
        };
        sixmonthProperties.push(sixmonth);
        var oneyear =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_1YEAR'][0]._
        };
        oneyearProperties.push(oneyear);
        var twoyear =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_2YEAR'][0]._
        };
        twoyearProperties.push(twoyear);
        var threeyear =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_3YEAR'][0]._
        };
        threeyearProperties.push(threeyear);
        var fifthyear =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_5YEAR'][0]._
        };
        fifthyearProperties.push(fifthyear);
        var sevenyear =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_7YEAR'][0]._
        };
        sevenyearProperties.push(sevenyear);
        var tenyear =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_10YEAR'][0]._
        };
        tenyearProperties.push(tenyear);
        var twentyyear =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_20YEAR'][0]._
        };
        twentyyearProperties.push(twentyyear);
        var thirtyyear =  {
          "date": entry.content[0]['m:properties'][0]['d:NEW_DATE'][0]._,
          "value": entry.content[0]['m:properties'][0]['d:BC_30YEAR'][0]._
        };
        thirtyyearProperties.push(thirtyyear);
      });
      //console.dir(properties);
      console.log("1 month");
      console.dir(onemonthProperties);
      properties.onemonth = onemonthProperties;
      console.log("3 month");
      console.dir(threemonthProperties)
      properties.threemonth = threemonthProperties;
      console.log("6 month");
      console.dir(sixmonthProperties);
      properties.sixmonth  = sixmonthProperties;
      console.log("1 year");
      console.dir(oneyearProperties);
      properties.oneyear = oneyearProperties;
      console.log("2 year");
      console.dir(twoyearProperties);
      properties.twoyear = twoyearProperties;
      console.log("3 year");
      console.dir(threeyearProperties);
      properties.threeyear = threeyearProperties;
      console.log("5 year");
      console.dir(fifthyearProperties)
      properties.fifthyear = fifthyearProperties;
      console.log("7 year");
      console.dir(sevenyearProperties);
      properties.sevenyear = sevenyearProperties;
      console.log("10 year");
      console.dir(tenyearProperties)
      properties.tenyear = tenyearProperties;
      console.log("20 year");
      console.dir(twentyyearProperties)
      properties.twentyyear = twentyyearProperties;
      console.log("30 year");
      console.dir(thirtyyearProperties)
      properties.thirtyyear = thirtyyearProperties;
      /*2yearProperties;
      3yearProperties;
      5yearProperties;
      7yearProperties;
      twentyyearProperties;
      thirtyyearProperties;
      30yearProperties;*/

      fs.writeFile("parsedData.json",JSON.stringify(properties,null,4));
    }
  })
}
