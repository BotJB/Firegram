import React,{useState} from 'react'

const Modal = ({selected,setSelected}) => {
    const hideImage=(e)=>{
        if(e.target.classList.contains("backdrop")){
setSelected(null)
        }
        
    }
    
    return (
        <div className="backdrop" onClick={hideImage}>
            <img src={selected} alt="This is the enlarged image" />
        </div>
    )
}

export default Modal
