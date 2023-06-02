// // số int >0 là số nguyên dương
// // => true và false

// function isNumberBiggerThanZero(number)
// {
//     let isBigger = Number(number) > 0;
//     return isBigger;
// }
// let numberCheck =-1;
// let isBig = isNumberBiggerThanZero(numberCheck)
// console.log(isBig)

// let numberInput = document.querySelector('.number-input')
// let btnCheck = document.querySelector('.btn-check')
// let result = document.querySelector('.result')

// btnCheck.addEventListener('click',function(){
//     console.log('click')
//     let numberInputValue = numberInput.value
//     let message = `${numberInputValue} không phải là số nguyên dương`
//     console.log(numberInputValue)
//     if(isNumberBiggerThanZero(numberInputValue))
//     {
//         message = `${numberInputValue} là số nguyên dương`;
//     }
//     result.innerHTML = message;
// })


// bài 2
//[1,2,3]=>[3,2,1];
// function flipArray(numbersArr)
// {
//     let arrTemp = [];
//     for(let index = numbersArr.length -1; index >= 0 ; index -- )
//     {
//         let item = numbersArr[index];
//         arrTemp.push(item);
//     }
//     return arrTemp;
// }
// let arr =[1,2,3,4];
// let arrFlip = flipArray(arr);
// console.log(arrFlip);

//bài 3
// let character ='b';
// let arrSearch = ['2','a','a','a'];

// function countCharacterInArray(characterSearch,arr)
// {
//     let countStr = 0;
    
    //cách 1
    // for(let index in arr)
    // {
    //     if(arr[index] === character)
    //     {
    //         countStr += 1;
    //     }
    // }
    // if(countStr == 0)
    // {
    //     return -1;
    // }

    // cách 2
//     let arrFilter = arr.filter(function(item){
//         return item == character;
//     })
//     console.log(arrFilter)
//     return arrFilter.length > 0 ? arrFilter.length : -1;
// }

// let count = countCharacterInArray (character,arrSearch);
// console.log(count);

let productNames = [
    'Iphone 11',
    'Iphone 12',
    'Iphone 14',
];
let productName1s = [
    'Xiaomi 11',
    'Bphone 12',
    'Iphone 14',
];

function renderProductNames(products)
{
    let productEl = document.querySelector('.products');
    let productHtml = '';
    let test='';
    for(let index in products)
    {
        let item = products[index];
        productHtml += `<div class="product-${index}">
        <p>${item}</p>
            <p>2000</p>
            <img src="./" alt="">
            <button>buy</button>
            <p>--------------</p>
        </div>`
        test =+'a'
    }
    console.log(productHtml)
    console.log(test)
    productEl.innerHTML = productHtml
}


renderProductNames(productNames)

let inputName = document.querySelector('.input-name')
let addBtn = document.querySelector('.add')
addBtn.addEventListener('click',function(){

    let inputNameValue = inputName.value
    productNames.push(inputNameValue)
    renderProductNames(productNames)
    inputName.value = ''
    console.log(productNames)
});