import React from 'react';
import { Logout } from "./auth/Logout"

export const Home = (props) => {

    return (
        <>
            <div className="Home-Buttons">
                <button className="List-Button" onClick={() => props.history.push("/Home/ViewList")}>
                    View List
                </button>
            
                <button className="Log-Button" onClick={() => props.history.push("/Home/NewLog")}>
                    New Log
                </button>
            
                <button className="Logout-Button" onClick={Logout}>
                    Logout
                </button>
            </div>
        </>
    )
}