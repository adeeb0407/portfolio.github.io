import React from 'react'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AssignmentReturnedOutlinedIcon from '@material-ui/icons/AssignmentReturnedOutlined';
import html from './image/html.png'
import css from './image/css.png'
import reactimage from './image/react.png'
import javascript from './image/javascript.png'
import sass from './image/sass.png'
import bootstrap from './image/bootstrap.png'
import materialui from './image/materialui.png'
import redux from './image/redux.png'
import node from './image/node.png'
import express from './image/express.png'
import graphql from './image/graphql.png'
import mongodb from './image/mongodb.png'
import firebase from './image/firebase.png'
import wordpress from './image/wordpress.png'
import photoshop from './image/photoshop.png'
import aftereffect from './image/aftereffect.png'
import git from './image/git.png'
import mysql from './image/mysql.png'
import sonyvegas from './image/sonyvegas.png'


function Skills() {
    return (
        <div className = 'container'>
        <div className="content">
            <h2 data-aos="fade-up" className = 'subHeadings' id = 'work'>Skills&nbsp;<p><AssignmentReturnedOutlinedIcon style ={{fontSize: '90%', marginBottom: '50px'}} /> </p></h2>
            <div className="skills-box blue">
        <div className = 'skills-card-info'>
        <h2>Front-End</h2>
          <div className = 'skillspng'>
          <img src = {html} alt = 'html' className = 'skillsImage'/>
          <img src = {css} alt = 'css' className = 'skillsImage'/>
          <img src = {javascript} alt = 'javascript' className = 'skillsImage'/>
          <img src = {reactimage} alt = 'reactimage' className = 'skillsImage'/>
          <img src = {redux} alt = 'redux' className = 'skillsImage'/>
          <img src = {sass} alt = 'sass' className = 'skillsImage'/>
          <img src = {bootstrap} alt = 'bootstrap' className = 'skillsImage'/>
          <img src = {materialui} alt = 'materialui' className = 'skillsImage'/>
          </div>
            </div>
        </div> 


            <div className="skills-box red">
        <div className = 'skills-card-info'>
        <h2>Back-End</h2>
          <div className = 'skillspng'>
          <img src = {node} alt = 'node' className = 'skillsImage'/>
          <img src = {express} alt = 'express' className = 'skillsImage'/>
          <img src = {firebase} alt = 'firebase' className = 'skillsImage'/>
          <img src = {mongodb} alt = 'mongodb' className = 'skillsImage'/>
          <img src = {graphql} alt = 'graphql' className = 'skillsImage'/>
          <img src = {mysql} alt = 'mysql' className = 'skillsImage'/>
          </div>
            </div>
        </div> 

        <div className="skills-box grey">
        <div className = 'skills-card-info'>
        <h2>Miscellaneous</h2>
          <div className = 'skillspng'>
          <img src = {git} alt = 'git' className = 'skillsImage'/>
          <img src = {wordpress} alt = 'wordpress' className = 'skillsImage'/>
          <img src = {photoshop} alt = 'photoshop' className = 'skillsImage'/>
          <img src = {aftereffect} alt = 'aftereffect' className = 'skillsImage'/>
          <img src = {sonyvegas} alt = 'sonyvegas' className = 'skillsImage'/>
          </div>
            </div>
        </div> 


        </div>
        </div>
    )
}

export default Skills
