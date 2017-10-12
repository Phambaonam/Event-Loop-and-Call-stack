
console.log(new Date().toLocaleTimeString()+ ' ' +'start')
setTimeout(function () {
    console.log(new Date().toLocaleTimeString()+ ' ' +'there1')
},1000)
setTimeout(function () {
    console.log(new Date().toLocaleTimeString()+ ' ' +'there2')
}, 2000);
process.nextTick(function () {
    console.log('> DO this task at the end of event queue')
})
setTimeout(function () {
    console.log(new Date().toLocaleTimeString()+ ' ' +'there3')
}, 1000)

console.log(new Date().toLocaleTimeString()+ ' ' +'end')
