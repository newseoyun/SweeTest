/*
child process: 메인 프로세스 아래 독립된 프로세스 생성. 
    + 책보다 더 좋은 설명 찾아보니까 얘도 병렬 작업용이고 직접적인 컨트롤이 더 필요할 때 얘를 씀.
    
cluster: 같은 작업을 여러놈이 동시에(병렬작업). 
    + 로드밸런싱 등의 추가 기능 활용할 때 얘를 씀.
*/

const exec = require('child_process').exec;
exec('ls -al', (err, stdout, stderr) => {
    if(err) {
        console.error(`exec error: ${err}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});