import { Link } from "react-router-dom";

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

            <a>FAQ</a>
            <Link to="/contact">
            <a style={props.contact}>Contact</a>
            </Link>
        </div>
        </>
    )
}