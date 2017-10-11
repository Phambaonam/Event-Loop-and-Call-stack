# Event-Loop-and-Call-stack
## Call Stack
* Trước khi đi vào tìm hiểu về vấn đề "event loop và call stack" trong javascript thì ta cùng xem lại cách thức thực thi các câu lệnh trong 1 chương trình được viết bằng javascript như sau:
- Như ta đã biết javascript xử lý đơn luồng. Do đó nếu ta đang chạy một dòng code trong Javascript mà cần một thời gian dài để hoàn thành tác vụ đó, thì nó sẽ block(chặn) tất cả đoạn code sau nó, và các đoạn code đằng sau chỉ thực hiện được khi đoạn code trước đó đã hoàn thành. Giả sử nếu ta đang ở một trang web và ta bấm vào một nút trên trang web, sau đó trang web vì lý do nào đó mà bị treo. Bạn thử click vào các nút khác nhưng không được, các nút này không hoạt động. Nguyên nhân này là do các nút sau nó đã bị chặn.
* Giả sử ta có một file main.js như sau:
```javascript
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
- Trong đó function now(txt) là hàm in ra một dòng lệnh với thời gian khi bắt đầu thực thi và kết thúc. 
- function wait(5000) là hàm để xác định thời gian chính xác để hoàn thành tác vụ
    
```
* Sau khi chạy chương trình thì ta có kết quả như sau:
```javascript
11:09:12 PM > start to wait
11:09:17 PM > finish waiting
- ta thấy khoảng cách từ khi bắt đầu và kết thúc chương trình là 5s và 5s này chính là thời gian hàm wait(5000) hoàn thành.
```
* Như vậy từ ví dụ trên ta có thể thấy hàm wait(5000) đã ngăn tất cả các hàm phía sau nó => đây là blocking trong Javascript và nó sử dụng một Call stack (theo cơ chế vào sau ra trước)cơ chế của nó hoạt động như sau:
* Ta coi thứ tự thực hiện của các dòng lệnh như sau:
1. now('> start to wait')
2. wait(5000)
3. now('> finish waiting')
Vì đây là 3 câu lệnh chạy hoàn toàn tách biệt không có sự liên quan đến nhau nên khi đưa từng lệnh vào call stack thì nó sẽ thực hiện ngay và đi ra khỏi call stack để nhường chỗ cho lệnh tiếp theo.
- đầu tiên gọi hàm now('> start to wait') đưa hàm này vào call stack do hàm này chỉ có lệnh log ra thời gian và text nên sau khi log xong thì nó sẽ được lấy ra khỏi stack
- tiếp theo gọi hàm wait(5000) hàm này chạy 5s sau thì hoàn thành sau khi hoàn thành thì cũng bị lấy ra khỏi stack
- cuối cùng gọi tiếp hàm now('> finish waiting') hàm này cũng chỉ log ra thời gian thực hiện do vậy sau khi thực hiện xong thì nó bị lấy ra khỏi stack trong stack lúc này còn hàm main() và không còn dòng code nào nữa nên hàm main() cũng bị xóa luôn khỏi stack
## Event Loop
* Như vậy trên đây là toàn bộ cơ chế xử lý blocking của javascript như ta thấy nó có nhược điểm là chỉ cần có 1 tác vụ nào đó có thời gian xử lý lâu thì tất cả các đoạn code đằng sau nó sẽ bị chặn không thực hiện được do vậy ta phải nên tránh blocking, nhưng tránh như thế nào? Như ta đã biết trong javascript cung cấp một cơ chế bất đồng bộ thông qua các hàm callback và một cơ chế được sử dụng đó là "event loop". Chúng ta cùng tìm hiểu xử lý bất đồng bộ trong javascript và cơ chế "event loop" qua các ví dụ dưới đây.
- cho một chương trình như sau:
```javascript
    function now(txt) {
        console.log(new Date().toLocaleTimeString()+ ' ' + txt);
    }
        now('> Bat dau tac vu');
        process.nextTick(function () {
             now('> DO this task at the end of event queue')
        })
        now('> Ket thuc')
- Kết quả in ra như sau:
11:51:20 PM > Bat dau tac vu
11:51:20 PM > Ket thuc
11:51:20 PM > DO this task at the end of event queue

```
- Chúng ta cùng theo dõi thứ tự hoạt động của các dòng lệnh trong call stack





