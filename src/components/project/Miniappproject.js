import {projectCardInfoMiniApp} from '../../Data'
import Projects from '../Card'

const Miniwebapp = () => {
    let projectCardPropMiniApp = projectCardInfoMiniApp.map((props, index) => <Projects 
        key = {index}
        id ={props.id} 
        title = {props.projectTitle}
        source = {props.imageSource}
        moreinfo = {props.moreInfoTitle}
        info = {props.information}
        link = {props.projectLink}
    />)
    return ( <div id='carding'>{projectCardPropMiniApp}</div> );
}

export {Miniwebapp};