// var name = prompt("what is your first name: ");
// var subname = prompt("your last name: ");
// var age = prompt("your age: ");
// alert(age + " years is nearly "+ age*365 + " days");
// console.log("welcome "+ name +" " + subname);
// console.log("your are "+ age + " years old");
/*var num = -10;
while(num < 20)
{
  console.log(num);
  num++;
}
/*var num=5;
while(num <=  50)
{
  if(num%5===0  &&  num%3===0)
  console.log(num);
  num++;
}
var input=prompt("are you still there: ");
// var ans = "yes";
while (input  !== "yes") {
  input=prompt("are you still there: ");
}
alert("yeah we finally made it");


//to check no is even or odd
var num = Number(prompt("enter a no: "));
function check_even_or_odd(no) {
  if (no===0)
  {
    return "no is zero";
  }
  else if (no % 2 === 1)
  {
    return "odd";
  }
  else {
    return "even";
  }
}
alert(check_even_or_odd(num));


//to find factorial of a number
var num2  = Number(prompt("enter a no: "));
function factorial(no2) {
  if (no2===0)
  {
    return 1;
  }
  else{
    return (no2*factorial(no2-1));
  }
}
alert(factorial(num2));


//to replace - with _
var str=prompt("enter a string: ");
function conversion(string) {
  for(var i=0;i<string.length;i++)
  {
    if(string[i] ===  "-")
    {
      string[i] === "_";
    }
    if (string[i]  === "_") {
      string[i] === "-";
    }
    else {
     string[i]  === string[i];
    }
  }
  return string;
}
alert(conversion(str));


//Todo list
/*
var arr=[];
var input=prompt("What would you like to do(add/remove/quit): ");
var i=0;
while(input!=="quit")
{
  if (input==="add")
  {
    var add=prompt("enter thing to add: ");
    arr.push(add);
  }
  else if (input==="remove")
  {
  var no=Number(prompt("enter index no to remove: "));
  arr.splice(no,1);
  alert("Item removed");
  }
  input=prompt("What would you like to do(add/remove/quit): ");
}
alert("Things are added to the todo list!");
for(var i=0;i<arr.length;i++)
{
  console.log(i+":"+arr[i]);
}


//reverse of an array
var arr=[];
var no=Number(prompt("enter no of elements in the array"));
for(var i=0;i<no;i++)
{
  var add=prompt("enter item to add");
  arr.push(add);
}
for(var j=no-1;j>=0;j--)
{
  console.log(arr[j]);
}


//sum of all elements in the array
var arr=[];
var sum=0;
var no=Number(prompt("enter total no of elements"));
for(var i=0;i<no;i++)
{
  var add=Number(prompt("enter no to add"));
  arr.push(add);
}
for(var j=0;j<no;j++)
{
  sum=sum+arr[j];
}
console.log(sum);


//max no in the array
var arr=[];
var max=0;
var no=Number(prompt("enter no of elements in the array"));
for(var i=0;i<no;i++)
{
  var add=Number(prompt("enter item to add"));
  arr.push(add);
}
for (var j=0;j<no;j++)
{
  if(arr[j]>arr[j+1]&&arr[j]>max)
  {
    max=arr[j];
  }
  else if(arr[j+1]>arr[j]&&arr[j+1]>max)
  {
    max=arr[j+1];
  }
}
console.log(max);


//equality checker
var arr=['a','a','a','a','a'];
var x=arr[0];
var num=0;
for(var i=0;i<arr.length;i++)
{
  if(arr[i]===x)
  {
    num++;
  }
  else{
    num=num;
  }
}
if(num===arr.length)
{
  console.log("equal");
}
else {
  console.log("unequal");
}


//dom manipulation background animation
var body=document.querySelector("body");
var isblue=false;
setInterval(function(){
  if(isblue){
    body.style.background="white";
  }
  else {
    body.style.background="red";
  }
  isblue=!isblue;
},1000);*/
