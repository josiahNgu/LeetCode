"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;
let hashmap = new Map();
process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  // for(let i =0; i<n ; i++){
  //     if (hashmap.get(ar[i]) === null ){
  //         hashmap.put(ar[i],hashmap.get[i]+ 1);
  //     }
  // }
  ar.sort();
  console.log(ar);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
