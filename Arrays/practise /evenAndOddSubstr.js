/*
    6. Even and Odd Subtraction
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
*/

function solve(input) {
    let even = x => x % 2 === 0;
    let odd = x => x % 2 != 0;

    let oddSum = input
        .filter(odd)
        .reduce((a, b) => a + b, 0);
    let evenSum = input
        .filter(even)
        .reduce((a, b) => a + b, 0);

    return evenSum - oddSum;
}

console.log(solve(
    [3,5,7,9]
));