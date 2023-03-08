import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import ContactHijo from "./contactHijo";

function Contact() {
    const params = useParams();
    return (<div>
        <h1>CONTACTO</h1>
    <Outlet></Outlet>
</div>);
}

export default Contact;