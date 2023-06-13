import classes from "./Hero.module.css"
import AchieveImage from "../Assets/achievement.svg"
import LeadershipImage from "../Assets/leadership.svg"
import CommunicationImage from '../Assets/communicate.svg'
import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"
import { BsFillCaretRightFill } from "react-icons/bs";


const HeroCard = [
    {
        logo: AchieveImage,
        title: "Sharpen Your Skills"
    },
    {
        logo: LeadershipImage,
        title: "Become A Great Leader"
    },
    {
        logo: CommunicationImage,
        title: "Learn To Express Yourself"
    }
]

const HeroCard_Mobile = [
    {
        logo: AchieveImage,
        title: "Sharpen Your Skills"
    },
    {
        logo: LeadershipImage,
        title: "Become A Great Leader"
    },
    {
        logo: CommunicationImage,
        title: "Learn to Express Yourself"
    }
]

const Hero = () => {

    
    const [indexInActiveLeft, setIndexInActiveLeft] = useState(0);
    const [indexActive, setIndexActive] = useState(1)
    const [indexInActiveRight, setIndexInActiveRight] = useState(2);
    const [cardIndexMobile, setCardIndexMobile] = useState(0)

    const nextTitleHandler = () => {

        setIndexInActiveLeft(prevState => prevState + 1)
        

        if(indexInActiveLeft === 2){
            setIndexInActiveLeft(0)
        }

        setIndexActive(prevState => prevState + 1)
        setIndexInActiveRight(prevState => prevState + 1)

        if(indexActive === 2){
            setIndexActive(0)
        }
        if(indexInActiveRight === 2){
            setIndexInActiveRight(0)
        }

       
    }

    useEffect(() => {
        const indexHandler = setInterval(() => {
            nextTitleHandler()
        }, 2000)

        return () => clearInterval(indexHandler)
    }, [indexActive])

    useEffect(() => {
        const indexHandler = setInterval(() => {
            heroCardChangeHandlerMobile()
        }, 2000)

        return () => clearInterval(indexHandler)
    }, [cardIndexMobile])

    const heroCardChangeHandlerMobile = () => {
        if(cardIndexMobile === 2){
            setCardIndexMobile(0);
        }else{
            setCardIndexMobile(prevState => prevState + 1);
        }
        
    }

    return <>

    <div className={classes.HeroSection}>
        <div className={classes.ContentSection}>
            <h1 className={classes.QuestionTitle}>Unravel-Sciences</h1>
            <span className={classes.Typewriter}><Typewriter
                    options={{
                        strings: ['Meet Like Minded People','Discover Your Passion','Become A Member'],
                        autoStart: true,
                        loop: true,
                        typeSpeed: 50, // Adjust the typing speed here (in milliseconds)
                    }}
                /></span>
            <div className={classes.JoinUS}>
                Join Us
            </div>
        </div>
        <div className={classes.EventsSection}>
            <div className={classes.InactiveLeft}>
                <img width="180px" src={HeroCard[indexInActiveLeft].logo}/>
            </div>
            <div className={classes.Active}>
                <img width="180px" src={HeroCard[indexActive].logo}/>
            </div>
            <div className={classes.InactiveRight}>
                <img width="180px" src={HeroCard[indexInActiveRight].logo}/>
            </div>
            <div className={classes.ImageTitle}>
                {HeroCard[indexActive].title}
                
            </div>
        </div>
    </div>
    <div className={classes.HeroSection_Mobile}>
        <div className={classes.MainHeading_Mobile}>Unravel-Sciences</div>   
        <div className={classes.EventSection_Mobile}>
            <div className={classes.AnimationSection_Mobile}>
                <img width="200px" src={HeroCard_Mobile[cardIndexMobile].logo} />
            </div>
            <div className={classes.NextBtnMobile} onClick={heroCardChangeHandlerMobile}>   
                <BsFillCaretRightFill color="wheat" size="60px"/>
            </div>         
        </div>
        <div className={classes.TitleDivMobile}>
            <div className={classes.TitleText_Mobile}>
                {HeroCard_Mobile[cardIndexMobile].title}
            </div>
        </div>
        
    </div>
</>
}

export default Hero;