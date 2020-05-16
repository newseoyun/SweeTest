/*
point 1. http, https 서버 만들기. ssl인증서 없으므로 https는 생략.
point 2. res.write res.end의 차이점: end는 끝. write는 +. 둘 다 전송이 끝날 때까지 청킹해서 보냄.
point 3. get post. post는 다음 파일에서
*/

/*
https 예제

const https = require('https');
const fs = require('fs');

const options = {
    key : fs.readFileSync('');
    cert : fs.readFileSync('');
};

https.createServer(option, (req, res) => {
    res.writeHead(200);
    res.end('지긋지긋한 헬로월드 또하네...\n');
}).listen(3000);

*/


// 소스 가져오기
const http = require('http');

http.get('http://google.co.kr/', (res) => {
    let body = '';
    res.on('data', (d) => {
        body += d;
    });
    res.on('end', () => {
        console.log("DATA : " + body);
    });
}).on('error', (e) => {
    console.log("ERROR : " + e);
});

