import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Navigation from '../components/Navigation'
import LanguageButton from '../components/LanguageButton'

const StyledTopBar = styled.header`
    width: 100vw;
    min-height: 150px;
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
        min-height: 70px;
        height: 70px;
        position: fixed;
        z-index: 2;
        transition: .3s;
        animation: showTopBar .5s ease-in;

        .logo{
            
            min-width:120px;
            padding: 0;
            margin:10px;
            height: 50px;
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

`


const TopBar = (props) => {

const [isSticky, setIsSticky] = useState(false);
let lastYOffset = 0;


const handleScroll = (topBar) =>{
    const scrollTop = window.pageYOffset;
    let scrollDirection = "down";

    lastYOffset > scrollTop
     ? scrollDirection = "up"
     : scrollDirection = "down"; 

    if(window.scrollY > 50 && scrollDirection==="up")
        setIsSticky(true);
    else
        setIsSticky(false);

    lastYOffset = scrollTop <= 0 ? 0 : scrollTop;
}

useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
},[])


return(
    <StyledTopBar className={isSticky ? 'topBar sticky' : 'topBar'}>

        <Logo />
        <section className="navSection">
            <Navigation />
            <LanguageButton />
        </section>

    </StyledTopBar>
)
}

export default TopBar;