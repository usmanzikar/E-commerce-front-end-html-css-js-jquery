function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}

function clickme(smallImg) {
  var fullImg = document.getElementById("imagebox");
  fullImg.src = smallImg.src;
}
// horizontal button data show in same div
function show1() {
  document.getElementById("div1").style.display = "block";
  document.getElementById("div2").style.display = "none";
  document.getElementById("div3").style.display = "none";
}
function show2() {
  document.getElementById("div2").style.display = "block";
  document.getElementById("div1").style.display = "none";
  document.getElementById("div3").style.display = "none";
}
function show3() {
  document.getElementById("div3").style.display = "block";
  document.getElementById("div2").style.display = "none";
  document.getElementById("div1").style.display = "none";
}
//Review Write button on click open and close
var a;
function show_hide() {
  if (a == 1) {
    document.getElementById("form").style.display = "block";
    return (a = 0);
  } else {
    document.getElementById("form").style.display = "none";
    return (a = 1);
  }
}
