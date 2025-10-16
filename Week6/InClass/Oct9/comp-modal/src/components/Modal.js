import React from 'react'
import ReactDOM from 'react-dom'
import {useEffect} from 'react'

const Modal = (props) => {
    const {onClose} = props

    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return ()=>{
            document.body.classList.remove('overflow-hidden')
        }
    },[])
    
    return ReactDOM.createPortal(
    <>
    <div 
    onClick = {onClose} 
    className = 'fixed inset-0 bg-gray-300 opacity-50'></div>
    <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
            <div className = 'flex flex-row justify-between'>

            </div>
        </div>
    </div>
    </>,
    document.getElementById('portal')
    ) 
}

export default Modal