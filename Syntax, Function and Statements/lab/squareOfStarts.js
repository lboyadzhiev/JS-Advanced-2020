/*
    6. Square of Stars
Write a function that prints a rectangle made of stars with variable size, depending on an input parameter. If there is no parameter specified, the rectangle should always be of size 5. Look at the examples to get an idea.
The input comes as a single number argument.
The output is a series of lines printed on the console, forming a rectangle of variable size.
*/

function solve(x  = 5) {
    let result = new Array(x);
    for(let i = 0; i < x; i++) {
        result[i] = '*'
            .repeat(x)
            .split('')
            .join(' ');
    }

    return result.join('\n');
}

console.log(solve(4));