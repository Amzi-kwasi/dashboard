import "../style.css"
import Head from "../component/header";
import { Link } from "react-router-dom";
import Button from "../component/button";

function Alrt(){
  alert("Sign In")

}

function Home() {
var username= localStorage.getItem("username");

    return(
    <>
    <Head />

    <Link to="/usersettings">
    <Button />
    </Link>

    <br/>
    <br/>
    <br/>
    
    <Link to="/register">
    <p style={{color:"orange",left:"10px",position:"absolute",top:"50px"}}>Sign Up</p>
    </Link>


    <Link to="/">
        <p style={{color:"green",right:"10px",position:"absolute",top:"50px"}}>Sign In</p>
    </Link>
        
<br/>
<br/>

    <p style={{textAlign:"center",color:"grey"}}>Account</p>

{/* 
    accounnt block */}

    <div className="div">
    <div className="acc-block">
     <a>{username}</a>
     
     <br/>
     <br/>
     <br/>
     <br/>
     <p>userid</p>
     <p>acc type</p>
     <p>amount</p>
    </div>
    </div>
  

  <br/>
  <br/>
  <br/>


  <center>
    <p style={{color:"grey"}}>Operations</p>
  </center>

  <br/>




  <div className="opp-row">
    <div className="operations">
        <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#92bbe2",boxShadow:"2px 2px 10px 1px #a3a3a3"}}>
<center>
    <a><i className="fa fa-list-alt" style={{color:"white",paddingTop:"20px"}}></i></a>
    <p style={{fontSize:"12px"}}>Account Balance</p>
</center>

</div>
</center>
    </div>
    <div className="operations">
    <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#73e2e1",boxShadow:"2px 2px 10px 1px #a3a3a3"}}>
<center>
    <a><i className="fa fa-flag-o" style={{color:"white",paddingTop:"20px"}}></i></a>
    <p style={{fontSize:"12px"}}>Mini Statement</p>

</center>

</div>
</center>
    </div>
    <div className="operations">
    <center>
<div className="opera" onClick={Alrt} style={{color:"white",width:"75px",cursor:"pointer",borderRadius:"8px",height:"90px",background:"#f29d78",boxShadow:"2px 2px 10px 1px #a3a3a3"}}>
<center>
    <a><i className="fa fa-refresh" style={{color:"white",paddingTop:"20px"}}></i></a>
    
    <p style={{fontSize:"12px"}}>Switch Account</p>
</center>

</div>
</center>
    </div>
  </div>

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
  

  <br/>
  <br/>
  <br/>
  <br/>
    </>

)
};

export default Home;