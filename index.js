var firstFuction  = function () {
    console.log('Im first')
};
var second = function () {
    setTimeout(firstFuction,5000)
    console.log('Im second')
}
second();