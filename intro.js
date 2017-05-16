console.log("Introduction to JavaScript");

FizzBuzz();

var countTest1 = "BBBbBbB";
console.log("test1 count: " + countBs(countTest1));
var countTest2 = "ABABABBB";
console.log("test2 count: " + countBs(countTest2));
var countTest3 = "BBB";
console.log("test3 count: " + countBs(countTest3));

var countTest4 = "BBBbBbB";
console.log("test4 count: " + countChar(countTest4, "b"));
var countTest5 = "ABABABBB";
console.log("test5 count: " + countChar(countTest5, "A"));
var countTest6 = "BBB";
console.log("test6 count: " + countChar(countTest6, "B"));

function FizzBuzz()
{
    for(var i = 1; i <= 100; i++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0 )
        {
            console.log("Fizz");
        }
        else if(i % 5 === 0)
        {
            console.log("Buzz");
        }
        else
        {
            console.log(i);
        }
    }
}

function countBs(string)
{
    var count = countChar(string, "B");
    
    return count;
}

function countChar(string, character)
{
    var count = 0;
    
    for(var i = 0; i < string.length; i++)
    {
        if(string.charAt(i) == character)
        {
            count++;
        }
    }
    
    return count;
}