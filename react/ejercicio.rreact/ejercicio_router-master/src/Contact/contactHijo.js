import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getContact } from "../Data/items";

function ContactHijo() {
    const params = useParams();
    const contact = useMemo(()=>getContact(params.contactid),(params.contactid));
    return (<div>
        <div>{params.contactid}</div>
        <Outlet></Outlet>
</div>);
}

export default ContactHijo;