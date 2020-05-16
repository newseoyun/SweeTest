// 파일에 쓸 양이 많을 때, 파일을 쓰는 동안 다른 작업은 대기한다. 7장 멀티스레드에서 해결법 다룸.

const fs = require('fs');
let str = [];

for(let j=0; j<10000000; j++){
    str += '가나다라마바사아자차카타파하하하엄청큰텍스트임';
}

const wStream = fs.createWriteStream('bigFile.txt', {flags:'w'});
wStream.on('open', (data) => {
    console.log("open: ", data);
    
    setTimeout(() => {
        console.log("- 파일 쓰기 시작! -");
        for(let i=0; i<100; i++){
            wStream.write(str);
        }
        console.log('- 쓰기 끗 -');
    }, 0);

    setTimeout(() => {
        console.log("test2");
    },10);
    
    console.log("test1");

    setTimeout(() => {
        wStream.end(() => {
            console.log("- 파일 닫음 -");
        });
    }, 10000);
});

// 이거 하다가 노드 디짐.. RIP..(위에 str 루프에서 0하나만 빼면 잘됨ㅋ)