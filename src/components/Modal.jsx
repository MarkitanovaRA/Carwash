import React, { useState } from "react";
import './modal.css'


const Modal=(props)=>
{ 
    
    
    return (
        <div className={props.active ? 'modal active' : 'modal'} onClick={()=> props.setActive(false)}>
            <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e=>e.stopPropagation()}>
                <fieldset className='boxColor'>
                    <legend className="legendParam">{props.id}title</legend>
                   <table>
                    <tr>description</tr>
                    <tr>address</tr>
                    
                
                   </table>
                </fieldset>
                

                {props.children}
            </div>
        </div>
    );
};

export default Modal;