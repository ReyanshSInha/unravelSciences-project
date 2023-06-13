import classes from "./Navmenu.module.css"
import {motion} from "framer-motion"

const Navmenu = (props) => {
    return <motion.div initial={{y: 300, opacity: 0}} animate={ props.navMenuState ? {y: 0, opacity: 1} : {}} className={classes.Navmenu}>
        <div initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1, transistion: { delay: 2, duration: 2000 }}} className={classes.Events}>Events</div>
        <div className={classes.Team}>Team</div>
        <div className={classes.AboutUs}>About Us</div>
        <div className={classes.Member}>Join Us</div>
    </motion.div>
}

export default Navmenu;