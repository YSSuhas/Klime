import React from 'react';
import './Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/yssuhas/">
                <LinkedInIcon fontSize="small" />
            </a>
            <a><p>By YSS</p></a>
            <a href="https://github.com/YSSuhas">
                <GitHubIcon fontSize="small" />
            </a>
        </div>
    )
}

export default Footer;