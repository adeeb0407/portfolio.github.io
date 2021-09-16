import React from 'react';
import styled from 'styled-components';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ToggleOffIcon from '@material-ui/icons/ToggleOff';

let Sun, Moon;

let modeText = { color: 'Black',position : 'absolute', top : '-1rem', left: '10rem'}


Sun = Moon = styled.svg`
  position: absolute;
  top : -2rem
  font-size: 50px ;

`;

export const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div onClick={toggleTheme}>
      { theme === 'light' ?<div style = {{color: '#A5A2A2 ', cursor: 'pointer'}}><ToggleOnIcon id = 'lightMode'/><br /><span id ='modeText'>LightMode</span></div>
       : 
       <div style = {{color: '#3A3A42', cursor: 'pointer'}} > <ToggleOffIcon id = 'darkMode'/><br /><span id ='modeText'>DarkMode</span></div>}
    </div>
  )
}