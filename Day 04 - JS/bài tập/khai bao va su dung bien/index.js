// bai 1
let i = 10;
let f = 20.5;
let b = true ;
let s = "Hà Nội";

document.write('i='+ i)
document.write('</br>')
document.write('f='+f)
document.write('</br>')
document.write('b='+b)
document.write('</br>')
document.write('s='+s)

//bai 2
document.write('</br>')
let width = 30;
let height = 40;
let area = width * height

document.write('area=' + area )

//bai 3
document.write('</br>')
let a =  prompt('a = ?')
let c = prompt('c = ?')
if (a%c ==0)
{
    document.write(a +' chia het cho c');
}
else{
    document.write(a +' khong chia het cho c');
}