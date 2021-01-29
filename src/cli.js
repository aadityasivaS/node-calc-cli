#!/usr/bin/env node
let args = process.argv.slice(2);
if (args === null) {
    console.log('😅 heres some help do like this n-c-c 1+1');
} else {
    console.log(eval(args[0]));
}