import React from 'react';

const Navbar = (props) => {

    const { darkMode, toggle } = props
    const onyx = "#353935"

    const styles = {    
        "switchStyle": {
            backgroundColor: darkMode ? "white" : onyx
        },
        "switchButtonStyle": 
        darkMode ? {
            backgroundColor: onyx,
            right: 0
        } :
        {
            backgroundColor: "white",
            left: 0
        },
        "lightTextStyle": {
            color: darkMode ? "white" : onyx
        },
        "darkTextStyle": {
            color: darkMode ? onyx : "white"
        }
    }

    return (
        <nav className='navbar'>
            <h1>
                <i className="fas fa-globe-americas"></i>my travel journal.
            </h1>
            <div className='light-dark-switch'>
                <p id="light" className='switch-text' style={styles.lightTextStyle}>
                    Light
                </p>
                <div className="switch" style={styles.switchStyle} onClick={toggle}>
                    <div className='switch-button' style={styles.switchButtonStyle}></div>
                </div>
                <p id="dark" className='switch-text' style={styles.darkTextStyle}>Dark</p>
            </div>
        </nav>
    )
}

export default Navbar