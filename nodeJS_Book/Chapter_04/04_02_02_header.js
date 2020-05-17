/*
--- 응답 헤더 ---
* ['x-forwarded-for'] 실제 IP를 헤더에 포함시키는 기능. (프록시나 로드밸런서를 통과하면 IP를 알 수 없게 되므로)
    실제 IP로 로그를 기록하는 등의 활용을 함.

* 접속하면 서버에 두 개의 요청이 들어옴. 메인 & favicon.ico

*/

const http = require('http');

const server = http.createServer((req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log('------------------ request 정보 ------------------');
    console.log("클라이언트 ip: ", ip);
    console.log("url: ", req.url);
    console.log("headers: ", req.headers);
    console.log('--------------------------------------------------');
    
    // res.statusCode = 200;
    // res.setHeader('Content-type', 'text/plain');
    res.writeHead(200, { 'Content-Type' : 'text/plain; charset=utf-8' });
    res.end('지긋지긋한 헬로월드\n' + JSON.stringify(req.headers, null, 4) + '\n메롱메롱');
});

server.listen(3000, (err) => { 
    if (err) { 
        console.log(err); 
    }
    console.log('서버 기동 중'); 
});