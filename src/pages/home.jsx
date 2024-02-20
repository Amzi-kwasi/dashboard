import "../style.css"
import Head from "../component/header";
import { Link } from "react-router-dom";
import Button from "../component/button";
import Dev from "./developer";
import BottomNav from "../component/bottomnav";


function Alrt(){
  alert("Sign In")

}

// hvq-ubwd-urm


function Load(){
    setTimeout(()=>{
        document.getElementById("crpreloader").style.display="none"
        document.getElementById("mainpage").style.display=""
},5000);
}

function Home() {
var username= localStorage.getItem("username");
 return(
    <>
    <div id="crpreloader" onLoad={Load()}>
<div className="crpreloader">
    <p><span style={{color:"orange",fontFamily:"fantasy",fontSize:"40px",fontWeight:"400"}}>CR</span> UNION</p>
</div>
</div>

<div id="mainpage" style={{display:"none"}}>
    <Head />

<Dev />

<BottomNav home={{color:"lightgreen"}}/>

    <Link to="/usersettings">
    <Button />
    </Link>

 
   
{/* 
    accounnt block */}

<div className="account">
    <div className="account-div" style={{color:"white"}}>
     <p style={{fontSize:"20px", paddingTop:"20px"}}>Hi, {username}</p>
     <img id="accimg" src={localStorage.getItem('topimg')} />
     <p>Account</p>

    <div className="account-display">
    <a className="checking">Checking...</a> 
    
    <a style={{position:"absolute",right:"80px"}}>GHC</a>
    
    <p style={{paddingTop:"10px",position:"absolute",right:"60px"}}>Available</p>
    <br/>
    <br/>
    </div>

    <p>User ID</p>

<div className="account-display">
<a>0000000...</a> 

</div>
<br/>
</div>
    </div>



<center>
<div className="div-opp">
    <br/>
<p>Operation</p>
  <div className="opp-row">
    <div className="operations">
        <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#5191cd",boxShadow:"2px 2px 10px 1px #292828"}}>
<center>
    <a><i className="fa fa-list-alt" style={{color:"white",paddingTop:"20px"}}></i></a>
    <p style={{fontSize:"12px"}}>Account Balance</p>
</center>

</div>
</center>
    </div>
    <div className="operations">
    <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#2ed1ce",boxShadow:"2px 2px 10px 1px #292828"}}>
<center>
    <a><i className="fa fa-flag-o" style={{color:"white",paddingTop:"20px"}}></i></a>
    <p style={{fontSize:"12px"}}>Mini Statement</p>

</center>

</div>
</center>
    </div>
    <div className="operations">
    <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#f26e36",boxShadow:"2px 2px 10px 1px #292828"}}>
<center>
    <a><i className="fa fa-vcard-o" style={{color:"white",paddingTop:"20px"}}></i></a>
    
    <p style={{fontSize:"12px"}}>Loan Application</p>
</center>

</div>
</center>
    </div>
  </div>



  </div> 
  </center>

{/* 
  <div className="opp-row">
    <div className="operations">
        <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#92bbe2",boxShadow:"2px 2px 10px 1px #a3a3a3"}}>
<center>
    <a><i className="fa fa-vcard-o" style={{color:"white",paddingTop:"20px"}}></i></a>
    <p style={{fontSize:"12px"}}>Loan Application</p>
</center>

</div>
</center>
    </div>
    <div className="operations">
    <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#73e2e1",boxShadow:"2px 2px 10px 1px #a3a3a3"}}>
<center>
    <a><i className="fa fa-exclamation-circle" style={{color:"white",paddingTop:"20px"}}></i></a>
    <p style={{fontSize:"12px"}}>Loan Status</p>

</center>

</div>
</center>
    </div>
    <div className="operations">
    <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#f29d78",boxShadow:"2px 2px 10px 1px #a3a3a3"}}>
<center>
    <a><i className="fa fa-briefcase" style={{color:"white",paddingTop:"20px"}}></i></a>
    <p style={{fontSize:"12px"}}>Loan Balance</p>

</center>
</div>
</center>
    </div>
  </div>
   */}

  <br/>
  <br/>
  <br/>
  <br/>

  </div>
    </>

)
};

export default Home;