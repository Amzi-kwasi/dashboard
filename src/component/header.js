import { useState } from "react";


export default function Head(){
    
    
const [header,setHeader]=useState("CR UNION")

    return(
        <div className="header">
        <center>
        <a>{header}</a>
        </center>
        {/* <a style={{position:"fixed",right:"30px"}}><i className="fa fa-search"></i></a> */}
        </div>
    )
}