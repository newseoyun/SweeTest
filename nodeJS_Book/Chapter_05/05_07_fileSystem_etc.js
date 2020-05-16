// unlink(삭제), rename(이동도 같이), stat, watch(변경 이벤트 감지), mkdir, rmdir, readdir

const fs = require('fs');

/*
// stat
fs.stat('bigFile.txt', (err, stats) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(stats);
});

*/

/*
// 디렉터리 생성
fs.mkdir('fileSystemsDIR', (e) => {
    if(e) throw e;
    console.log('디렉터리 생성완료.' + e);
});
*/

/*
// 디렉터리 내 파일 목록 불러오기 (배열)
fs.readdir('fileSystemsDIR', (e, files) => {
    if(e) throw e;
    console.log(files);
});
*/


// 디렉터리 삭제. (빈 디렉터리가 아닐 경우 에러남. 그럼 파일부터 unlink하고 지우면 됨.)
fs.rmdir('testdir', (e, files) => {
    if(e) throw e;
    console.log(e);
});
