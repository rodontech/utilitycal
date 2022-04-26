function getHistory() {
return  document.getElementById("history-value").innerText;
}
function printHistory(num) {
  document.getElementById("history-value").innerText=num;
}

function getOutput() {
return  document.getElementById("output-value").innerText;
}

function printOutput(num) {
  if (num=="") {
    return  document.getElementById("output-value").innerText=num;
  }
  else {
      document.getElementById("output-value").innerText=getFormattedNumber(num);
  }
}

function getFormattedNumber(num){
  if(num=="-"){
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num){
  return Number(num.replace(/,/g,""));
}
var operators = document.getElementsByClassName("operators");
for(var i=0;i<operators.length;i++){
operators[i].addEventListener('click', function(){
  if(this.id=="clear"){
    printHistory("");
    printOutput("");
  }
  else if (this.id=="backspacer") {
    var
    output= reverseNumberFormat(getOutput()).toString();
    if(output){
      output=output.substr(0,output.length-1);
      printOutput(output);
    }
  }
    else {
      var output= getOutput();
      var history= getHistory();
      if(output==""&&history!=""){
        if(isNaN(history[history.length-1])){
          history=history.substr(0,history.length-1);
        }
      }
      if (output!="" || history!=""){
        output= output==""?
        output:reverseNumberFormat(output);
        history=history+output;
        if(this.id=="="){
          var result= eval(history);
          printOutput(result);
          printHistory("");
        }
        else {
          history=history+this.id;
          printHistory(history);
          printOutput("");
        }
      }
   }
});
}
var numbers = document.getElementsByClassName("numbers");
for(var i=0;i<numbers.length;i++){
numbers[i].addEventListener('click', function(){
var output= reverseNumberFormat(getOutput());
if(output!=NaN){
  output=output+this.id;
  printOutput(output);
}
});
}

var measure = document.getElementsByClassName("measure");
for(var i=0;i<measure.length;i++){
measure[i].addEventListener('click', function(){
var output= reverseNumberFormat(getOutput());
if(this.id="amt"){
      printHistory(output);
      printOutput((output*0.1)/18);
}

});
}
