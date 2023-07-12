import { Mail } from "@mui/icons-material";
import React from "react";
import NavBar from "./navbar";

function Contact(){
    return(
        <>
        <NavBar/>
        <div>
            <h1 style={{color:"white",margin:"70px"}}><Mail/>Mail</h1>
        </div>
        </>
    );
}

export default Contact;