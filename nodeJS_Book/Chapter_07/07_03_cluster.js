/*
OS 모듈로 cpu 코어 개수를 알아내서
cpu의 코어 개수만큼 서브클러스터(워커)를 fork하고
병렬 실행. 물론 fork할 개수는 자기 맘 < cpu코어개수

    + nodeJS는 한 프로세스 당 메모리를 512MB(32bit) or 1.5GB(64bit) 까지만 사용하도록 제한.
        그러니 워커를 늘리자.
    + 워커는 고유의 pid를 갖는다. (worker.process.pid)
    + 처음 생성된 프로세스가 마스터가 되고 그 다음부턴 워커임.
        (어차피 마스터가 fork하니까 fork해서 생긴게 워커지 뭐..)
    + 워커 생성 시 online 이벤트, 죽으면 exit 이벤트 발생
    + 마스터는 계속 살아있어야되니까 되도록 워커들 관리만하는 작은 로직으로 구성하고 
        무겁고 복잡한 구체적 작업은 워커들이 하는 것이 좋다.
    + 서로 세션 공유가 안됨 주의
*/

const cluster = require('cluster');
const http = require('http');
if(cluster.isMaster){
    let numReqs = 0;
    setInterval( () => {
        console.log("numReqs = " + numReqs);
    }, 1000);
    
    const messageHandler = (msg) => {
        if(msg.cmd && msg.cmd == "notifyRequest"){
            console.log("메시지를 받았음. +1");
            numReqs += 1;
        }
    }
    
    const numCPUs = require('os').cpus().length;
    for(let i=0; i<numCPUs; i++){
        cluster.fork();
        console.log("포크 뿡");
    }
    
    Object.keys(cluster.workers).forEach( (id) => {         // workers - worker 공식문서 참고
        cluster.workers[id].on('message', messageHandler); // message 이벤트를 감지하면 messageHandler를 실행
    });
}else{
    http.Server((req, res) => {
        res.writeHead(200);
        res.end('hello world 또하네.... \n');
        
        process.send({ cmd: 'notifyRequest' }); // 서버 응답 후 (마스터)프로세스에게 메시지를 보낸다
    }).listen(3000);
}