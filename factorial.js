function factorial()
{
  //set num = to the input set by the user
  const num = parseInt(document.getElementById("userNum").value);
  //if the number is positive and will not overflow then compute the answer
  if (num < 171 && num > 0)
    {
      document.getElementById("return").innerHTML = num + "! = " + calc(num);
    }
  //Statement for if the number will over flow
  else if (num >= 171)
    {
      document.getElementById("return").innerHTML = "Overflow Error";
    }
  //Statement for if the number is negative
  else
    {
      document.getElementById("return").innerHTML = "Factorials must be positive numbers";
    }
}

//calculate the answer if the number is within range
function calc(userNum)
{
  //for loop for factorials 
  for (let i = 1; userNum > 1; --userNum)
    {
      i *= userNum;
    }
  return i;
}