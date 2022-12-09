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
    let selectedLink = document.querySelectorAll("a")
    console.log(selectedLink)
    for (let i = 0; i<selectedLink.length; ++i)
    {
        selectedLink[i].addEventListener("mouseover", function()
        {
            alert(selectedLink[i].getAttribute("href"))
        })
    }
}
displayHref()

function hideImages()
{
    let imagesToHide = document.querySelectorAll("img")
    for (let i = 0; i< imagesToHide.length; i++)
    {
        imagesToHide[i].classList.toggle("class-to-hide")
    }
}

function hideTable()
{
    let tablesToHide = document.querySelectorAll("table")
    for (let i = 0; i< tablesToHide.length; i++)
    {
        tablesToHide[i].classList.toggle("hide")
    }
}

function sumAllTableCells()
{
    let cells = document.querySelectorAll("td");
    let sumOfCells = 0;
    for (let i = 0 ; i< cells.length ; i++)
    {
        let innerData = cells[i].innerText
        dataInteger = parseInt(innerData)

    if (!isNaN(dataInteger))
    {
        sumOfCells += dataInteger;
    }
    return sumOfCells;
    }
}

function deleteLastLetter()
{
    let h1 = document.getElementsByTagName("h1")[0];
    h1.addEventListener("click", function(event)
    {
        event.target.innerText = event.target.innerText.slice(0, -1)
    })
}
deleteLastLetter()

function randomInteger(max)
{
    return Math.floor(Math.random()*(max +1));
}

function randomRGBColor()
{
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function tdChangeBackgroundColor()
{
    let td = document.querySelectorAll("td")
    for (i = 0; i< td.length; i++)
    {
        td[i].addEventListener("click", function(event)
        {
            for (i = 0; i< td.length; i++)
            {
                event.target.style.backgroundColor = `rgb(${randomRGBColor()})`;
            }
        })
    }
    
}
tdChangeBackgroundColor()

function deleteRandomTD()
{
    let td = document.querySelectorAll("td")
    let random = Math.floor(Math.random()*td.length);
    let randomTD = td[random];
    let parent = td[random].closest("tr");
    parent.removeChild(randomTD);
}

function pinkBorderOnHover()
{
    let td = document.querySelectorAll("td")
    for (i = 0; i< td.length; i++)
    {
        td[i].addEventListener("mouseover", function(event)
        {
            for (i = 0; i< td.length; i++)
            {
                event.target.style.borderColor = "pink";
            }
        })
    }
    
}
pinkBorderOnHover()

function createTable()
{
    let newAreaForTable = document.getElementById("new-table-created");
    let newTable = document.createElement("table");
    newAreaForTable.appendChild(newTable);

    for (let i = 1; i<=4; i++)
    {
        let newTR = document.createElement("tr");
        newTable.appendChild(newTR);
        for (let j = 1; j <=3; j++)
        {
            let newTD = document.createElement("td");
            newTR.appendChild(newTD);
        }
    }
}

function removeLastTable()
{
    let parent = document.getElementById("new-table-created");
    let tableToRemove = querySelectorAll("#new-table-created table")
    parent.removeChild(tableToRemove);
}