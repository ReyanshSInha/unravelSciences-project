import { useState, useEffect } from "react";
import ClubCard from "./ClubCard";
import classes from "./ClubSection.module.css"
import { BsFillCaretRightFill } from "react-icons/bs";
// import nextImage from "../Assets/icons8-next.gif"
import {motion, AnimatePresence} from "framer-motion"
// import clickImage from "../Assets/clickHere.gif"

// const QuestionData = [
//     {
//         ques: "Who are we?",
//         answer: "lorem adlsjkf a asdf ads f sdf asdf ad as d dsfa sfsd asfd asdf  asdf  sdf sadf asd fa dsfa  fa dsfa df"

//     },
//     {
//         ques: "What do we do?",
//         answer: "lorem adlsjkf a asdf ads f sdf asdf ad as d dsfa sfasdf asdf asd fasd fa sdfsd asfd asdf  asdf  sdf sadf asd fa dsfa  fa dsfa df"
//     },
//     {
//         ques: "WHy choose us?",
//         answer: "lorem adlsjkf a asdf ads f sdf as sd asfd asdf  asdf  sdf sadf asd fa dsfa  fa dsfa df"
//     }
// ]

const QuestionData = [
    {
        ques: "How Can Clubs Help You?",
        answer: "The different contests, events, workshops and seminars allow participants to expand their knowledge horizons and sharpen their skills. "

    },
    {
        ques: "Why Should You Join Clubs?",
        answer: "By joining various clubs, students get an opportunity to work with like-minded communities and gain from each other's unique experiences."
    },
    {
        ques: "What Can You Learn In A Group",
        answer: "In a group, you can learn from diverse perspectives, cultures, and ideas, acquiring valuable lessons, knowledge, and essential social skills."
    }
]

const titleVariants = {
    hidden: {
        opacity: 0,
        // x: "-200px",
        scale: 0
    },

    visible: {
        opacity: 1,
        // x: "0",
        scale: 1,

        transition: {
            duration: 0.5,
            delay: 0.2
        }
    },

    exit: {
        opacity: 0,
        x: -600,
        transition: {
            duration: 0.5,
            // delay: 1

        }
    }


}

const textVariants = {
    hidden: {
        opacity: 0,
        // x: "-200px",
        x: 200
    },

    visible: {
        opacity: 1,
        // x: "0",
        x: 0,

        transition: {
            duration: 0.5,
            delay: 0.9
        }
    },

    exit: {
        opacity: 0,
        x: -400,
        transition: {
            duration: 0.3,
        

        }
    }
}

