import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Ingressar</h1>
                <div>
                    <input 
                        autoFocus
                        placeholder="Nome" 
                        className="joinInput" 
                        type="text" 
                        onChange={(event) => setName(event.target.value)}
                        onKeyPress={event => {
                            if(event.key === 'Enter'){
                                document.getElementById("txtRoom").focus();
                            }
                        }}
                    />
                </div>
                <div>
                    <input 
                        id="txtRoom"
                        placeholder="Sala" 
                        className="joinInput mt-20" 
                        type="text" 
                        onChange={(event) => setRoom(event.target.value)} 
                        onKeyPress={event => {
                            if(event.key === 'Enter'){
                                document.getElementById("btnSignIn").click();
                            }
                        }}
                    />
                </div>
                
                <Link 
                    onClick={ event => (!name || !room) ? event.preventDefault() : null } 
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button id="btnSignIn" className="button mt-20" type="submit">Entrar</button>
                </Link>
            </div>
        </div>
    );
}

export default Join;