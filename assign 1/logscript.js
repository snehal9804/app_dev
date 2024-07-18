function login(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username==="Snehal"){
        if(password==="welcome"){
            alert("login successful!");
        }
    }else{
        alert("login not successful!");
    }
}