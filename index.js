const array = [3, 8, 12, 4, 11, 7];
const targetValue = 10;
const numbersArray = hasTargetSum(array, targetValue);

function hasTargetSum(array, targetValue) {
  const numbersArray = [];

  // Nested loops to find pairs with the sum equal to the target value
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetValue) {
        // Check if the pair already exists in numbersArray
        const exists = numbersArray.some(pair => 
          (pair[0] === array[i] && pair[1] === array[j]) || 
          (pair[0] === array[j] && pair[1] === array[i])
        );

        if (!exists) {
          // Add the pair to numbersArray
          numbersArray.push([array[i], array[j]]);
          return true
        }
      }
    }
  }

  return false;
}

console.log(numbersArray); // Output: [ [ 3, 7 ], [ 8, 2 ] ]

/* 
  Write the Big O time complexity of your function here
  Assuming n is the length of the given array, so the time taken by the mentioned algorithm is O(n^2). 
  Because we utilized two for nested loops to iterate and achieve the required result according to the 
  problem given.
*/

/* 
  Add your pseudocode here
  Step 1 − At the very first step we need to define a function which will find out the possible numbers 
          of array to get the required sum as target value.

Step 2 − Now we will define a blank array which will store the numbers of resultant subarrays.

Step 3 − After the second step we will use a for loop to iterate through all the elements of the array 
        till the length of the array.push

Step 4 − Now we use another for loop or nested for loop to get the required two elements. These two 
        elements's sum should be equal to the target value.

Step 5 − If the total of those two elements equals the target value, we will add it to the array we have 
        defined in step two.

Step 6 − In the next step, pass the array and target value in the function to execute and produce the result.

Step 7 − At the last step, get the output to the console after passing the numbers array and target value to
         the function.
*/

/*
  Add written explanation of your solution here
  In the above code we have used two nested loops and created a function to get the desired result as per 
  the given problem statement. Basically we have to compare the sum or two elements to get the sum equal to the 
  target value mentioned in the code. After finding those elements we have pushed these elements in the new array 
  to show the output. So for executing this piece of code we need O(n^2) time to complete it. And the memory required 
  to store the result is O(n).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
