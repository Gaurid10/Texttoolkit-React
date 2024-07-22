import React from 'react'

function Footer(props) {
    let myStyle = {
        color: props.mode==='dark' ? 'black' : 'white',
        backgroundColor: props.mode==='dark' ? 'white': 'rgb(4, 39, 67)',
        bottom: '0px',
        textAlign:'center'
        
    }
    return (
            <div className="footer container my-5">
                <footer className="text-center" style={myStyle}>
                <div className="text-center p-1" >
                Copyright &copy; Texttoolkit.com | All rights reserved.
                </div>
                </footer>
            </div>
    )
}


export default Footer
