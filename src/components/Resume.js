import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import './style/resume.css'
import {resume} from '../Data'

const Resume = () => {
    return ( 
        <div className = 'container'>
        <div className="content">
        <br />
        <br />
        <br />
        <br />
        <h1 className = 'subHeadings' 
        id = 'resume' data-aos="fade-down">Resume&nbsp;<p><FileCopyIcon style ={{fontSize: '90%'}} /> </p></h1>
        <div className = 'resumeSection'>
    <button className="ResumeDownload">
    <a href = {resume.downloadURL} target = '_blank'>
<span>Download Resume <CloudDownloadIcon style = {{fontSize : '30px'}}/></span>
        </a>
        </button>
        </div>
        </div>
        </div>
     );
}

export default Resume;