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

let x = "John"
let y = "Doe"

console.log("John<>Doe")

let object = {
       name: "Alexander",
       surname: "Egbedi",
       email: "e.a.egbedi@gmail.com"
}
console.log(object)

delete object.email
console.log(object)

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
console.log(array)

let arr = [];
while(arr.length < 100){
    let r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

function getArrayMax(array){
    return Math.max.apply(null, array);
 }
 function getArrayMin(array){
    return Math.min.apply(null, array);
}
console.log(getArrayMax(arr))
console.log(getArrayMin(arr))

console.log(`--------------------Array of Arrays-------------------`)
let arrayOfArrays = []
for (let i = 0; i < 10; i++){
    let currentArray = []
    for (let j = 0; j < 10; j++) {
        currentArray.push(Math.floor(Math.random() * 10))
        arrayOfArrays.push(currentArray)
    }
}
console.log(arrayOfArrays)

function longestArray(){
    let array1 = []
}