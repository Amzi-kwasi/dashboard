import { useState } from "react";



// var usernamefield=document.getElementById("username");
// var submitbutton=document.getElementById("submit")
// var passkey=document.getElementById("password");

// usernamefield.addEventListener("keydown",()=>{
  
//   if(usernamefield.value.length > 20){
//     submitbutton.style.display="none";
//   }
  
// else{
//   submitbutton.style.display="";
  
// }
// if(passkey.value.length < 8){
//   submitbutton.style.display="none";
// }
// else if(passkey.value ==""){
//   submitbutton.style.display="";  
// }
// })
  
var numbers=["1","2","3","4","5","6","7","8","9","0"];


function User(){
  var username=document.getElementById("username").value;

  localStorage.setItem("username", username);
}

function Formd(){
setTimeout(()=>{
  document.getElementById("username").value= localStorage.getItem("username");

}, 1000);
  }

function Register() {

  const [username, setName] = useState("");
  const [passwordhash, setPasswordhash] = useState("");
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://3.141.195.251/Auth/register", {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          username: username,
          passwordHash: passwordhash,
          fullName: fullname,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setMessage("User created successfully");

        window.location.href="/";

      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

function passwordV(){
  var passkey=document.getElementById("password");
  var submitb=document.getElementById("submit");

  if(passkey.value.length < 8){
    submitb.style.display="none"
  }else if(passkey.value == ""){
    submitb.style.display=""
  
  }
  else{
    submitb.style.display=""
  }

}

  return (
    <div className="formdata" onLoad={Formd()}>
      <form onSubmit={handleSubmit} className="form">
      <a style={{fontSize:"20px",cursor:"pointer"}} onClick={()=>{window.history.back()}}>&times;</a>
        <legend style={{textAlign:"center",fontSize: "25px",color: "orange"}}>Sign Up</legend>
        
        <hr/>
        <br/>
        <label for="username">
            <p>Username</p>
            <input  type="text"
          value={username}
          placeholder="username" id="username" onKeyUp={User}
          onChange={(e) => setName(e.target.value)} required/>
        </label>
        <label for="fullname">
            <p>Fullname</p>
            <input  type="text"
          value={fullname}
          placeholder="Fullname" id="fullname"
          onChange={(e) => setFullname(e.target.value)} required/>
        </label>
        <label for="password">
            <p>Password</p>
            <input type="password"
          value={passwordhash} onKeyUp={passwordV}
          placeholder="At least 8 characters" id="password"
          onChange={(e) => setPasswordhash(e.target.value)} required/>
        </label>
        <br/>
        <br/>
        <br/>
        <input type="submit" style={{background:"orange", color:"white"}} name="submit" id="submit"/>
        <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
    </div>
  );
}

export default Register;