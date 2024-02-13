document.addEventListener("keydown", (e)=>{
    var dev=document.getElementById("dev");
    if(e.altKey && e.ctrlKey && e.key==="d"){
       var code= prompt("Code");
 if(code == "009900"){
    dev.style.display="block"
 }
    }
    if(e.key === "Escape"){
        dev.style.display="none"
    }
})


function Runtask(){
    var devinput=document.getElementById("devinput");
 if(devinput.value == "register again"){
    localStorage.removeItem("first", "1");
    alert("Register again")
 }

 if(devinput.value == "sign in"){
    window.location.assign("/signin")
 }

}
export default function Dev(){
    return(
        <>

<div className="devtab" id="dev" style={{display:"none"}}>
    <p>Dev tab. All right reserved</p>
    <input onKeyDown={Runtask} id="devinput" />
</div>

        </>
    )
}