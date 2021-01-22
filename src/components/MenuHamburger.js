import React, { useEffect } from 'react';

import styled from 'styled-components';


const StyledHamburger = styled.div`
    display: none;
    width: 80px;
    height: 80px;
    position: absolute;
    right: 5px;
    justify-content: center;
    align-items: center;

    .menu-btn__hamburger{
        position: relative;
        width: 45px;
        height: 4px;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        background-color: ${({theme}) => theme.color.darkblue};

        &::before,&::after{
            content: "";
            position: absolute;
            left: 0;
            width: 45px;
            height: 4px;
            border-radius: 5px;
            transition: all 0.5s ease-in-out;
            background-color: ${({theme}) => theme.color.darkblue};
        }
        &::before{
            transform: translateY(-16px);
        }
        &::after{
            transform: translateY(16px);
        }
    }
    &.active{
        .menu-btn__hamburger{
            transform: translateX(-50px);
            background: transparent;
            box-shadow: none;

            &::before{
                transform: rotate(45deg) translate(35px, -35px);
            }
            &::after{
                transform: rotate(-45deg) translate(35px, 35px);
            }
        }

    }


    @media (max-width: 640px) {
    display: flex;
  }
`



const MenuHamburger = () => {

    useEffect(() => {
        const navigation = document.querySelector('.navigation');
        const topBar = document.querySelector('.topBar');
        const menuButton = document.querySelector('.menu-btn');

        menuButton.classList.remove('active');
        navigation.classList.remove('active');
        topBar.classList.remove('sticky');

    } )

    const handleClick = () => {
        const navigation = document.querySelector('.navigation');
        const topBar = document.querySelector('.topBar');
        const menuButton = document.querySelector('.menu-btn');

        menuButton.classList.toggle('active');
        navigation.classList.toggle('active');
        topBar.classList.toggle('sticky');
        console.log(topBar);
    }
    return(
        <StyledHamburger className="menu-btn" onClick={handleClick}>
            <div className="menu-btn__hamburger"></div>
        </StyledHamburger>
    )
}


export default MenuHamburger;