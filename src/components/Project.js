
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';
import "animate.css"
import {Route , Switch } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {Staticproject} from './project/Staticwebproject';
import {Miniwebapp} from './project/Miniappproject'
import Firebase from './project/Firebase';
import Mern from './project/Mern';

export default function Project () {
    return(
<div className = 'container'>
        <div className="content">
        <h2 data-aos="fade-up" className = 'subHeadings' id = 'work'>Projects&nbsp;<p><AssignmentReturnedOutlinedIcon style ={{fontSize: '90%', marginBottom: '50px'}} /> </p></h2>
        <div className = 'category'>
        <Link to = '/mernproject' className = 'projectLink'><h3>MERN Stack Apps</h3></Link>
        <Link to = '/firebaseproject' className = 'projectLink'><h3>Firebase/React Apps</h3></Link>
        <Link to = '/' className = 'projectLink'><h3>Mini Web Applications</h3></Link>
        <Link to = '/staticproject' className = 'projectLink link-1' ><h3>Static WebSites</h3></Link>
        </div>
        <div id='carding'>
        <Switch>
        <Route exact path = '/'>
        <Miniwebapp />
        </Route>

        <Route exact path = '/staticproject'>
        <Staticproject />
        </Route>
        <Route exact path = '/firebaseproject'>
        <Firebase />
        </Route>
        <Route exact path = '/mernproject'>
        <Mern />
        </Route>
        </Switch>
        </div>
        </div>
        </div>
        
    );
}