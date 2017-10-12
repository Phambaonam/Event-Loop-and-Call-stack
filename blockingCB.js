function now(txt) {
    console.log(new Date().toLocaleTimeString()+ ' ' + txt);
}

function wait(fn,miliseconds) {
    var statTime = new Date().getTime();
    while (new Date().getTime() < statTime + miliseconds){};
    fn();
}

now('> start to wait');
wait(function(){
    now('>end of wating')
},5000);
now('> finish waiting')

// o day co 1 tac vu chay cham ton nhieu thoi gian nen cac tac vu khac
// phai cho cho tac vu nay hoan thanh thi moi chay tiep duoc
// De xu ly truong hop nay ta co vi du ve ham process nexttick