// https://www.hackerrank.com/challenges/staircase/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let stairs = '#'
    let spaces = Array(n).join(' ')
    for (let i=0; i < n; i++) {
        console.log(spaces + stairs)
        stairs += '#'
        spaces = Array(n - 1 - i).join(' ')
    }

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
