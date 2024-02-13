import Head from "../component/header";
import "../bootstrap.css";
import "../style.css";
import { Link } from "react-router-dom";
import Dev from "./developer";


function Overview(){
    var overview=document.getElementById("profile-overview");
    var edit=document.getElementById("profile-edit")
    var settings=document.getElementById("profile-settings")
    var passd=document.getElementById("profile-change-password")
    
    overview.classList.remove("hide");
    edit.classList.add("hide");
    settings.classList.add("hide")
    passd.classList.add("hide");
}


function Edit(){
  // var fullname=document.getElementById("fullname");
    var overview=document.getElementById("profile-overview");
    var edit=document.getElementById("profile-edit")
    var settings=document.getElementById("profile-settings")
    var passd=document.getElementById("profile-change-password")
    

    overview.classList.add("hide");
    edit.classList.remove("hide");
    settings.classList.add("hide")
    passd.classList.add("hide");
}

function Settings(){
    var overview=document.getElementById("profile-overview");
    var edit=document.getElementById("profile-edit")
    var settings=document.getElementById("profile-settings")
    var passd=document.getElementById("profile-change-password")
    
    overview.classList.add("hide");
    edit.classList.add("hide");
    settings.classList.remove("hide")
    passd.classList.add("hide");
}

function Password(){
    var overview=document.getElementById("profile-overview");
    var edit=document.getElementById("profile-edit")
    var settings=document.getElementById("profile-settings")
    var passd=document.getElementById("profile-change-password")
    
    overview.classList.add("hide");
    edit.classList.add("hide");
    settings.classList.add("hide")
    passd.classList.remove("hide");
}


document.addEventListener("load", (e)=>{
if(e.crtlKey && e.key === "s"){
  SaveChanges();
}
})

function SaveChanges(){
  var editfullname=document.getElementById("fullname").value;
  var editabout=document.getElementById("about").value;
  var editcompany=document.getElementById("company").value;
  var editjob=document.getElementById("job").value;
  var editcountry=document.getElementById("country").value;
  var editaddress=document.getElementById("address").value;
  var editphone=document.getElementById("phone").value;
  var editemail=document.getElementById("email").value;
   
  
  
  localStorage.setItem("fulln" , editfullname)
  localStorage.setItem("about" , editabout)
  localStorage.setItem("company" , editcompany)
  localStorage.setItem("job" , editjob)
  localStorage.setItem("country" , editcountry)
  localStorage.setItem("address" , editaddress)
  localStorage.setItem("phone" , editphone)
  localStorage.setItem("email" , editemail)


  window.location.reload();
}


function ChangeImage(){
  var inputimg=document.getElementById("image-input");
  var datafile=inputimg.files[0];
  var filereader= new FileReader();
  var topimg=document.getElementById("topimg")
   filereader.readAsDataURL(datafile);


  filereader.addEventListener("load", () => {
    var url=filereader.result;
    topimg.src= url;
    localStorage.setItem("topimg", url);

  })
}

function Profile(){
  setTimeout(()=>{
    document.getElementById("fullname").value=localStorage.getItem("fulln");
    document.getElementById("about").value=localStorage.getItem("about");
    document.getElementById("company").value=localStorage.getItem("company");
    document.getElementById("job").value=localStorage.getItem("job");
    document.getElementById("country").value=localStorage.getItem("country");
    document.getElementById("address").value=localStorage.getItem("address");
    document.getElementById("phone").value=localStorage.getItem("phone");
    document.getElementById("email").value=localStorage.getItem("email");


    
    document.getElementById("topfullname").innerHTML=localStorage.getItem("fulln");
    
    document.getElementById("topjob").innerHTML=localStorage.getItem("job")


    document.getElementById("overviewfullname").innerHTML=localStorage.getItem("fulln")
    document.getElementById("overviewabout").innerHTML=localStorage.getItem("about")
    document.getElementById("overviewcompany").innerHTML=localStorage.getItem("company")
    document.getElementById("overviewjob").innerHTML=localStorage.getItem("job")
    document.getElementById("overviewcountry").innerHTML=localStorage.getItem("country")
    document.getElementById("overviewaddress").innerHTML=localStorage.getItem("address")
    document.getElementById("overviewphone").innerHTML=localStorage.getItem("phone")
    document.getElementById("overviewemail").innerHTML=localStorage.getItem("email")



var localsurl=localStorage.getItem("topimg");
document.getElementById("topimg").src=localsurl;
  },1000)
 
}


