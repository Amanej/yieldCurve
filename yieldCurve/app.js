var styles = document.styleSheets[0];
function loadData() {
  var selector = document.getElementById('yearSelector');
  var year = selector.options[selector.selectedIndex].value;
  console.log("Year: "+year);
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      parseData(xmlhttp);
    }
  };
  xmlhttp.open("GET","https://www.treasury.gov/resource-center/data-chart-center/interest-rates/pages/XmlView.aspx?data=yieldyear&year="+year, true);
  xmlhttp.send();
}

function parseData(xml) {
  var i;
  var xmldocument = xml.responseXML;
  console.log("xml document: "+xmldocument);
  console.log("Entries"+xmldocument.getElementsByTagName("entry"));
  var entries = xmldocument.getElementsByTagName("entry");
  console.log("Entries stringified: "+JSON.stringify(entries,null,4));
  for(i = 0; i < entries.length; i++) {
    console.log("Id: "+entries[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
    var id = entries[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
    console.log("Id stringified: "+id);
    var content = entries[i].getElementsByTagName("content")[0];
    console.log("Content: "+content);
    console.dir(content);
    var bc3m = entries[i].getElementsByTagName("content")[0].childNodes[0].childNodes[3].innerHTML;
    console.log("bc3: "+bc3m)
    var placement_bc3m = parseFloat(bc3m/5)*406;
    createDot(placement_bc3m,i,"bc3m");
    var bc6m = entries[i].getElementsByTagName("content")[0].childNodes[0].childNodes[4].innerHTML;
    var placement_bc6m = parseFloat(bc6m/5)*406;
    createDot(placement_bc6m,i,"bc6m");
    var bc1y = entries[i].getElementsByTagName("content")[0].childNodes[0].childNodes[5].innerHTML;
    var placement_bc1y = parseFloat(bc1y/5)*406;
    createDot(placement_bc1y,i,"bc1y");
    var bc3y = entries[i].getElementsByTagName("content")[0].childNodes[0].childNodes[7].innerHTML;
    var placement_bc3y = parseFloat(bc3y/5)*406;
    createDot(placement_bc3y,i,"bc3y");
    var bc10y = entries[i].getElementsByTagName("content")[0].childNodes[0].childNodes[10].innerHTML;
    var placement_bc10y = parseFloat(bc10y/5)*406;
    createDot(placement_bc10y,i,"bc10y");
    var bc30y = entries[i].getElementsByTagName("content")[0].childNodes[0].childNodes[12].innerHTML;
    var placement_bc30y = parseFloat(bc30y/5)*406;
    createDot(placement_bc30y,i,"bc30y");
  }
}

function createDot(placement,number,class_style) {
  var _dot = document.createElement("span");
  _dot.className = class_style;
  _dot.style.bottom = placement;
  _dot.style.left = number*25;
  document.getElementById("dotArea").appendChild(_dot);
  console.log("Number: "+number+" dot created");
}

function highlight(class_style) {
  //styles.insertRule('"'+class_style+"{ background: red; }", 67);
  console.log("Highlight: "+class_style);
  var dotsSelected = document.getElementById('dotArea').getElementsByClassName(class_style);
  console.log("dotsSelected: "+dotsSelected);
  for(var i = 0; i < dotsSelected.length;i++) {
    dotsSelected[i].className = "selected "+class_style;
    console.log("I: "+i);
  }
}
