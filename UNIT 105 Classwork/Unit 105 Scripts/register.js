console.log("Register");
//create the constructor ES2015
class User{
    constructor(email, password, first, last, age, address, phone, payment, color){
        this.email = email;
        this.password = password;
        this.fname = first;
        this.lname = last;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment; 
        this.color=color;

    }

} 
//register user function 
function registerUser(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val(); //check your ID
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val(); 
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();
    let user = new User(email,password,first,last,age,address,phone,payment,color);
    console.log(user);
    if(isValid(user)){
        saveUser(user);
    }

}
function isValid(user){
    //return false when the user is not valid 
    //return true when the user is valid 
    let valid = true;
    //we need to reset the original appearance of the inputs 
    //by removing the error class (style.css)
    //validations 
    $(`input`).removeClass("error");

    if(user.email.length==0){

        valid = false;
        $("#txtEmail").addClass("error");
    }
    if(user.password.length==0){
        valid = false;
        $("#txtPassword").addClass("error");
    }
    if(user.fname.length==0){
        valid = false;
        $("#txtFirst").addClass("error");
    }
    if(user.lname.length==0){
        valid = false;
        $("#txtLast").addClass("error");
    }
    if(user.age.length==0){
        valid = false;
        $("#txtAge").addClass("error");
    }
    if(user.lname.length==0){
        valid = false;
        $("#txtLast").addClass("error");
    }

    
    
    return valid;
}

//clear inputs 
function clearInputs(){
    let email = $("#txtEmail").val("");
    let password = $("#txtPassword").val(""); 
    let first = $("#txtFirst").val("");
    let last = $("#txtLast").val("");
    let age = $("#txtAge").val("");
    let address = $("#txtAddress").val(""); 
    let phone = $("#txtPhone").val("");
    let payment = $("#selPayment").val("");
    let color = $("#txtColor").val("");
}

function init(){
    console.log("Init function");
    //hook events
    $("btnSave").click(registerUser);
}

window.onload=init;