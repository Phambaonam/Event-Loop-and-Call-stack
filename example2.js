var firstFunction = function () {
    console.log("I'm first!");
};
function wait(miliseconds) {
    var statTime = new Date().getTime();
    while (new Date().getTime() < statTime + miliseconds);
}

var secondFunction = function () {
    console.log("I'm second!");
};
firstFunction()
wait(5000)
secondFunction();