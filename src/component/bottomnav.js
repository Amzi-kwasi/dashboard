import { Link } from "react-router-dom";
import React from "react"

export default function BottomNav(props){
    return(
        <>
        <div className="bottom-nav">
            <Link to="/home">
            <a style={props.home}>Dashboard</a>
            </Link>

            <Link to="*">
            <a>Forms</a>
            </Link>
            

            <Link to="/faq">
            <a style={props.faq}>FAQ</a>
            </Link>
            
            <Link to="/contact">
            <a style={props.contact}>Contact</a>
            </Link>
        </div>

        <div className="top-nav">
        <Link to="/home">
            <a style={props.home}>Dashboard</a>
            </Link>

            <Link to="*">
            <a>Forms</a>
            </Link>
            

            <Link to="/faq">
            <a style={props.faq}>FAQ</a>
            </Link>
            
            <Link to="/contact">
            <a style={props.contact}>Contact</a>
            </Link>
        </div>
        <br className="br"/>
        <br className="br"/>
        </>
    )
}