// 크롤링 p.52
// 안됨. 다른거 할램
const https = require('https');
const url = 'https://nodejs.org/docs/latest-v12.x/api/';
let crawlData = [];

https.get(url + 'index.json', (res) => {
    let body = '';
    res.on('data', (d) => {
        body += d;
    });
    
    res.on('end', () => {
        let indexData = body;
        console.log('body : ' + indexData);
    });
    
    // res.on('end', () => {
    //     let indexData = JSON.parse(body).desc;
        
    //     for(let i=0; i<indexData.length; i++){
    //         if(indexData[i].type == 'text'){
    //             let str = indexData[i].text;
    //             str = str.substr(str.indexOf("[") + 1);
    //             let tempIdx = str.indexOf("]");
    //             let title = str.substr(0, tempIdx);
                
    //             str = str.substr(tempIdx + 1);
    //             let link = str.slice(1, -1).replace(".html", ".json");
                
    //             crawlData.push({
    //                 'title': title,
    //                 'link': link,
    //                 'methods': []
    //             });
    //         }
    //     }
        
    //     setTimeout(() => {
    //         GetMethod();
    //     }, 1000);
    // });
}).on('error', (e) => {
    console.log("ERROR: " + e);
});


// let pageIdx = 0;
// const GetMethod = () => {
//     console.log("Get Methods");
    
//     https.get(url + crawlData[pageIdx].link, (res) => {
//         let body = '';
//         res.on('data', (d) => {
//             body += d;
//         });
        
//         res.on('end', () => {
//             const temp = JSON.parse(body);
            
//             if(!temp || !temp.modules || !temp.modules.length == 0 || !temp.modules[0].methods){
//                 pageIdx++;
//                 setTimeout(() => {
//                     GetMethod();
//                 }, 1000);
//                 return;
//             }
//             let indexData = temp.modules[0].methods;
            
//             for(let i=0; i<indexData.length; i++){
//                 crawlData[pageIdx].methods.push({
//                     textRaw: indexData[i].textRaw,
//                     desc: indexData[i].desc,
//                     signatures: indexData[i].signatures
//                 });
//             }
            
//             if(pageIdx < crawlData.length-1){
//                 pageIdx++;
//                 setTimeout(() => {
//                     GetMethod();           
//                 }, 1000);
//             }else{
//                 console.log(crawlData);
//             }
//         });
//     }).on('error', (e) => {
//         console.log("ERROR: " + e);
//     });
// };

