import classes from "./ClubCard.module.css"
import image1 from "../Assets/icons8-computer.gif"
import image2 from "../Assets/icons8-gamepad.png"
import image6 from "../Assets/icons8-butterfly.gif"
import image4 from "../Assets/icons8-sine.gif"
import image5 from "../Assets/icons8-chemistry.gif"
import image3 from "../Assets/icons8-robot.gif"



const clubData = [
    {
        id: 0,
        logo: image1,
        title: "Computer's Club",
    },
    {
        id: 1,
        logo: image2,
        title: "Gaming Club"
    },
    {
        id: 2,
        logo: image6,
        title: "Biology Club"
    },
    {
        id: 3,
        logo: image3,
        title: "Robotics Club",
    },
    {
        id: 4,
        logo: image5,
        title: "Chemistry Club",
    },
    {
        id: 5,
        logo: image4,
        title: "Physics Club",
    },
    
]

const ClubCard = (props) => {

    const modalOpenerHandler = () => {
        props.modalOpener(true)
    }

    console.log("card number: ", props.card)
    return (
        <div onClick={modalOpenerHandler} className={classes.ClubCard}>
            <div className={classes.Image}>
                <img className={classes.CardLogoImage} src={clubData[props.card].logo}/>
            </div>
            <div className={classes.Title}>{clubData[props.card].title}</div>
            <div className={classes.ViewMoreBtn}>view more</div>
        </div>
    )
}

export default ClubCard;