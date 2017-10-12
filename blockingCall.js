function now(txt) {
    console.log(new Date().toLocaleTimeString()+ ' ' + txt);
}

function wait(miliseconds) {
    var statTime = new Date().getTime();
    while (new Date().getTime() < statTime + miliseconds);
}

now('> start to wait');
wait(5000);
now('> finish waiting');

// blocking function la mot ham ma khi no chay no se ngan tat ca cac
// ham khacs tip theo phai dung lai cho den khi nao no hoan  thanh