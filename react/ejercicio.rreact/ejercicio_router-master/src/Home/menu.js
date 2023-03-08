import { Link } from "react-router-dom";

function Menu() {
    return <div>
        <h2>MENU</h2>
        <br></br>
        <Link to={"/About"}>ABOUT</Link>
        <br></br>
        <Link to={"/Contact"}>CONTACT</Link>
        <br></br>
        <Link to={"/"}>HOME</Link>
    </div>;
}

export default Menu;