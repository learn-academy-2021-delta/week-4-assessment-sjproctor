// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// describe('', () => {
//   it('', () => {
//     expect().toEqual()
//   })
// })

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// function - shuffler
// parameter - array
// remove the first item - shift
// array.sort(() => Math.random() - .5)

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shuffler', () => {
  it('removes the first item from the array and shuffles the remaining content', () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffler(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
    expect(shuffler(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
  })
})

// b) Create the function that makes the test pass.

const shuffler = (array) => {
  array.shift()
  return array.sort(() => Math.random() - .5)
}

// Fisher-Yates

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// create a function - lowestHighest
// parameter - numArray
// sort
// return the zeroth index and lenght-1 index in an new array

// a) Create a test with expect statements for each of the variables provided.

describe('lowestHighest', () => {
  it('take in an array of numbers and returns an array of the minimum and maximum numbers in that order', () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    var nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
    expect(lowestHighest(nums1)).toEqual([-8, 90])
    expect(lowestHighest(nums2)).toEqual([5, 109])
  })
})

// b) Create the function that makes the test pass.

// const lowestHighest = (numArray) => {
//   numArray.sort((a, b) => a - b)
//   return [numArray[0], numArray[numArray.length - 1]]
// }

const lowestHighest = (numArray) => {
  return [Math.min(...numArray), Math.max(...numArray)]
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// create a function - noDups
// parameter - array1, array2
// concat the arrays - accessor method that returns a new array
// new set

// a) Create a test with an expect statement using the variables provided.


describe('noDups', () => {
  it('takes in two arrays as arguments and returns one array with no duplicate values', () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    expect(noDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// b) Create the function that makes the test pass.

// const noDups = (array1, array2) => {
//   let comboArray = array1.concat(array2)
//   return [...new Set(comboArray)]
// }


// const noDups = (...arrays) => {
//   let merged = arrays.flat()
//   let unique = []
//   for(let i=0; i<merged.length; i++){
//     if(!unique.includes(merged[i])){
//       unique.push(merged[i])
//     }
//   }
//   return unique
// }

const noDups = (...arrays) => {
  let merged = arrays.flat()
  return merged.filter((value, index, array) => {
    return array.indexOf(value) === index
  })
}
