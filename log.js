function func(){
    if(email=="snehal@gmail.com"&& pass=="12345"){
        alert("login successful");
        window.location.assign("home.html");
    }
    else{
        alert("login unsuccessful");
    }
}
var email=document.getElementById("username").value;
var pass=document.getElementById("password").value;