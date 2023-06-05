let fruitName = document.getElementById('name');

let showPriceBtn = document.getElementById('showPrice');
let result = document.getElementById('result');

showPriceBtn.addEventListener('click',function(){
    let fruitNameValue  = fruitName.value;
    let priceHtml=`Không có giá cho sản phẩm :${fruitNameValue}`;

    switch(fruitNameValue) {
        case'ổi' : 
        priceHtml = `giá cho sản phẩm ${fruitNameValue} 20000 VND/Kg`;
        break;
        case'dưa hấu' : 
        priceHtml = `giá cho sản phẩm ${fruitNameValue} 20000 VND/Kg`;
        break;
        case'táo' : 
        priceHtml = `giá cho sản phẩm ${fruitNameValue} 30000 VND/Kg`;
        break;
        case'xoài' : 
        priceHtml = `giá cho sản phẩm ${fruitNameValue} 30000 VND/Kg`;
        break;
        case'cam' : 
        priceHtml = `giá cho sản phẩm ${fruitNameValue} 40000 VND/Kg`;
        break;
        case'chôm chôm' : 
        priceHtml = `giá cho sản phẩm ${fruitNameValue} 40000 VND/Kg`;
        break;
        case'măng cụt' : 
        priceHtml = `giá cho sản phẩm ${fruitNameValue} 50000 VND/Kg`;
        break;

        default:
        priceHtml = `Không có giá cho sản phẩm ${fruitNameValue}`;
        break;
    }
    price.innerHTML = priceHtml;
});