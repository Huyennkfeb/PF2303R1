
function showMessage(){
    let inputNumber = document.getElementById('input');
    let number = +inputNumber.value;
    if (number % 2 ==0){
        alert( number + ' là một số chẵn');
    } 
    else {
        alert( number + ' là số lẻ');
    }
}
