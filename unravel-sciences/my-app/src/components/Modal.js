import { useState } from "react";
import classes from "./Modal.module.css"
import image1 from "../Assets/icons8-computer.gif"
import image2 from "../Assets/icons8-gamepad.png"
import image6 from "../Assets/icons8-butterfly.gif"
import image4 from "../Assets/icons8-sine.gif"
import image5 from "../Assets/icons8-chemistry.gif"
import image3 from "../Assets/icons8-robot.gif"
import {AnimatePresence, motion} from "framer-motion"


const cardData = [
    {
        title: "Computer's Club",
        data: "Students can develop / further their knowledge of computer science by participating in various competitions and events. Here, they are encouraged to undertake projects, such as coding a game to hone their coding and problem-solving skills.",
        img: image1,
    },
    {
        title: "Gaming Club",
        data: "ldsjfajkldf alkdf jalkdf alkdjf alkjf ",
        img: image2,
    },
    {
        title: "Biology Club",
        data: "This is the club for a student who is aspiring to make a career in the field of biology or any other related field. For instance, someone aspiring to pursue medicine, paramedics, genetics, molecular biology, biotechnology, bioinformatics, or any associated domain should essentially look at being part of this exciting community. This shall certainly help the student to explore and dwell deeper to analyse his interests and consequently zero in on his career goals.",
        img: image6,
    },
    {
        title: "Robotics Club",
        data: "Students get an opportunity to learn the design and construction of robots. They also get to know the computer system/programming for their control. The projects that the students undertake give them ample opportunities to sharpen their creative and innovative skills.",
        img: image3,
    },
    {
        title: "Chemistry Club",
        data: "The motto of this club is to engage students in various activities related to chemistry. The students get an opportunity to participate in various events, and competitions and are encouraged to do projects which further help them to evaluate their area of interest and freeze their career goals.",
        img: image5,
    },
    {
        title: "Physics Club",
        data: "ldsjfajkldf alkdf jalkdf alkdjf alkjf ",
        img: image4,
    },
]


const Modal = (props) => {

    

    const modalStateHandler = () => {

        props.mainModalStateHandler(false)
    }

    return <>
        <div onClick={modalStateHandler} className={classes.Modal}>

        </div>
        <motion.div initial={{x: 100}} animate={{x: 0}} exit={{x: 100}} className={classes.cardDetails}>
            <h3>{cardData[props.cardId].title}</h3>
            <div className={classes.ModalContent}>
                <p>{cardData[props.cardId].data}</p>
                <div className={classes.JoinSection}>
                    <img width="80px" src={cardData[props.cardId].img}/>
                    <div className={classes.JoinClubBtn}>Join Club</div>
                </div>
                
            </div>
            
            
        </motion.div>
        <AnimatePresence>
        <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} className={classes.cardDetails_Mobile}>
            <h3>{cardData[props.cardId].title}</h3>
            <div className={classes.ModalContent_Mobile}>
                <div className={classes.CardLogo_Mobile}>
                    <img  width="100%" height="100%" src={cardData[props.cardId].img}/>
                </div>
                <p>{cardData[props.cardId].data}</p>
                <div className={classes.JoinSection_Mobile}>
                    <div className={classes.JoinClubBtn_Mobile}>Join Club</div>
                </div>
                
            </div>
            
            
        </motion.div>
        </AnimatePresence>
    </>

}

export default Modal;