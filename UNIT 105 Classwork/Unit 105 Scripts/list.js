function createRow(users){
    for(let i = 0; i<users.length; i++){
        //get each one of the users
        let user = users[i]; 
        //display the user
        let userData =`<tr><td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.fname}</td>>
            <td>${user.lname}</td>
            <td>${user.age}</td>
            <td>${user.payment}</td>
            <td>${user.color}</td></tr>`;
        console.log(userData);
        $(".userList").append(userData);
    }
}
function init() {
    console.log("Listing users");
    let users = readUsers();
    createRow(users);
    
}

window.onload=init;