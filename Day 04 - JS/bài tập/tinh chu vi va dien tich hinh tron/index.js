let r = prompt('Điền bán kính hình tròn:');
let c = 2 * r * Math.PI ;
let s = r^2 * Math.PI ;
let message = `
<pre>
    Bán kính hình tròn là ${r};
    Chu vi hình tròn là ${c};
    Diện tích hình tròn là ${s};
</pre>`
document.write(message);