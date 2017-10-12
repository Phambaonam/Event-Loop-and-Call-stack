const square = function (x) {
    return x*x;
}
const cb  = function () {
    console.log(square(5))
}
const main = function () {
    console.log('starting main');
    console.log('Excuting body');
    setTimeout(cb,10);
    console.log('Done with main')
    console.log('Extting main...')
}
main();