import React, { useRef, useEffect } from "react"

import styled from "styled-components"

const StyledHamburger = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: none;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: transparent;
  transition: all 0.5s ease-in-out;
  border: 0;
  z-index: 5;

  &:focus {
    outline: 0;
  }

  &.active {
    .menu-btn__burger {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    }
    .menu-btn__burger::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
    .menu-btn__burger::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }
  .menu-btn__burger {
    position: relative;
    width: 45px;
    height: 4px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
    background-color: ${({theme}) => theme.color.darkblue};
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: "";
    position: absolute;
    left: 0;
    width: 45px;
    height: 4px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
    background-color: ${({theme}) => theme.color.darkblue};
  }
  .menu-btn__burger::before {
    transform: translateY(-16px);
  }
  .menu-btn__burger::after {
    transform: translateY(16px);
  }
  @media (max-width: 640px) {
    display: flex;
  }
`



const Hamburger = () => {
  const myHamburger = useRef(null)
  
 

  useEffect(() => {
    const myHamburger = document.querySelector(".menu-btn")
    const navigation = document.querySelector('.topBar');

    
    navigation.classList.remove('active');
    myHamburger.classList.remove("active")
    
  })



  const changeStatusMenu = () => {

    myHamburger.current.classList.toggle("active")
    if(myHamburger.current.classList.contains('active'))
      showNavigation();
    else
      hideNavigation();
    
  }

  
  const showNavigation = () => {
    const navigation = document.querySelector('.topBar');
    navigation.classList.add('active');
    
  }
  const hideNavigation = () => {
    const navigation = document.querySelector('.topBar');
    navigation.classList.remove('active');
  }
  

  return (
    <StyledHamburger
      className="menu-btn"
      onClick={changeStatusMenu}
      ref={myHamburger}
    >
      <div className="menu-btn__burger"></div>
    </StyledHamburger>
  )
}

export default Hamburger
