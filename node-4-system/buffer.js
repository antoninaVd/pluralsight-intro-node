var b = new Buffer('Hello');

console.log('\nBuffer object: ');
console.log(b);
console.log('\nBuffer.toString: ');
console.log(b.toString());
console.log('\nBuffer.toString(base64): ');
console.log(b.toString('base64'));

//сразу конвертировать в base64
var a = new Buffer('world').toString('base64');

console.log('\nSubstring: ');
console.log(b.toString('utf8',1,3));
