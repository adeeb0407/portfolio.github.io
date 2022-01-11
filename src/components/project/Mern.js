import React from 'react'
import Projects from '../Card'
import {mernProject} from '../../Data'

function Mern() {
    let projectCardPropStatic = mernProject.map((props, index) => <Projects 
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

export default Mern
