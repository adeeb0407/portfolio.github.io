import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import { Toggle } from './Toggle'
import { useDarkMode } from './style/useDarkMode';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from './style/globalStyles';

export default function Navbar () {
    const iconStyle = {fontSize: '90%'}
	
	const [ theme, toggleTheme ] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return(
		<ThemeProvider theme={themeMode}>
        <div className="menu">
        <nav>
		<ul>
		<GlobalStyles />
        
	<li><Toggle theme={theme} toggleTheme={toggleTheme}/></li>
	<li><a href="#"><HomeIcon style ={iconStyle}/> Home</a></li>
	<li><a href="#about"><InfoOutlinedIcon style ={iconStyle}/> About</a></li>
	<li><a href="#work"><WorkOutlineOutlinedIcon style ={iconStyle}/> Work</a></li>
	<li><a href="#resume"><ReceiptOutlinedIcon style ={iconStyle}/> Resume</a></li>
	<li><a href="#contact"><ContactPhoneOutlinedIcon style ={iconStyle}/> Contact</a></li>
		</ul>
		</nav>
        </div>
		</ThemeProvider>
    );
}