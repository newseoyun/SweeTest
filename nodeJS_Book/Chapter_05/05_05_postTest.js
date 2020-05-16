// p.39 테스트 사이트가 바뀜(업글). ptsv2.com

const qs = require('querystring');
const http = require('http');

const postData = qs.stringify({
    'key1' : '안녕하세요',
    'key2' : '방가방가'
});

const postOptions = {
    host: 'ptsv2.com',
    port: '80',
    path: '/t/jl5ra-1589633470/post',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};

const postReq = http.request(postOptions, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log('Response: ' + chunk);
    });
});

postReq.write(postData);
postReq.end();