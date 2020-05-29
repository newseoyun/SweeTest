let list = [1, 2, 3];

module.exports = () => {
    for(let i=0; i<list.length; i++){
        list[i] *= 3;
    }
    return list;
};

module.exports.haha = () => {
    console.log("hahahahah");
};
