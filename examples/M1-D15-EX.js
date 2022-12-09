let x = "John"
let y = "Doe"
console.log(x, "<>", y)

let me = {
    name: "Batı", 
    surname:"Gökovalı", 
    email:"batigokovali@icloud.com"}
console.log(me)

delete me.email;
console.log(me)

let array = ["0","1","2","3","4","5","6","7","8","9"]
console.log(array)

let numbersArray = [];

function insertNumbersTonumbersArray()
{
    for (let i = 0; i < 100; i++)
    {
        numbersArray.push(i);
    }
    return numbersArray;
}

let randomArray = [];

function randomArrayCreator()
{
    var i = numbersArray.length;
    j = 0;
    let temp;
    
    while (i--)
    {
        j = Math.floor(Math.random()*(i+1)); // used math floor to round the number because math random return float
        temp = numbersArray[i];
        numbersArray[i] = numbersArray[j];
        numbersArray[j] = temp;
    }
    let randomArrayTemp = [];
    for(let i = 0; i<100; i++)
    {
        randomArrayTemp[i] = numbersArray[i]
    }
    randomArray = randomArrayTemp;
    return randomArrayTemp;
}

console.log(randomArrayCreator())

function maxNumber()
{
    console.log("Max number is: ",Math.max(...randomArray))
    console.log("Min number is: ",Math.min(...randomArray))
    return;
}

let arrayOfArrays = [];

function arrayInserter()
{
    let tempArray = [];
    for (i = 0; i<9; i++)
    {
        tempArray[i]=Math.floor(Math.random()*99999);
    }
    arrayOfArrays.push(tempArray);
}

let a = [2,3,4]
let b = [1,2,3,4,5,6,7]

function longestArray(a,b)
{
    if (a.length<b.length)
    {
        console.log("Array B is longer!")
    } if 
        (b.length<a.length)
    {
        console.log("Array A is longer!")
    } else
    console.log("Length of array A and B is equal")
}

function highestSum(a,b)
{
    let SumA = 0;
    let SumB = 0;
    for(i=0; i< a.length; i++)
    {
        SumA += a[i]
    }
    console.log(SumA)

    for (i=0; i<b.length; i++)
    {
        SumB += b[i]
    }
    if (SumB<SumA)
    {
        console.log("Sum of A is bigger!")
    } if (SumA<SumB)
    {
        console.log("Sum of B is bigger!")
    } else
    {
        console.log("Sum of A and B is equal!")
    }
}

console.log(document.getElementById("container"))

console.log(document.getElementsByName("td"))

function printEverytdElement()
{
    let temp = document.getElementsByTagName("td")
    for (i=0; i<temp.length ; ++i)
    {
        console.log(temp[i].innerText)
    }
}

function changeH1(title)
{
    let h1 = document.getElementById("container");
    h1.innerText = title;
}

function createExtraRow(input)
{
    let newRow = document.createElement('tr');
    newRow.innerText = input;
    document.getElementById("table").appendChild(newRow)
}

function addTestClass()
{
    let allRows = document.getElementsByTagName("tr")
    for (i = 0; i< allRows.length; ++i)
    {
        allRows[i].classList.add("test")
    }
}

function addRedBackground()
{
    let allLinks = document.getElementsByClassName("link")
    for (i = 0; i<allLinks.length; ++i)
    {
        allLinks[i].style.backgroundColor = "red";
    }
}

window.onload =  console.log("Page Loaded!")

function addItemsToUl(input)
{
    let newItem = document.createElement("li")
    newItem.innerText = input;
    document.getElementById("unordered-list").appendChild(newItem)
}

function emptyList()
{
    let deleteList = document.getElementById("ordered-list")
    deleteList.innerText = "";
}

//EXTRAS

function displayHref()
{
    
}