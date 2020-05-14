// file system module
/*
fs.readFile(filename, [options], callback) : filename의 파일을 [options]의 방식으로 읽은 후 callback으로 전달된 함수를 호출합니다. (비동기적) 
fs.readFileSync(filename, [options]) : filename의 파일을 [options]의 방식으로 읽은 후 문자열을 반환합니다.(동기적)
fs.writeFile(filename, data, [options], callback) : filename의 파일에 [options]의 방식으로 data 내용을 쓴 후 callback 함수를 호출합니다.(비동기적) 
fs.writeFileSync(filename, data, [options]) : filename의 파일에 [options]의 방식으로 data 내용을 씁니다.(동기적)
*/


var fs = require('fs');

// 비동기적 읽기
fs.readFile('../test.txt', 'utf8', function(err, data) {
    console.log('비동기적 읽기 : ' + data);
});


// 동기적 읽기
var text = fs.readFileSync('text.txt', 'utf8');
console.log('동기적 읽기 : ' + text);