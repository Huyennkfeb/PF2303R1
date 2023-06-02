let n =4;
// khoi tao mang
let caros =[];
for(i=0;i<n;i++){
    let item=[];
    for(j=0;j<n;j++){
        item.push(0)
    }
    caros.push(item)
}
console.log(caros)
//in ra man hinh
let board = document.querySelector('#board');
let boardHtml = ``;
for(let index in caros)
{
    let caroItem = caros[index];
    boardHtml +='<div>'
    for(let index1 in caroItem)
    {
        boardHtml += `<button data-x="${index}"
        data-y="${index1}" class="control"
        ${caroItem[index1]}
        </button>`
    }
    boardHtml +=`</div>`;
}