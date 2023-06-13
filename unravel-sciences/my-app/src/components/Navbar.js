import { useState } from "react";
import classes from "./Navbar.module.css"
import { FiAlignJustify } from "react-icons/fi";
import { FaCompressAlt } from "react-icons/fa";



const Navbar = (props) => {

    const [hamburgerState, setHamburgerState] = useState(true)

    const hamburgerClickHandler = () => {
        setHamburgerState(prevState => !prevState)
        props.hamburgerDataCollector(hamburgerState)
    }

    return (
        <>
        <div className={classes.Navbar}>
            <div className={classes.Logo}>Logo</div>
            <div className={classes.NavItems}>
                <div className={classes.NavItem_Clubs}>Clubs</div>
                <div className={classes.NavItem_Events}>Events</div>
                <div className={classes.NavItem_AboutUs}>About Us</div>
                <div className={classes.NavItem_Member}>Become A Member</div>
            </div>
            <div onClick={hamburgerClickHandler} className={classes.Hamburger_Icon}>
                {hamburgerState ? <FiAlignJustify color="black" size="50px" /> : <FaCompressAlt/>}
            </div>
        </div>
        
        <div className={classes.HamburgerMenu}>
            <div className={classes.Hamburger_Club}>Clubs</div>
            <div className={classes.Hamburger_Events}>Events</div>
            <div className={classes.Hamburger_AboutUs}>About Us</div>
            <div className={classes.Member}>Become A Member</div>
        </div>
        </>
    )
}

export default Navbar;