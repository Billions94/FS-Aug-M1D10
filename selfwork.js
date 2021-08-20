//JS EXERCISES

/*21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete Email from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string in the previous array
26) Create an array with 100 random numbers in it
27) Wrote a function to get the MAX and the MIN from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays and returns the longest one
30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values*/

title(`21`)
let x = "John"
let y = "Doe"

console.log("John<>Doe")

title(`22`)
let object = {
       name: "Alexander",
       surname: "Egbedi",
       email: "e.a.egbedi@gmail.com"
}
console.log(object)

title(`23`)
delete object.email
console.log(object)

title(`24`)
let array = [
    "Düsseldorf",
    "Berlin",
    "Nurenberg",
    "London",
    "New York",
    "Chicago",
    "Los Angeles",
    "Stockholm",
    "Copenhagen",
    "Oslo",
    "Helsinki",
]

title(`25`)
console.log(array)

title(`26`)
let arr = [];
while(arr.length < 100){
    let rnd = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(rnd) === -1) arr.push(rnd);
}
console.log(arr);

title(`27`)
function getArrayMax(array){
    return Math.max.apply(null, array);
 }
 function getArrayMin(array){
    return Math.min.apply(null, array);
}
console.log(getArrayMax(arr))
console.log(getArrayMin(arr))

title(`28`)
let arrayOfArrays = []
for (let i = 0; i < 1; i++){
    let currentArray = []
    for (let j = 0; j < 10; j++) {
        currentArray.push(Math.floor(Math.random() * 10) + 10)
        arrayOfArrays.push(currentArray)
    }
}
console.log(arrayOfArrays)

title(`29`)
function longestArray(arr1, arr2) {
    if (arr1.length > arr2.length){
        return arr1
    }
    else {
        return arr2
    }
    
}
console.log(longestArray([1,2,3,4,5],[1,2]))




/* DOM 

        31) Get element with ID "container" from the page
        32) Get every "td" from the page
        33) Create a cycle that prints the text inside every td of the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list */


function title(head) {
    console.log(`-----------------${head}----------------`)
}

title(`31`)
function getElementFromContainer(){
    let element = document.getElementById("container")
}
title(`32`)
function getTd(){
    let element = document.querySelectorAll("td")
  
}

title(`33`)
function td(){
    let tdNode = document.getElementsByTagName('td')
    for (let i = 0; i < tdNode.length; i++) {
        tdNode[i].innerText = `'I'm so sad `       
    }
    
}


title(`34`)
function changeHeader(){
    let changeH1 = document.querySelector("h1")
    changeH1.innerHTML = "I think i broke my ass"
}

title(`35`)
function addRow(){
    let addRowNode = document.querySelector("table")
    let newElement = document.createElement("tr")
         newElement.innerHTML = "I am the new row"
         addRowNode.appendChild(newElement)
         
}

title(`36`)
function addClass(){
    let classNode = document.getElementsByTagName('tr')
    for (let i = 0; i < classNode.length; i++) {
        classNode[i].className = "test"
   }
}

 title(`37`)
 function changeLinkBg(){
    let linkBgNode = document.getElementsByTagName('a')
    for (let i = 0; i < linkBgNode.length; i++) {
        linkBgNode[i].style.backgroundColor = "red"
    }
}


title(`38`)
function addNewUl(){
    let newUl = document.querySelector("ul")
    let newUlNode = document.createElement("li")
    newUlNode.innerText = "The new me"
    newUl.appendChild(newUlNode)
}

title(`39`)

title(`40`)









/*EXTRA 

41) Add an eventListener to alert when the mouse is over a link, displaying the URL
42) Add a button to hide every image on the page
43) Add a button to hide and show the table from the page
44) Write a function to sum every number inside the TD (if the content is numeric)
45) Delete the last letter from the title each time the user clicks on it
46) Change a single TD background color when the user clicks on it
47) Add a button DELETE, on click it should delete a random TD from the page
48) Add a pink border to a cell when the mouse is over it
49) Write a function to add a table with 4 rows and 3 columns programmatically
50) Write a function to remove the table from the page*/








