// chu vi 2
// chu vi = 2 * R * PI
// const PI=3.14;
// let radius = 5;
// let c=2 * PI * radius ;
// let message = `chu vi cua hinh tron la: ${c} m`;
// let message2 = `nhap thong tin va
// ${c}
// hien thi ra man hinh`
// console.log(message2);


// khai bao bien ten cho game con ran
// số lượt chơi, số lượt chơi còn lại, số điểm, chiều dài bắt đầu, chiều dài tối đa, kích thước của màn hình chơi, chiều dài khi ăn 1 điểm, vị trí tọa độ bắt dầu, vị trí tọa độ của điểm ăn,các nút di chuyển (4 nút có dữ liệu dưới dạng số)
const HEART_INIT = 3;
let positionSnakeX = 100;
let remainingTurn = HEART_INIT - 1;
const SNAKE_START =1;
const SNAKE_MAX=100;
let point = SNAKE_START+1;
const SCREEN_X = 500;
const SCREEN_Y=500;
let positionStartX = 1;
let positionStartY= 1;
let positionPointX=5;
let positionPointY=5;
const MOVE_UP = 2;
const MOVE_LEFT = 4;
const MOVE_RIGHT = 6;
const MOVE_DOWN = 8;