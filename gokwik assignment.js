/**
Write a function called contains that searches for a value in a nested object. 
It returns true if the object contains that value.
**/

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: "foo2"
                    }
                }
            }
        }
    }
}

function contains(obj, value) {
    // Base case: if the current object is equal to the value, return true
    if (obj === value) {
        return true;
    }

    // If the current object is an array, iterate through its elements
    // if (Array.isArray(obj)) {
    //     for (let element of obj) {
    //         if (contains(element, value)) {
    //             return true;
    //         }
    //     }
    // }

    // If the current object is an object, iterate through its values
    if (typeof obj === 'object' && obj !== null) {
        for (let key in obj) {
            if (contains(obj[key], value)) {
                return true;
            }
        }
    }

    // If none of the above cases matched, return false
    return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt)
console.log(doesntHaveIt)


// -----------------------------------------------------------

/**
Write a function that sums squares of numbers in list that may contain more lists
**/

function SumSquares(list) {
    let sum = 0;

    function helper(sublist) {
        for (let element of sublist) {
            if (Array.isArray(element)) {
                helper(element);
            } else if (typeof element === 'number') {
                sum += element * element;
            }
        }
    }

    helper(list);
    return sum;
}


let l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400