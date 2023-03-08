import { Link } from "react-router-dom";
function About() {
    return <div>
    <h1>ABOUT</h1>
    <br></br>
    <Link to={"/"}>HOME</Link>
    <br></br>
    <Link to={"/Contact"}>CONTACT</Link>
</div>;
}

export default About;