export default function UserSet() {
    return (
        <div onLoad={Profile()}>
       <Head /> 

<br/>
<br/>

  <main id="main" className="main">


<section className="section profile">
  <div className="row">
    <div className="col-xl-4">

      <div className="card">
        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img  alt="Profile Image" id="topimg" className="rounded-circle" />
          <h2 id="topfullname"></h2>
          <h3 id="topjob"></h3>
         
        </div>
      </div>

    </div>

    <div className="col-xl-8">

      <div className="card">
        <div className="card-body pt-3">
          
          <ul className="nav nav-tabs nav-tabs-bordered">

            <li className="nav-item">
              <button className="nav-link active" onClick={Overview}>Overview</button>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={Edit}>Edit Profile</button>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={Settings}>Settings</button>
            </li>

            <li className="nav-item">
              <button className="nav-link" onClick={Password}>Change Password</button>
            </li>

          </ul>


          <div className="tab-content pt-2">




            <div className="profile-overview" id="profile-overview">
              <h5 className="card-title">About</h5>
              <p className="small fst-italic" id="overviewabout"></p>

              <h5 className="card-title">Profile Details</h5>

              <div className="row">
                <div className="col-lg-3 col-md-4 label ">Full Name</div>
                <div className="col-lg-9 col-md-8" id="overviewfullname"></div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-4 label">Company</div>
                <div className="col-lg-9 col-md-8" id="overviewcompany"></div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-4 label">Job</div>
                <div className="col-lg-9 col-md-8" id="overviewjob"></div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-4 label">Country</div>
                <div className="col-lg-9 col-md-8" id="overviewcountry"></div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-4 label">Address</div>
                <div className="col-lg-9 col-md-8" id="overviewaddress"></div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-4 label">Phone</div>
                <div className="col-lg-9 col-md-8" id="overviewphone"></div>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-4 label">Email</div>
                <div className="col-lg-9 col-md-8" id="overviewemail"></div>
              </div>

            </div>





            <div className="hide profile-edit pt-3" id="profile-edit">

              
              <form>
                <div className="row mb-3">
                  <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                  <div className="col-md-8 col-lg-9">
                    <input type="file" onChange={ChangeImage} id="image-input" accept="image"/>
                    <div className="pt-2">
                      <label for="image-input"><a className="btn btn-primary btn-sm" title="Upload new profile image"><i className="fa fa-upload"></i></a></label>
                      <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image" onClick={()=>{localStorage.removeItem("topimg"); window.location.reload()}}><i className="fa fa-trash-o"></i></a>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="fullName" type="text" className="form-control" id="fullname" onKeyUp={()=>{document.getElementById("overviewfullname").innerHTML=document.getElementById("fullname").value}}/>
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                  <div className="col-md-8 col-lg-9">
                    <textarea name="about" className="form-control" id="about" style={{height: "100px"}}>Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea>
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="company" className="col-md-4 col-lg-3 col-form-label">Company</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="company" type="text" className="form-control" id="company" />
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="Job" className="col-md-4 col-lg-3 col-form-label">Job</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="job" type="text" className="form-control" id="job" />
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="country" type="text" className="form-control" id="country" />
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="address" type="text" className="form-control" id="address"/>
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="phone" type="number" className="form-control" id="phone" />
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="email" type="email" className="form-control" id="email" />
                  </div>
                </div>

              

                <div className="text-center">
                  <button className="btn btn-primary" onClick={SaveChanges}>Save Changes</button>
                </div>
              </form>

            </div>




            <div className="hide pt-3" id="profile-settings">

              
              <form>

                <div className="row mb-3">
                  <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                  <div className="col-md-8 col-lg-9">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="changesMade" checked />
                      <label className="form-check-label" for="changesMade">
                        Changes made to your account
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="newProducts" checked />
                      <label className="form-check-label" for="newProducts">
                        Information on new products and services
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="proOffers" />
                      <label className="form-check-label" for="proOffers">
                        Marketing and promo offers
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="securityNotify" checked disabled />
                      <label className="form-check-label" for="securityNotify">
                        Security alerts
                      </label>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </form>

            </div>




            <div className="hide pt-3" id="profile-change-password">
             
              <form>

                <div className="row mb-3">
                  <label for="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="password" type="password" className="form-control" id="currentPassword" />
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="newpassword" type="password" className="form-control" id="newPassword" />
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                  <div className="col-md-8 col-lg-9">
                    <input name="renewpassword" type="password" className="form-control" id="renewPassword" />
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Change Password</button>
                </div>
              </form>

            </div>





          </div>

        </div>
      </div>

    </div>
  </div>
</section>

</main>

<Link to="/home">
<button id="userback">Home</button>
</Link>

<Dev />
        </div>
    )
}