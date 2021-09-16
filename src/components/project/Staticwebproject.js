
import "animate.css"
import Projects from '../Card'
import {projectCardInfoStaticWebsite} from '../../Data'

const Staticproject = () => {
    let projectCardPropStatic = projectCardInfoStaticWebsite.map((props, index) => <Projects 
    key = {index}
    id ={props.id} 
    title = {props.projectTitle}
    source = {props.imageSource}
    moreinfo = {props.moreInfoTitle}
    info = {props.information}
    link = {props.projectLink}
/>)
    return ( <div id='carding'>{projectCardPropStatic}</div> );
}

 
export { Staticproject};