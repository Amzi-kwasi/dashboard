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

export default function Dev(){
    return(
        <>

<div className="devtab" id="dev" style={{display:"none"}}>
    <p>Dev tab. All right reserved</p>
    <input />
</div>

        </>
    )
}