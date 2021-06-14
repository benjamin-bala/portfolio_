import React from 'react'

export default function Cursor() {
    const cursorStyle = {
        width: '6rem',
        height: '6rem',
        border: '2px solid black',
        position: 'absolute',
        borderRadius: '50%',
        zIndex: '999',
        transform: 'translate(-50%,-50%)',
        transformOrigin: '150% 150%'
    }
    return (
        <div 
        className="cursor"
        onMouseMove={(e) => {
            let cursor = document.querySelector(".cursor")
            cursor.style.left = `${e.pageX}px`
            cursor.style.top = `${e.pageY}px`
        }}
        onMouseDown={()=> {
            let cursor = document.querySelector(".cursor")
            cursor.style.border = "2px solid cornflowerblue"
            cursor.style.background =  "cornflowerblue"
        }}
        onMouseUp={()=> {
            let cursor = document.querySelector(".cursor")
            cursor.style.border = "2px solid #000"
            cursor.style.background =  ""
        }}

        style={cursorStyle}> 
        </div>
    )
}
