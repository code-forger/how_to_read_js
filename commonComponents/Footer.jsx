import React from 'react';

const Footer = ({pageTitle}) => {
    return (
        <div id='footer'>
            {pageTitle}
            <div className='footer-controls'>
                <a href='/prev'>&lt; Previous Slide</a>
                &nbsp;&nbsp;&nbsp;
                <a href='/next'>Next Slide &gt;</a>
            </div>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;