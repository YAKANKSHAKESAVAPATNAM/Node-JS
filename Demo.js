const registeruser=require('./Registration.js');
function sayHello(){
    console.log("Hello, from Node JS");
}
sayHello();
const isExisting=registeruser.checkforuseer()
if(isExisting){
    console.log("User already exists");
}
else{
    registeruser.registeruser()
}
