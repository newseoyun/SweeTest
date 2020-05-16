// 전역 변수. 이제 이 아래로 다른 소스에서도 사용이 가능
global.myword = '이거슨 글로벌 변수 myword이다.';

console.log('subfile.js 어딨지?');
const temp1 = require('./subfile.js'); // 요있지

console.log('1');
console.log('2');
const temp2 = require('./subfile.js'); // 또 못불러옴. 무시됨.
console.log('3');