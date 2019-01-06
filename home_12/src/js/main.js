var exp = "";
var dat = "";
var operat = "";
var calcEvent = "";
var n = "";

function getData(date, event) {
  if (calcEvent === 'radical') {
    exp = exp + (1/date);
    calcEvent = event;
    document.getElementById("inputData").value = exp;
  }
  else {
    if (calcEvent === 'percent') {
      exp = exp + date;
      document.getElementById("inputData").value = exp;
      dat = document.getElementById("inputData").value.slice(0,-2);
      calcEvent = undefined;
    }
    else {
      exp = exp + date;
      calcEvent = event;
      document.getElementById("inputData").value = exp;
    }
  }
}

function inputValidation() {
  if (dat) {
    operat = document.getElementById("inputData").value.slice(dat.length+1,document.getElementById("inputData").value.length);
    try {
      document.getElementById("result").value = (dat*operat)/100;
    } catch (e) {
      document.getElementById("result").value = "Invalid Expression";
    }
   }
   else {
     if (calcEvent === 'factorial') {
       n = document.getElementById("inputData").value;
       function rFact(n)
       {
         if (n === 0)
         { return 1; }
         else
         { return n * rFact( n - 1 ); }
       }
       try {
         document.getElementById("result").value = rFact(n);
       }
       catch (e) {
         document.getElementById("result").value = "Invalid Expression";
       }
     }
     else {
       var expression = document.getElementById("inputData").value;
       try {
         document.getElementById("result").value = eval(expression);
       }
       catch (e) {
         document.getElementById("result").value = "Invalid Expression";
       }
     }
  }
}

function clearAll() {
  exp = "";
  dat = "";
  calcEvent = "";
  document.getElementById("inputData").value = "";
  document.getElementById("result").value = "";
}