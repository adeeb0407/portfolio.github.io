import './style/contact.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SendIcon from '@material-ui/icons/Send';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {AiFillGithub} from 'react-icons/ai'
import emailjs from 'emailjs-com';
import React from 'react';


const Contactus = () => {

  const [confirmAll, setconfirmAll] = React.useState("")

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_h0cgdxc', 'template_nrjht8s', e.target, 'user_KmLFGfajPsYsOToz2GpNu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

          setconfirmAll("Response has been Sent!!")
    }

    const Iconstyle = {fontSize : '25px'};

    return (
        <div className = 'container'>
        <div className="content">
         <section id="contact">
  
    <h1 className="section-header" id = 'contact'>Contact</h1>
    
    <div className="contact-wrapper">
      <form id="contact-form" className="form-horizontal" onSubmit={sendEmail}>
         
        <div className="form-group">
          <div className="col-sm-12">
            <input type = 'text' className="form-control" placeholder="Name" name = 'name' required/>
          </div>
        </div>  
        <div className="form-group">
          <div className="col-sm-12">
            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email"  required />
          </div>
        </div>
  
        <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
        
        <input type="submit" value="Send" className="btn btn-primary send-button" id="submit"/>
        
        <span style = {{color : '#3bb523'}}>{confirmAll}</span>
        
      </form>
  
        <div className="direct-contact-container">
  
          <ul className="contact-list">
            <li className="list-item"><LocationOnIcon style = {Iconstyle}/><span className="contact-text place">Pune City, Maharashtra</span></li>
            
            <li className="list-item"><CallIcon style = {Iconstyle}/><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+91 7767825344</a></span></li>
            
            <li className="list-item"><EmailIcon style = {Iconstyle}/><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">adeebshah4@gmail.com</a></span></li>
            
          </ul>
  
          <hr />

          <ul className="social-media-list">
            <li> <a href="https://github.com/adeeb0407" target="_blank" className="contact-icon"><AiFillGithub style = {Iconstyle}/></a></li>
            <li><a href="https://www.linkedin.com/in/adeebdev/" target="_blank" className="contact-icon">
              <LinkedInIcon style = {Iconstyle}/></a>
            </li>
            <li><a href="https://www.instagram.com/adeeb0407/" target="_blank" className="contact-icon">
              <InstagramIcon style = {Iconstyle}/></a>
            </li>
            <li><a href="https://twitter.com/adeebshah41" target="_blank" className="contact-icon">
              <TwitterIcon  style = {Iconstyle}/></a>
            </li>       
          </ul>
          <hr />
  
          <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
  
        </div>
      
    </div>
    
  </section> 
  </div>
  </div> 
   );
}
 
export default Contactus;