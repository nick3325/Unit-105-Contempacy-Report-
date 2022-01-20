const LS_KEY="users";
function saveUser(user) {
    //load the old data 
    let oldData = readUsers();
    //marge the data
    oldData.push(user);
    let value = JSON.stringify(oldData); // parse into a JSON string 
    localStorage.setItem(LS_KEY,value);
    console.log(value);
    //user is an obj
}

function readUsers(){
    //get values from localStorage
    let data = localStorage.getItem(LS_KEY)
    let list = JSON.parse(data);
    if(!data){
        return [];
    }else{
        let list=JSON.parse(data);
        return list;
    }
}