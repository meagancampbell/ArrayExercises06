//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

element1Array = ['hydrogen', 'H', 1.008];
element2Array = ['helium', 'He', 4.003];
element26Array = ['iron', 'Fe', 55.85];

//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
tableArray = [];
tableArray.push(element1Array, element2Array, element26Array);
console.log(tableArray);



//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(tableArray[1]);
console.log(tableArray[1][1]);


//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(tableArray[0][2]); //mass of element 1
console.log(tableArray[1][0]); //name of element 2
console.log(tableArray[2][1]); //symbol for element 26

//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
