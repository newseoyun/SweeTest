const https = require('https');
const http = require('http');
const fs = require('fs');

// const url = 'https://n.weather.naver.com/today/09200114';
// let crawlData = [];

// https.get(url, (res) => {
//     let body = '';
//     res.on('data', (d) => {
//         body += d;
//     });
    
//     res.on('end', () => {
//         let fullData = body;
//         let startNum = fullData.indexOf('<!-- 주간예보');
//         let endNum = fullData.indexOf('<!-- 광고');
//         let weather = fullData.substring(startNum, endNum);
        
//         // 수집한 태그를 파일로 저장할것임
//         const useStream = fs.createWriteStream('weatherTag.html', {flags: 'w'}); // 핸들을 연다

//         useStream.on('open', () => { 
//                 console.log("- 파일로 저장 -")
//             useStream.write(weather);
//             useStream.end(() => {
//                 console.log("- 저장 완료 -");
//             });
//         });
        
//         console.log("startNum: "+startNum, " | endNum: "+endNum);

//     });
// }).on('error', (e) => {
//     console.log("ERROR: " + e);
// });


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8' });
    fs.readFile('weatherTag.html', (err, data) => {
        if(err) throw err;
        res.end(data);
    })
}).listen(3000, (err) => { 
    if (err) throw err;
    console.log('서버 기동 중'); 
});