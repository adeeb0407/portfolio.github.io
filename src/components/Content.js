import {intro, workingSoftwares} from '../Data'
import React, {useState} from 'react';
import wallpaper from './image/wallpaper-intro.png'
import adeeb from './image/adeeb.png'
import "animate.css"
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';

export default function HeadingPage () {
    const [changeBackground, setBackground] = useState({backgroundColor : 'red'})

    function set() {
        setBackground({ backgroundColor : 'green' })
    }
    return(
        <div className = 'container'>
        <div className="content">

</div>
        <div className = 'headings' data-aos="fade-up">{intro.name}
         <DonutLargeOutlinedIcon className = 'rotate' style ={{fontSize: '90%'}}/>
         <p id = 'hell' className = 'animate__animated animate__fadeInDown animate__delay-1s'>{intro.occupation}</p>
         </div>
        <br />
        <div className = 'image-intro'>
        {/* <button onClick= {set} style = {changeBackground}> Changes</button> */}
        <div className="Iam">
    <b>
    <div className="innerIam">
        {workingSoftwares[0].react}<br /> 
     {workingSoftwares[0].html}<br />
     {workingSoftwares[0].bootstrap}<br />
     {workingSoftwares[0].node}<br />
     {workingSoftwares[0].express} <br />
        </div>
        </b>
        {/* <div class="element"></div> */}
        <img id= 'headingWallpaper' src = {wallpaper} alt = 'intro' style = {{width : '800px', height : '83vh'}}/>
        {/* <img id= 'headingWallpaperAdeeb' src = {adeeb} alt = 'intro' /> */}
          </div>
          </div>
  </div>
    );
}