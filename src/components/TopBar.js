import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Navigation from '../components/Navigation'
import LanguageButton from '../components/LanguageButton'
import MenuHamburger from './MenuHamburger';


const StyledTopBar = styled.header`
    width: 100vw;
    height: 20vh;
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
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        z-index: 2;
        transition: .3s;
        animation: showTopBar .5s ease-in;
        height: 100px;

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
        position: fixed;
        top: 0px;
        width:100%;
        height:90px !important;
        z-index: 2;
       background-color: white;
       justify-content: center;
       align-items: center;

       

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
        .menu-btn{
            display: flex;
        }
    }
`
let isMobile;
if(typeof window !== 'undefined'){

    isMobile = window.innerWidth <= 640;
}

const TopBar = () => {

const [isSticky, setIsSticky] = useState(false);
let lastYOffset = 0;







const handleScroll = () =>{

    const scrollTop = window.pageYOffset;
    let scrollDirection = "down";

    const topBar = document.querySelector('.topBar');
    const navigationIsActive = topBar.classList.contains('sticky');

    lastYOffset > scrollTop
     ? scrollDirection = "up"
     : scrollDirection = "down"; 


    //isMobile?
    if(!isMobile){
            // isSticky?
    if(window.scrollY > 50 && scrollDirection==="up" && !navigationIsActive){
        setIsSticky(true);
    }
        
    
    else if(window.scrollY === 0 || scrollDirection === "down"){
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
            <Navigation  />
            <LanguageButton />
            {<MenuHamburger/>}
        </section>

    </StyledTopBar>
)
}


export default TopBar;