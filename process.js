function now(txt) {
    console.log(new Date().toLocaleTimeString()+ ' ' + txt);
}
now('> Bat dau tac vu');
process.nextTick(function () {
    now('> DO this task at the end of event queue')
})
now('> Ket thuc')

// giai thic thi nen hieu ban chat nodejs
// node js co 1 hang doi cac su kien, cac su kien nay se duoc xu ly ma khon g
// phai tuan tu cho doi lan nhau
// Nhung ham co thoi gian xu ly lau thi ta co the cho vao ham process.nextTick de ta co the day no xuong hang doi cuoi cung nhu vay no se khong chen ngang vao cac tac vu khac ma ta dang xu ly