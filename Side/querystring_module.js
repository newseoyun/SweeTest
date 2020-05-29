const qs = require('querystring');
/*
parse() = decode() : 스트링을 JSON 오브젝트로 만들어줌. 
stringify() = encode() : 오브젝트를 URL 스트링(=&)으로 만들어줌. JSON.stringify랑 다름
escape() : 특수기호를 HTML 엔티티 코드로 변환시킴.
unescape() : 위랑 반대.
*/

let obj = qs.parse('a=1&b=2');
// console.log("obj : " + obj); 에러남
console.log("JSON.stringify(obj) : " + JSON.stringify(obj));

let str = qs.stringify(obj);
console.log("str : " + str);

let str2 = qs.stringify(JSON.parse('{"a":"1", "b":"2"}'));
console.log("str2 : " + str2);


// JSON 테스트
let teststr = '{"a":"1", "b":"2"}';
console.log("test1 : " + teststr);
let testjparse = JSON.parse(teststr);
console.log("testjparse : " + testjparse);

let testjstringify = JSON.stringify(testjparse);
console.log("testjstringify : " + testjstringify);


// querystring 테스트
let str_escape = qs.escape(str2);
console.log("str_escape : " + str_escape);
let str_unescape = qs.unescape(str_escape);
console.log("str_unescape : " + str_unescape);
