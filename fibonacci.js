var num1=0;
var num2=1;
var num3;
var i;
var number=10;

console.log(""+num1);
console.log(""+num2);
for(i=2;i<number;i++)
{
    num3=num1+num2;
    console.log(""+num3);
    num1=num2;
    num2=num3;
}



