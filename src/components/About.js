import {aboutme} from '../Data'
import {useEffect} from 'react'
import "animate.css"
import AOS from "aos";
import "aos/dist/aos.css";
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutlineOutlined';
import {Workexperience} from './Workexperience';

export default function About () {
    useEffect( () =>{
        AOS.init({duration : 1500}); 
    }, [])
    
    
    return(
        <div className = 'container'>
        <div className="content">
        <hr id = 'break' data-aos="fade-left"/>
        <h1 className = 'subHeadings' 
        id = 'about' data-aos="fade-down">About&nbsp;<p><AssignmentReturnedOutlinedIcon style ={{fontSize: '90%'}} /> </p></h1>
        <br />
        <br />
        <br />
            <div className = 'aboutmeMain'>
            <div className = 'aboutmeCaption'>
            <h1 data-aos = 'fade-up'>{aboutme.summary}</h1>
            </div>
            <div id = 'aboutmeInfo'>
            <p data-aos="fade-up">{aboutme.firstPart}</p>
            <br />
            <p data-aos="fade-up">{aboutme.secondPart}</p>
        </div>
    </div>
    <hr id = 'break' data-aos="fade-left"/>
    <br/>
    <br/>
    <h1 data-aos="fade-up" className = 'subHeadings-2'>Work Experience&nbsp;<WorkOutlineIcon style = {{fontSize : '30px'}} /></h1>
    <Workexperience />
    </div>
</div>
    );
}