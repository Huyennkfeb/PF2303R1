let year = prompt('Dien nam');
let n = parseInt(year);
let can = n % 10;

let canName = '';
switch (can) {
    case '0':
        canName = 'Canh';
    break;
    case '1':
        canName = 'Tân';
    break;
    case '2':
        canName = 'Nhâm';
    break;
    case '3':
        canName = 'Quý';
    break;
    case '4':
        canName = 'Giáp';
    break;
    case '5':
        canName = 'Ất';
    break;
    case '6':
        canName = 'Bính';
    break;
    case '7':
        canName = 'Đinh';
    break;
    case '8':
        canName = 'Mậu';
    break;
    case '9':
        canName = 'Kỷ';
    break;
    default:
        canName ='Không có';
    break;
}

let chi = n % 12;
let chiName = '';
switch(chi) {
    case '0':
        chiName = 'Thân'
    break;
    case '1':
        chiName = 'Dậu'
    break;
    case '2':
        chiName = 'Tuất'
    break;
    case '3':
        chiName = 'Hợi'
    break;
    case '4':
        chiName = 'Tý'
    break;
    case '5':
        chiName = 'Sửu'
    break;
    case '6':
        chiName = 'Dần'
    break;
    case '7':
        chiName = 'Mẹo'
    break;
    case '8':
        chiName = 'Thìn'
    break;
    case '9':
        chiName = 'Tỵ'
    break;
    case '10':
        chiName = 'Ngọ'
    break;
    case '11':
        chiName = 'Mùi'
    break;
    default:
        chiName = ' Không có'
    break;
}

let lunarYear = canName + chiName;
console.log(lunarYear);