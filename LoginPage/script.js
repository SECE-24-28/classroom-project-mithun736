function myfunction(){
    let name={
        "username":"mithun",
        "Password":"mithun73"
    }
    let n=document.getElementById('a').value;
    let pass=document.getElementById('b').value;
if(name.username==n && name.Password==pass)
{
    console.log("Login Successfulluy");
}
else
{
   alert("invalid user or password");
 
}
}