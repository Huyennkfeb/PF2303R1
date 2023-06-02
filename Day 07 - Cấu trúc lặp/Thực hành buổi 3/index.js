// const FIRST_NUMBER = 3;
// const SECOND_NUMBER = 5;
// const FIZZ='FIZZ';
// const BUZZ='BUZZ';
// const FIZZ_BUZZ = 'FIZZBUZZ';
// let n=100;
// function renderFizzBuzzStringUseFor()
// {
//     console.log('use for')
//     // %: 2&2 = 0
//     // 3%2 = 1;
//     for(let index = 1; index <= n; index++)
//     {
//         let message = index;
//         let divForFirstNumber = index % FIRST_NUMBER;
//         let divForSecondNumber = index % SECOND_NUMBER;
//         if(divForFirstNumber == 0 && divForSecondNumber ==0) {
//             message = FIZZ_BUZZ;
//         } else if (divForFirstNumber == 0) {
//             message = FIZZ;
//         } else if (divForSecondNumber) {
//             message = BUZZ;
//         }
//         document.write(`${message} <br>`);
//     }
// }
// renderFizzBuzzStringUseFor();

//2 the input
//1 ô input nhập user name
//1 ô input nhập pass word
// khi click vào nút hiện mật khẩu => hiện mật khẩu
// ==> ngược lại ấn mật khẩu
//==> khi click vào nút đăng nhập
// kiểm tra tên và mk có nhập hay không

let nameEl = document.querySelector('.name')
let passwordEl = document.querySelector('.password')
//error
let nameError = document.querySelector('.name-error')
let passwordError = document.querySelector('.password-error')
//button
let showPassBtn = document.querySelector('.show-pass-btn');
let loginBtn = document.querySelector('.login-btn');

showPassBtn.addEventListener('click',function(){
    let type = passwordEl.getAttribute('type')
    if(type== 'password'){
        console.log('show')
        passwordEl.setAttribute('type','text')
    }
    else {
        console.log('hide')
        passwordEl.setAttribute('type','password')
    }
    console.log('type')
})