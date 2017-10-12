function now(txt) {
    console.log(new Date().toLocaleTimeString()+ ' ' + txt);
}
now('> Start to wait')

setTimeout(function () {
   now('> End of waiting')
},0);
process.nextTick(function () {
    now('> DO this task at the end of event queue')
})
now('> Do other task')
// neu ta thay thoi gian xuong bang 0 thi setTimeout van bi day xuong cuoi hang doi