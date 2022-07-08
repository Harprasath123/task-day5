      // Anonymous functions
// odd numbers
var oddnum= function(num)
{
 let v;
 let i; 
for ( i=0;i<num.length;i++) {
    if(num[i]%2==1)
    {
        v=num[i];
        console.log(v);
    }
    
}
}
oddnum([1,2,3,4,5]);

//sum of all numbers
var numbers= function(num)
{
let c=0;
for(let n of num)
{
    c=c+n;
    console.log(c);
}
}
console.log(Numbers([1,3,5,7]));

//prime number
var nums= function(num)
{
let a;
let i;
let j;
let count;
for(i=0;i<num[i];i++)
{
    let j=0;
    while(j<=num[i])
    {
        if(num[i]%j==0)
        {
            count=count++;
        }
        j++;
    }
    if(count==2)
    {
        console.log(num[i]);
    }
}


}
console.log(Nums([11,23,51,8]));


//palindrome:
var pal= function(num)
{
let a;
let sum=0;
let num;
let temp=num;
{
a=num%10;
sum=(sum*10)+a;
num=num/10;
}
if(temp==sum)
{
    console.log(num+ " is a palindrome");
}

console.log(pal(12321));
}


//Remove duplicates from an array
var d= function(dup)
{
return Array.filter((dup,index) =>
Array.indexof(dup)===index);


}
console.log(d(["apple","mango","orange","apple"]));


      
       // Arrow functions


// odd numbers
var oddnum= (num)=>
{
 let v;
 let i; 
for ( i=0;i<num.length;i++) {
    if(num[i]%2==1)
    {
        v=num[i];
        console.log(v);
    }
    
}
}
console.log(oddnum([1,2,3,4,5]));


//sum of all numbers
var numbers= (num)=>
{
let c=0;
for(let n of num)
{
    c=c+n;
    console.log(c);
}
}
console.log(Numbers([1,3,5,7]));


//prime number
var nums= (num)=>
{
let a;
let i;
let j;
let count;
for(i=0;i<num[i];i++)
{
    let j=0;
    while(j<=num[i])
    {
        if(num[i]%j==0)
        {
            count=count++;
        }
        j++;
    }
    if(count==2)
    {
        console.log(num[i]);
    }
}


}
console.log(Nums([11,23,51,8]));


//palindrome:
var pal= (num)=>
{
let a;
let sum=0;
let num;
let temp=num;
{
a=num%10;
sum=(sum*10)+a;
num=num/10;
}
if(temp==sum)
{
    console.log(num+ " is a palindrome");
}

console.log(pal(12321));
}


//Remove duplicates from an array
var d= (dup)=>
{
return Array.filter((dup,index) =>
Array.indexof(dup)===index);


}
console.log(d(["apple","mango","orange","apple"]));
