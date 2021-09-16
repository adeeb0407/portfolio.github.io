import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all .5s linear;
  }
  .headings, h1 , .resumeSection span, #contact h1,.direct-contact-container ul li, .contact-text a, #aboutmeInfo p, #break{
    color: ${({ theme }) => theme.text};
  }
  .contact-icon, .category h3{
    color: ${({ theme }) => theme.linkColor};
    background-color: ${({ theme }) => theme.oppBody};  
  }
  .category h3:hover{
    background-color: ${({ theme }) => theme.text};  
    color: ${({ theme }) => theme.body};
  }
  .workDescription, figcaption p,{
    color: ${({ theme }) => theme.expection};
  }
`;

export const lightTheme = {
  body: '#E1DEDE',
  text: '#373434',
  primary: '#6200ee',
  expection : '#fff',
  oppBody : '#3A3A42',
  linkColor : '#E1DEDE',
};

export const darkTheme = {
  body: '#3A3A42',
  text: '#fff',
  expection : '#fff',
  oppBody : 'black',
  linkColor : '#fff',
};
