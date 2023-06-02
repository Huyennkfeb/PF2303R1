let loan = prompt("Enter the loan");
let earnings = prompt("Enter the earnings");
let year = prompt("Enter the year")
let simpleInterest = loan * (earnings/100);
let message =`
<pre>
    Số tiền vay : ${loan} triệu
    Số lãi : ${earnings} / năm
    Số năm vay : ${year}
    Số lãi đơn : ${simpleInterest}%
    <h3>Số tiền lãi phải trả sau ${year} năm:</h3>
    ${loan+(year*simpleInterest)} triệu
</pre>`
document.write(message);