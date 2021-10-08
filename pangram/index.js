/* https://www.hackerrank.com/challenges/pangrams/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign */

'use strict';

const fs = require('fs');

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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    let alpha = []
    let trimmedS = s.replace(/\s+/g, '').toLowerCase()
    console.log(trimmedS);
    for (let i=0; i<trimmedS.length; i++) {
        if (alpha.indexOf(trimmedS[i]) === -1) {
            alpha.push(trimmedS[i])
        }
    }

    console.log(alpha)
    if (alpha.length === 26) {
        return 'pangram'
    } else {
        return 'not pangram'
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
