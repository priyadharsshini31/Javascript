// Code goes here

function newgame()
{
let userOption=prompt("Enter your choice");
if(!userOption)
{
  document.write("Let's play fair");
  document.write("<br>");
}
else 
{
  document.write("<center>");
  document.write("you have chosen"+ " " + userOption);
  document.write("<br>");

}
let computerOption;
let computerOptionno=Math.random();
if(computerOptionno <= 0.34)
{
  computerOption = "stone";
}
else if (computerOptionno <= 0.75)
{
  computerOption = "paper";
}
else
{
  computerOption = "scissor";
}
document.write("computer has chosen" + " " + computerOption);
document.write("<br>");
function compare(userOption,computerOption)
{
  if(userOption == computerOption)
  {
    document.write("It's a tie");
    document.write("<br>");
  }
  else if(userOption == "stone")
  {
    if(computerOption == "paper")
    {
      document.write("computer won");
      document.write("<br>");
    }
    else
    {
      document.write("user won");
      document.write("<br>");
    }
  }
  else if(userOption == "paper")
  {
    if(computerOption == "stone")
    {
      document.write("user won");
      document.write("<br>");
    }
    else
    {
      document.write("computer won");
      document.write("<br>");
    }
  }
  else if(userOption == "scissor")
  {
    if(computerOption == "stone")
    {
      document.write("computer won");
      document.write("<br>");
    }
    else
    {
      document.write("user won");
      document.write("<br>");
    }
  }
}
compare(userOption,computerOption);
}
