var btn = document.getElementById("loadData");
//console.log("Btn: "+btn);
btn.addEventListener("click", function() {
  console.log("Loading data");
  loadData();
});

var _p = document.getElementById("info").getElementsByTagName("p");
console.dir(_p);
for(var i = 0; i < _p.length; i++) {
  console.log("P: "+_p[i]);
  var _name = _p[i].className;
  console.log("_name: "+_name);
  clickListener(i,_name);
}

function clickListener(i,name) {
  _p[i].addEventListener("click", function(event) {
    console.log("Clicked an info button");
    highlight(name);
  });
}

/*
_p.addEventListener("click", function(event) {
  console.log("Clicked an info button");
  console.log("Clicked: "+event);
  //highlight();
});
*/
