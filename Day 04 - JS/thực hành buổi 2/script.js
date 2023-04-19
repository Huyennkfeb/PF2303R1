// phép tính
const ONE_HUNDRED_PERCENT=100;
let year =3;
let money = 100;
let bankPercent = 7;
let moneyInOneYear = money * (bankPercent / ONE_HUNDRED_PERCENT );
let interestMoney = year * moneyInOneYear;
let total = money + interestMoney

let message = `
<pre>
    Số năm gửi: ${year}
    Lãi suất : ${bankPercent}%
    Sau ${year} năm tiền lãi : ${interestMoney}
    Số tiền gốc và lãi sau ${year} năm: ${total}
</pre>
`;

document.write(message);

