import { Link } from "react-router-dom";



function User(){
    var username=document.getElementById("username").value;
  
    localStorage.setItem("username", username);
  }
  
  
  

  function Form(){
    setTimeout(()=>{
        document.getElementById("username").value= localStorage.getItem("username");
        document.getElementById("usernam").value= localStorage.getItem("username");

    },1000)
  }
export default function SignLog(){
    return(
        <>
        <section class="containerS" onLoad={Form}>
            <div class="formpage login" id="login">
                <Link to="/home">
            <a style={{fontSize:"20px",cursor:"pointer"}}>&times;</a>
            </Link>
                <div class="form-content">
                    <header>Login</header>
                    <form action="#" id="form">
                        <div class="field input-field">
                            <input type="text" placeholder="Username"  id="usernam" class="input" required/>
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Password" class="password" required/>
                            <i class='bx bx-hide eye-icon'></i>
                        </div>

                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>

                        <div class="field button-field">
                            <Link to="/home">
                            <button>Login</button>
                            </Link>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Don't have an account? <a href="#" class="link signup-link" onClick={()=>{document.getElementById("signup").style.display="block"}}>Signup</a></span>
                    </div>
                </div>

                <div class="line"></div>

               

                <div class="media-options">
                    <a href="#" class="field google">
                        <img src={require("../img/google.png")} alt="" class="google-img"/>
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>


            <div id="signup" class="formpage signup" style={{display:"none"}}>
            <Link to="/home">
            <a style={{fontSize:"20px",cursor:"pointer"}}>&times;</a>
            </Link>
                <div class="form-content">
                    <header>Signup</header>
                    <form action="#" id="form">
                        <div class="field input-field">
                            <input type="text" placeholder="Username" onKeyUp={User} id="username" class="input" required/>
                        </div>

                        <div class="field input-field">
                            <input type="text" placeholder="Fullname" class="password" />
                        </div>

                        <div class="field input-field">
                            <input type="password" placeholder="Create password" class="password" />
                        </div>

                        <div class="field button-field">
                            <Link to="/home">
                            <button>Signup</button>
                            </Link>
                        </div>
                    </form>

                    <div class="form-link">
                        <span>Already have an account? <a href="#" class="link login-link" onClick={()=>{document.getElementById("signup").style.display="none"}}>Login</a></span>
                    </div>
                </div>

                <div class="line"></div>

                
                <div class="media-options">
                    <a href="#" class="field google">
                        <img src={require("../img/google.png")} alt="" class="google-img" />
                        <span>Login with Google</span>
                    </a>
                </div>

            </div>
        </section>

        </>
    )
}