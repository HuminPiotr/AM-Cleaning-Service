import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
    html{
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* scroll-behavior: smooth; */
    }
    *,*::before,*::after{
        box-sizing: inherit;
        
    } 
    html{
        font-size: 62.5%;
    }

    body{
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        font-family: 'Lato';
        overflow-x: hidden;
        

        
    }
    button{
        padding: 0;
        cursor: pointer;
        font-family: 'Lato';
        box-shadow: 0;
        outline:0;
        border:0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
    ul{
        padding: 0;
        margin: 0;
    }

    @media (max-width:600px){
        html{
        font-size: 52.5%;
    }
    }

    @media (min-width: 2048px){
        html{
        font-size: 95%;

        }
    }

    @media (min-width: 3072px){
        html{
        font-size: 125%;

        }
    }


`

export default GlobalStyle;