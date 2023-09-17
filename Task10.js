/*
Given a time in 12-hour AM/PM format, convert It to military (24-hour)

time.

Note: - 12:00:00AM on a 12-hour clock Is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
* s='12:01:00PM’
Return "12:01:00"
* s=712:01:00AM’
Return ‘00:01:00
Function Description
Complete the timeConversion function in the editor below. It should
return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
© string s: a time in 12 hour format
Returns

© string: the time In 24 hour format


Input Format

Asingle string ¢ that represents a time in 12-hour clock format (le.
bh:mm:ssAM or hh:mm:ssPM).

Constraints
* Allinput times are valid

Sample Input 0

 

Sample Output 0

 
*/

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let h = s.slice(0,2);
    h  = +h
    let tf = s.slice(-2);
    
    if(tf=='PM' && h!==12){
        
            h=h+12;
    }
    if(tf=='AM' && h==12){
        
            h=0;
    }
    
    
    let hh=h.toString();
    if(hh.length==1){
        hh="0"+hh;
    }
    return `${hh}:${s[3]}${s[4]}:${s[6]}${s[7]}`
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
