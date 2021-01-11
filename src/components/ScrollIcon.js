import React from 'react'
import styled from 'styled-components'


//STYLE//
const StyledScrollIcon = styled.div`
    position: absolute;
    right: 0;
    bottom: 25px;
    width: 34px;
    height: 56px;
    border: solid black 2px;
    border-radius: 25px;

    :before{
        content:'';
        width: 6px;
        height: 6px;
        position: absolute;
        background: black;
        top: 7px;
        left: calc(50% - 3px);
        border-radius: 4px;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-name: scroll;
    }

    @keyframes scroll {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
            transform: translateY(46px)
        }
    }

    @media (max-width:640px){
        left: 50%;

         transform: translateX(-50%);
    }
`
//COMPONENT//
const ScrollIcon = () => (
    <StyledScrollIcon />
)

export default ScrollIcon;