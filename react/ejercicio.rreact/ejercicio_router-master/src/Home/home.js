import { items } from "../Data/items";
import { Link } from "react-router-dom";
import Menu from "./menu";
function home() {
    return (
    <div>
        <h1>HOME</h1>
        <br></br>
        <Menu/>
        <br></br>
        <br></br>
        {items.map((item) => (
            <Link to={"/Contact/${item.id}"}><div>{item.nombre}</div></Link>
        ))};
    </div>
    );
}

export default home;