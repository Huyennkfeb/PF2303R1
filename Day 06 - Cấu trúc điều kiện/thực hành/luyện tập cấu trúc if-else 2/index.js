let userName = prompt("Who's there?",'');
if (userName == 'Admin') {
    alert('Please enter the password');
} else if ( userName == null) {
    alert('Cancled');
} else {
    alert("I don't know you");
}
let pass = prompt('Password?','');
if (pass == 'TheMaster'){
    alert('Welcome');
} else if (pass ==null) {
    alert('Canceled');
} else {
    alert('Wrong password');
}