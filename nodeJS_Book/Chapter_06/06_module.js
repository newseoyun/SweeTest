/*
   exports      :여러 함수나 변수 선언
      vs
module.exports  :하나의 함수 또는 오브젝트로 인지

*/

const data = require('./E_data.js'); // exports
data.main();
console.log("data.list : " + data.list);

const item = require('./ME_item.js') // module.exports
item();
console.log("console.log(item()); : " + item());
item.haha();