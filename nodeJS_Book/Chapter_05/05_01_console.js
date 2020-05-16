/*
console엔 log, error, info, dir 등등 많이 있음. 문서 참고(https://nodejs.org/api/console.html)

console.log('기본');
console.info('정보');
console.warn('경고');
console.error('에러');
*/


// 책 예제
let item = 50;
console.log('Count1: ', item);
console.log('Count2: %d', item);
console.log(`Count3: ${item}`);

/*
setInterval(() => {
    console.log("지금 시간은 ", new Date(), "입니다.");
}, 5 * 1000);
*/
// 책 예제 end


// ANSI 패턴으로 예쁘게 써보자 (ANSI 예제: https://sosomemo.tistory.com/59)
// 크롬에선 옵션(5; 이런것) 안먹히네...
console.log('------ ANSI 패턴으로 예쁘게 써보자 ------');
console.log("\033[36m" + new Date() + "\033[0m"); 
// \033[ 이건 \e[(알파벳 e) 혹은 \0x1B[(16진수) 이거랑 같다(이스케이프 및 ANSI코드의 시작을 의미함). 36m은 청록색. \033[0m 이건 초기화 의미.
console.log("\033[5;31m" + new Date() + "\033[0m");
console.log("\033[31m\033[43m" + new Date() + "\033[0m");  // \033[43m 뒤에 한번 더 오면 배경


console.info('--------------- Table ---------------');
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a', 'b']);  // 따봉

console.info('[ 응용 ]');

const myobj = { head1 : '내용1', head2 : '내용2' };
console.table([myobj],['head1','head2']);  // 크...
