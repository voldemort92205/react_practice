import React from "react";

import Main from "./Main"
import Navbar from "./Navbar"

export default function App () {
    return (
        <div className="container">
            <Navbar darkMode={true}/>
            <Main darkMode={true} />
        </div>
    )
}