const ClubSection = (props) => {

    const [card, setCard] = useState(0)
    const [index, setIndex] = useState(0)
    const [paraKey, setParaKey] = useState(100)

    const nextCardClickHandler = () => {
        console.log("this is current card number: ", card)
        if(card == 5){
            setCard(0);
        }else{
            setCard(prevState => prevState + 1)
        }
    }

    const nextQuestionHandler = () => {
        console.log(index)
        
        if(paraKey === 2){
            setParaKey(0);
        }else{
            setParaKey(prevState => prevState + 1)
        }

        if (index === 2) {
            setIndex(0)
        } else {
            setIndex((prevIndex) => {
                return prevIndex + 1
            })
        }
    }

    useEffect(() => {
        const indexHandler = setInterval(() => {
            nextQuestionHandler()
        }, 2800)

        return () => clearInterval(indexHandler)
    }, [index])

    const [animationOneState, setAnimationOneState] = useState(false)
    const [animationTwoState, setAnimationTwoState] = useState(false)
    const [animationThreeState, setAnimationThreeState] = useState(false)
    // mobiile
    const [animationStateOneMobile, setAnimationStateOneMobile] = useState(false)
    const [animationStateTwoMobile, setAnimationStateTwoMobile] = useState(false)
    const [animationStateThreeMobile, setAnimationStateThreeMobile] = useState(false)

    const animationOneHandler = () => {
        setAnimationOneState(prevState => !prevState)
    }

    const animationTwoHandler = () => {
        setAnimationTwoState(prevState => !prevState)
    }

    const animationThreeHandler = () => {
        setAnimationThreeState(prevState => !prevState)
    }

    // Mobile 
    const animationOneMobileHandler = () => {
        setAnimationStateOneMobile(prevState => !prevState)
    }

    const animationTwoMobileHandler = () => {
        setAnimationStateTwoMobile(prevState => !prevState)
    }

    const animationThreeMobileHandler = () => {
        setAnimationStateThreeMobile(prevState => !prevState)
    }

    const modalOpenerHandler = () => {
        props.cardIdCollector(card)
        props.mainModalStateHandler(true)
    }

    const mobileCardOneClickHandler = () => {
        props.cardIdCollector(0)
    }

    const mobileCardTwoClickHandler = () => {
        props.cardIdCollector(1);
    }

    const mobileCardThreeClickHandler = () => {
        props.cardIdCollector(2);
    }
    const mobileCardFourClickHandler = () => {
        props.cardIdCollector(3);
    }
    const mobileCardFiveClickHandler = () => {
        props.cardIdCollector(4);
    }
    const mobileCardSixClickHandler = () => {
        props.cardIdCollector(5);
    }




    return <>
    
    <div className={classes.ClubSection}>
        
        <div className={classes.ContentSection}>
            <AnimatePresence>
                <motion.h1 key={index} variants={titleVariants} initial="hidden" animate="visible" exit="exit" className={classes.Question}>{QuestionData[index].ques}</motion.h1>
                <motion.p key={paraKey} variants={textVariants} initial="hidden" animate="visible" exit="exit" className={classes.Answer}>{QuestionData[index].answer}</motion.p>
            </AnimatePresence>
        </div>
        <div className={classes.ClubCards}>
            <ClubCard modalOpener = {modalOpenerHandler} card={card}/>  
            <div onClick={nextCardClickHandler} className={classes.NextCard}>
                <BsFillCaretRightFill color="wheat" size="80px"/>
                {/* <img className={classes.nextImgIco} color="rgba(33, 85, 205, 0.9)" src={nextImage}/> */}
            </div>      
        </div> 
    </div>
    {/* //Club Section mobile */}
    <div className={classes.ClubSection_Mobile}>
        <span className={classes.ClubsHeading_Mobile}>Clubs</span>
        <div className={classes.ClubContent_Mobile}>
            <div onClick={animationOneHandler} className={classes.QuesCardOne}>
                <motion.h4 initial={{y: 0}} animate={animationOneState ? {y: -80} : {y: 0}} >
                What?
                </motion.h4>
                
                <motion.p initial={{x: -200, opacity: 0}} animate={animationOneState ? {x: 0,y:-50, opacity: 1} : {}}>
                In a group, you can learn from diverse perspectives, cultures, and ideas, acquiring valuable lessons, knowledge, and essential social skills.
                </motion.p>
            </div>

            <div onClick={animationTwoHandler} className={classes.QuesCardTwo}>
                <motion.h4 initial={{y: 0}} animate={animationTwoState ? {y: -80} : {y: 0}} >Why?</motion.h4>
                
                <motion.p initial={{x: -200, opacity: 0}} animate={animationTwoState ? {x: 0,y:-50, opacity: 1} : {}}>Joining clubs lets students collaborate with like-minded communities, benefiting from their unique experiences. </motion.p>
                
            </div>
            <div onClick={animationThreeHandler} className={classes.QuesCardThree}>
                <motion.h4 initial={{y: 0}} animate={animationThreeState ? {y: -80} : {y: 0}} >How?</motion.h4>
                
                <motion.p initial={{x: -200, opacity: 0}} animate={animationThreeState ? {x: 0,y:-50, opacity: 1} : {}}>
                    Contests, events, workshops, and seminars broaden knowledge and sharpen skills.
                </motion.p>
                
            </div>
        </div>
        <div className={classes.ClubContent_MobileTwo}>
            <div onClick={animationOneMobileHandler} className={classes.ClubContent_One}>
                <motion.h4 initial={{x: 0}} animate={animationStateOneMobile ? {rotate: -90, x: -100} : {}} >What?</motion.h4>
                <motion.p initial={{x: 200, scale: 0}} animate={ animationStateOneMobile ? {x: 0, scale: 1} : {}}>Group learning offers diverse perspectives, cultures, and valuable ideas. </motion.p>
            </div>
            <div onClick={animationTwoMobileHandler} className={classes.ClubContent_Two}>
                <motion.h4 initial={{x: 0}} animate={animationStateTwoMobile ? {rotate: -90, x: -100} : {}}>Why?</motion.h4>
                <motion.p initial={{x: 200, scale: 0}} animate={ animationStateTwoMobile ? {x: 0, scale: 1} : {}}>Club participation fosters collaboration.</motion.p>
            </div>
            <div onClick={animationThreeMobileHandler} className={classes.ClubContent_Three}>
                <motion.h4 initial={{x: 0}} animate={animationStateThreeMobile ? {rotate: -90, x: -100} : {}}>How?</motion.h4>
                <motion.p initial={{x: 200, scale: 0}} animate={ animationStateThreeMobile ? {x: 0, scale: 1} : {}}>Contests, events, workshops that enhances knowledge and skills </motion.p>
            </div>
        </div>
        <div className={classes.ClubCards_Mobile}>
            <div onClick={mobileCardOneClickHandler}><ClubCard modalOpener = {modalOpenerHandler} card={0}/></div>
            <div onClick={mobileCardTwoClickHandler}><ClubCard modalOpener = {modalOpenerHandler} card={1}/></div>
            <div onClick={mobileCardThreeClickHandler}><ClubCard modalOpener = {modalOpenerHandler} card={2}/></div>
            <div onClick={mobileCardFourClickHandler}><ClubCard modalOpener = {modalOpenerHandler} card={3}/></div>
            <div onClick={mobileCardFiveClickHandler}><ClubCard modalOpener = {modalOpenerHandler} card={4}/></div>
            <div onClick={mobileCardSixClickHandler}><ClubCard modalOpener = {modalOpenerHandler} card={5}/></div>
            {/* <ClubCard card={card+5}/> */}
        </div>
    </div>
    </>
}

export default ClubSection;