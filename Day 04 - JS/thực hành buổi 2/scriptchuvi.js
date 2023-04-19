let width = prompt('Nhập chiều rộng');
let length = prompt('Nhập chiều dài')
let message=`
<pre>
    <h1>Tính chu vi và diện tích</h1>
    Chiều rộng: ${width}
    Chiều dài:${length}
    Chu vi : ${2 * (width+length)}
    Diện tích : ${width * length}
</pre>
`;
document.write(message);

// a*b , 2*(a+b)
// in ra chiều rộng, chieuf dai, chu vi va dien tich