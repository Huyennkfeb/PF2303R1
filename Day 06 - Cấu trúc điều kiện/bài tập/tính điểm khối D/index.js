let showPointBtn = document.getElementById('showPoint');
showPointBtn.addEventListener('click',function(){
    let diemToan = document.getElementById('diemToan').value;
    let diemVan = document.getElementById('diemVan').value;
    let diemAnh = document.getElementById('diemAnh').value;
    let area = document.getElementById("area").value;
    let areaPoint ;
    switch (area) {
        case 'KV1':
        areaPoint = 0.75;
        break;
        case 'KV2-NT' :
        areaPoint = 0.5;
        break;
        case 'KV2' :
        areaPoint = 0.25;
        break;
        case 'KV3' :
        areaPoint = 0;
        break;
    }
    let pointHtml = Number(diemToan) + parseInt(diemVan) + (+diemAnh) + areaPoint;
    let result = document.getElementById('result');
    result.innerHTML = `Điểm là ${pointHtml}`;
});