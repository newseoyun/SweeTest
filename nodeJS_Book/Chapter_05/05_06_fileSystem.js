// file을 다루는 방법을 알아보자 https://nodejs.org/api/fs.html

const fs = require('fs');

/* 
// 기본
fs.writeFile('test1.txt', '안농?', (err) => {
    if(err) throw err;
    console.log('파일 쓰기 성공');
});

*/

/*
// open해서 좀 더 구제척으로 제어한다. w: 새로 쓰기, a: 덧붙이기
fs.open('test.txt1', 'w', (err, fd) => {
    // 실패 err, 성공 df
    if(err) throw err;
    
    fs.write(fd, "안녕하세염?", (err, written) => {
        if(err) throw err;
        console.log(written + "bytes Written.");
        
        fs.close(fd, () => {
            console.log("Done");
        });
    });
});
*/

/*
fs.open('test.txt1', 'a', (err, 써라) => {
    // 실패 err, 성공 df
    if(err) throw err;
    
    fs.write(써라, '반갑습니다.', 4, (err, written) => { // 4는 위치(바이트). 근데 왜 위치 안됨???
        if(err) throw err;
        console.log(written + "bytes Written.");
        
        fs.close(써라, () => {
            console.log("Done");
        });
    });
});
*/


// 더 고급진 방식 Stream. 콜백 중 불안함을 해결.
const useStream = fs.createWriteStream('test2.txt', {flags: 'w'}); // 핸들을 연다

useStream.on('open', () => { // 이벤트를 통해 실제로 open이 실행 됐을 때 write를 하는 안전한 방식.
    useStream.write("안녕하세요도 지겹네 뭐라고 해야되나~~ 아무튼 두번째 파일임.");
    useStream.end(() => {
        console.log("- 끗 -");
    });
});
