// Code goes here
function conversion()
{
var dollars = parseFloat(document.getElementById("dollar").value);
var result = dollars/60;
document.getElementById("rupee").innerHTML="Rs"+result;
}
