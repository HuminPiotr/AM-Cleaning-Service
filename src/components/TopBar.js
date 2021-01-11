import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Navigation from '../components/Navigation'
import LanguageButton from '../components/LanguageButton'
import Hamburger from './Hamburger';

const StyledTopBar = styled.header`
    width: 100vw;
    /* min-height: 150px; */
    padding: 0 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: .5s;
    z-index: -1;


    section{
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        margin-right: 25px;
    }

    &.sticky{
        position: absolute;
        top: 0;
        left: 0;
        background: white;

        position: fixed;
        z-index: 2;
        transition: .3s;
        animation: showTopBar .5s ease-in;

        .logo{
            
            min-width:120px; 
            height: 25px;
            padding: 0;
            margin-top:15px;
            height: 50px;
            margin-bottom: 20px;
        }

        .navSection{
            a{
            font-size: ${({theme}) => theme.fontSize.regular};
            transition: .3s;
            }
        }
        @keyframes showTopBar{
            from{
                /* opacity: 0; */
                transform: translateY(-100%);
            }
            to{
                /* opacity: 1; */
                transform: translateY(0);
            }
        }
        @keyframes hideTopBar{
            from{
                /* opacity: 0; */
                transform: translateY(0);
            }
            to{
                /* opacity: 1; */
                transform: translateY(-100%);
            }
        }
    }

    @media (max-width: 640px){


        width:100%;
        height:90px !important;
        z-index: 2;
       background-color: white;
       justify-content: center;
       align-items: center;

       
       &.active{
           position: sticky;
           top: 0;
           width: 100vw;
           height: 100vh !important;
           background-color: ${({theme}) => theme.color.gray};
           overflow: hidden;

           nav{
               display: block;
           }
       }
 


        .navSection{
            flex-direction: column;
            justify-content: center;
        }
        height: 200px;
        padding: 0 15px;
        
        .logo{
            order:2;
            padding: 0;
            z-index: 2;
            align-self: flex-start;
            margin-top: 15px;
            
        }
        .navSection{
            order:1;
            flex-grow: 0;
        }

        &.sticky{
            width: 100vw;


    }
    }
`


const TopBar = (props) => {

const [isSticky, setIsSticky] = useState(false);
let lastYOffset = 0;



const handleScroll = () =>{
    const scrollTop = window.pageYOffset;
    let scrollDirection = "down";

    const topBar = document.querySelector('.topBar');
    const navigationIsActive = topBar.classList.contains('active');


    lastYOffset > scrollTop
     ? scrollDirection = "up"
     : scrollDirection = "down"; 

    if(window.scrollY > 50 && scrollDirection==="up" && !navigationIsActive)
        
            setIsSticky(true);
        
    else{
        if(!navigationIsActive){
            setIsSticky(false);
        }
    }

    lastYOffset = scrollTop <= 0 ? 0 : scrollTop;
}

useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
},[])


return(
    <StyledTopBar className={isSticky ? 'topBar sticky ' : 'topBar '}>

        <Logo />
        <section className="navSection">
            <Navigation />
            <LanguageButton />
            <Hamburger />
        </section>

    </StyledTopBar>
)
}

export default TopBar;