import {workExperience} from '../Data'

const WorkexperienceCard = (props) => {
    return ( 
        <div className="experience-box red">
        <div className = 'experience-card-info'>
        <h2>{props.company}</h2>
          <h3>{props.role}</h3>
          <p className = 'workDescription'>{props.description}</p><span>{props.duration}</span>
            </div>
          <img src={props.img} alt="" style = {{width : '15vh', height : '6vh'}} />
        </div> 
        );
}
 const Workexperience = () => {
     const experience = workExperience.map((props, index) => <WorkexperienceCard 
        key = {index}
        company =  {props.companyName}
        role = {props.position}
        duration = {props.duration}
        description = {props.description}
        img = {props.imageSource}

     />)
     return ( <div>{experience}</div> );
 }
 
export { WorkexperienceCard, Workexperience};