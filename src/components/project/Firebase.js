import React from 'react'
import Projects from '../Card'
import {firebaseproject} from '../../Data'

function Firebase() {
    let projectCardPropStatic = firebaseproject.map((props, index) => <Projects 
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

export default Firebase
