import React from "react";
import "./style.css"

function Header(props) {

    return (
        <header className="row">
            <h1 className="col text-center">{props.children}</h1>
        </header>
    )
}

export default Header;