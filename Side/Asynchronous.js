// 비동기 통신 예제

var EventEmitter = require('events').EventEmitter; // emitter: emit[이밋] (내다.방출하다.)
var evt = new EventEmitter();

evt.on('eventname', function(str) { // eventname의 이벤트를 생성.
    console.log('hello! ' + str);
});

setTimeout(function() { // setTimeout은 정해진 시간 후 함수를 콜백하는 기본 메소드.
    evt.emit('eventname', 'nodeJS!'); // eventname의 이벤트를 emit한다. 3초 후에.
}, 3000); // (밀리세컨드)

console.log('한글이 먼저지');
