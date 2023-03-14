import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    return (
        <div className="social-container">
            <a href="https://github.com/Alexmarkq"
                className="facebook social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/alexis-marquez-de-eugenio/?locale=en_US"
                className="twitter social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/alexmarkq/?hl=en"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
}