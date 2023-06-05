//bai 1
// let a = prompt('Dien a')
// let b = prompt('Dien b')
// result = (a + b > 4)  ? 'Below' : 'Over';
// console.log(result);

//bai 2
let login = prompt("login:")
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ?
      'Greetings' :
      (login == '') ?
        'No login' :
        '';
        alert(message)