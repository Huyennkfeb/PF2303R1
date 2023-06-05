//bai 1
// let i ;
// let text = '';
// for (i=0;i<5;i++){
//     text +="The numbet is "+ i +"<br>";
// }
// document.write(text);

//bai 2
let num = prompt("enter number")
let total = 0;
let i = 1;
for(i = 1 ; i <= num ; i +=1) {
    total = total + i;
}
alert(total);