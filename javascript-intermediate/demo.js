/*
*
* @tilakdotcom
* For Testing js code
*
*/

const inputs = [123, "abc", NaN, true, undefined, null, {}, [], Infinity];
inputs.forEach(input => {
    console.log(`isNaN(${JSON.stringify(input)}) = ${isNaN(input)}, typeof: ${typeof input}`);
});