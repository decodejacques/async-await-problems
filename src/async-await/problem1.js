// Instructions
// Run this file like so:
// node problem1.js
var assert = require('assert');

async function f() {
    // fill in his part
}

async function g() {
    // fill in his part
}

async function h() {
    var x = await f();
    var y = await g();
    return x + y;
}

async function k() {
    var res = await h();
    assert(res == 8);
}

k().then(() => console.log("everything passed"))
