import React from 'react';
import { useState } from "react";
import "../css/modal.css";

function Modal() {
    return (
        <div className="modal">
            <div className="contenedor">
                <header>¡Registrate</header>
                <label for="btn-modal">x</label>
                <div className="contenido">
                    name
                </div>
            </div>
        </div>
    );
}

export default Modal;