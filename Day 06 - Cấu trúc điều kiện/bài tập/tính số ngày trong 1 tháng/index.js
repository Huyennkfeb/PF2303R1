let showDayBtn = document.getElementById('showDay');
let month = document.getElementById('monthNumber');
let result = document.getElementById('dayNumber');
showDayBtn.addEventListener('click',function(){
    let month = document.getElementById('monthNumber').value;
    let monthNumberValue = month.value;
    let dayNumber;
    switch(month) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            dayNumber = '31 ngày';
        break;
        case '2':
            dayNumber = '28 hoặc 29 ngày';
        break;
        case '4':
        case '6':
        case '9':
        case '11':
            dayNumber = '30 ngày';
        break;

        default:
            dayNumber = 'Không tồn tại tháng này';
        break;
    }
    result.innerHTML = `Số ngày trong tháng ${month} là ${dayNumber}. `
} )

console.log()