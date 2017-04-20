
  var styles = document.styleSheets[0];
  function loadData(day) {
    var selector = document.getElementById('yearSelector');
    var year = selector.options[selector.selectedIndex].value;
    //console.log("Year: "+year);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        parseData(xmlhttp,day);
      }
    };
    xmlhttp.open("GET","https://www.treasury.gov/resource-center/data-chart-center/interest-rates/pages/XmlView.aspx?data=yieldyear&year="+year, true);
    xmlhttp.send();
  }

  function parseData(xml,day) {
    var i;
    var xmldocument = xml.responseXML;
    //console.log("xml document: "+xmldocument);
    //console.log("Entries"+xmldocument.getElementsByTagName("entry"));
    var entries = xmldocument.getElementsByTagName("entry");
    //console.log("Entries stringified: "+JSON.stringify(entries,null,4));

    //console.log("Id: "+entries[0].getElementsByTagName("id")[0].childNodes[0].nodeValue);
    var id = entries[day].getElementsByTagName("id")[0].childNodes[0].nodeValue;
    //console.log("Id stringified: "+id);
    var content = entries[day].getElementsByTagName("content")[0];
    //console.log("Content: "+content);
    //console.dir(content);

    var bc3m = entries[day].getElementsByTagName("content")[0].childNodes[0].childNodes[3].innerHTML;
    //console.log("bc3: "+bc3m);
    var placement_bc3m = parseFloat(bc3m/5)*406;
    createDot(placement_bc3m,0,"bc3m");

    var bc6m = entries[day].getElementsByTagName("content")[0].childNodes[0].childNodes[4].innerHTML;
    //console.log("bc6m: "+bc6m);
    var placement_bc6m = parseFloat(bc6m/5)*406;
    createDot(placement_bc6m,1,"bc6m");

    var bc1y = entries[day].getElementsByTagName("content")[0].childNodes[0].childNodes[5].innerHTML;
    //console.log("bc1y: "+bc1y);
    var placement_bc1y = parseFloat(bc1y/5)*406;
    createDot(placement_bc1y,2,"bc1y");

    var bc3y = entries[day].getElementsByTagName("content")[0].childNodes[0].childNodes[7].innerHTML;
    //console.log("bc3y: "+bc3y);
    var placement_bc3y = parseFloat(bc3y/5)*406;
    createDot(placement_bc3y,3,"bc3y");

    var bc10y = entries[day].getElementsByTagName("content")[0].childNodes[0].childNodes[10].innerHTML;
    //console.log("bc10y: "+bc10y);
    var placement_bc10y = parseFloat(bc10y/5)*406;
    createDot(placement_bc10y,4,"bc10y");

    var bc30y = entries[day].getElementsByTagName("content")[0].childNodes[0].childNodes[12].innerHTML;
    //console.log("bc30y: "+bc30y);
    var placement_bc30y = parseFloat(bc30y/5)*406;
    createDot(placement_bc30y,5,"bc30y");

    var _yc = document.getElementById("YC");
    _yc.innerHTML = (bc30y - bc3m);
  }

  function createDot(placement,number,class_style) {
    var _dot = document.createElement("span");
    _dot.className = class_style;
    _dot.style.bottom = placement;
    _dot.style.left = number*75;
    document.getElementById("dotArea").appendChild(_dot);
    //console.log("Number: "+number+" dot created");
  }

  function highlight(class_style) {
    //styles.insertRule('"'+class_style+"{ background: red; }", 67);
    //console.log("Highlight: "+class_style);
    var dotsSelected = document.getElementById('dotArea').getElementsByClassName(class_style);
    //console.log("dotsSelected: "+dotsSelected);
    for(var i = 0; i < dotsSelected.length;i++) {
      dotsSelected[i].className = "selected "+class_style;
      //console.log("I: "+i);
    }
  }
