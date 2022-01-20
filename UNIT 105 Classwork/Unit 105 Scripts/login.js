function login(){
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val()
    
    let userList = readUsers();
    for(let i =0;i<=userList.length;i++){
        console.log(userList[i]);
        if(email===userList[i].email && password===userList[i].password){
            console.log("Welcome")
            flag=true;
            window.location="users.html"
        }
        
        
    }
    if(flag==false){
        console.log("Invalid credentials");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide")
        },3000);

    }
}
function init(){
    //hook events 
    $("#btnLogin").click(login);
}
window.onload=init;