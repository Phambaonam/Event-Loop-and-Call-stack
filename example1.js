// setTimeout(function () {
//     console.log('1')
// },1000);

console.log(new Date().toLocaleTimeString()+ ' ' + 'start');
 setTimeout(function () {
     console.log(new Date().toLocaleTimeString()+ ' ' + 'waitting...')
 },2000);
 console.log(new Date().toLocaleTimeString()+ ' ' + 'end')