import React from 'react';

const Footer = (props) => {

    const { darkMode } = props
    const onyx = "#353935"

    const styles = {
        color: darkMode ? "white" : onyx
    }

    return (
        <footer className='footer' style={styles}>
            <p>Disclaimer - This website is practice for React.js</p>
            <p><strong>I have never visited these places</strong></p>
        </footer>
    )
}

export default Footer;