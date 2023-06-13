import classes from "./Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return <>
        <div className={classes.Footer}>
            
                <div>Logo</div>
                <div>Address&Contact</div>
                <div className={classes.SocialIcons}>
                    <FaFacebookSquare/>
                    <FaInstagram/>
                    <FaLinkedin/>
                    <FaTwitterSquare/>
                    
                </div>
            
            
        </div>
       
    </>
}

export default Footer;