/*
   You are choreographing a circus show with various animals. For one

act, you are given two kangaroos on a number line ready to Jump in

the positive direction (Le, toward positive infinity).

© The first kangaroo starts at location 21 and moves at a rate of vl.
meters per jump.

© The second kangaroo starts at location 22 and moves at a rate of
v2 meters per jump.

You have to figure out a way to get both kangaroos at the same

location at the same time as part of the show. If it is possible, return

YES, otherwise return NO.

Example

21=2

 

After one jump, they are both at 2 = 3, (21+vl=2+1,
22+ v2 = 1+ 2),so the answer Is YES.


Function Description:

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s}:

© Intx1, int v1: starting position and Jump distance for kangaroo 1
© int x2, int v2: starting position and jump distance for kangaroo 2
Returns

© string: elther YES or NO
Input Format

Asingle line of four space-separated integers denoting the respective

values of 21, v1, 22, and v2.


Sample Input 0

0342

Sample Output 0

YES


‘Sample Input 1

 

0253

Sample Output 1

 

No

Explanation 1

The second kangaroo has a starting location that is ahead (further to
the right) of the first kangaroo's starting location (e., #2 > #1).
Because the second kangaroo moves at a faster rate (meaning

‘vq > v4) and Is already ahead of the first kangaroo, the first kangaroo

will never be able to catch up. Thus, we print NO.

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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let no="NO"
    let yes="YES"
    
    if(x1<x2 && (v1<v2 || v1==v2)){
        return no;
    }
    if(x1>x2 && (v1>v2|| v1==v2)){
        return no;
    }
    
    let ans1= x1+v1;
    let ans2= x2+v2;
    let ans3=ans1;
    let ans4=ans2;
   
    
    if(ans1%ans2==0 || ans2%ans1==0){
        return yes;
        
    }else if(x1>x2){
        for(let i=0;i<=x1;i++){
            ans3= ans3 + v1;
            ans4= ans4 + v2;
            if(ans3<ans4){
                return no;
            }
            if(ans3==ans4){
              return yes  
            }
        }
    }else if(x2>x1){
        for(let i=0;i<=x2;i++){
            ans3= ans3 + v1;
            ans4= ans4 + v2;
            if(ans3>ans4){
                return no;
            }
            if(ans3==ans4){
              return yes  
            }
        }
    }
    else{
        return no;
    }
    
     

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}
