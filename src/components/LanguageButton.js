import React, {useContext} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby';

import { AppContext } from './AppContext'

// CSS //
const StyledLanguageButton = styled.button`
    position: relative;
    width:90px;
    /* top:50%; */
    /* left: 50%; */
    font-size: 2.6rem;
    background: none;
    border: none;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    margin: 0;

    &::after{
        display: block;
        content: '';
        width: 0px;
        height: 0px;
        border-left: 0.8rem solid transparent;
        border-right: 0.8rem solid transparent;
        border-top: 0.8rem solid black;
        position: absolute;
        bottom: calc(50% - 0.4rem);
        left: 60px;
        transform: rotate(0deg);
    }


    &::after{
        transform: rotate(0deg);
    }

    &.active::after{
        transform: rotate(180deg);
    }

    @media (min-width:2100px){
        font-size: ${({theme}) => theme.fontSize.big};
    }

    @media (max-width: 640px){
        position: absolute;
        top: 15px;
        left: 0px;
        z-index: 2;
    }
`

const ChangePanel = styled.div`
        opacity: 0;
        display: none;
        transform: translateY(-10px);
        width:50px;
        height:50px;
        background-color: ${(props) => props.theme.color.teal};
        border: 2px ${(props) => props.theme.color.gray};
        border-radius: 10px;
        font-weight: ${(props) => props.theme.fontWeight.bold};
        transition: .1s;
        position: absolute;
        left:30px;
        bottom: calc(-50% + 15px) ;
        
        &.active{
            display: block;
            opacity: 1;
            transform: translateY(0px);
        }
        button{
            width: 100%;
            height:100%;
            background: none;
        }

        .changePanel__span{
            display: block;
            font-size: 2.6rem;
            margin: 0;
            line-height: 50px;
            text-align: center;
        }

        @media(min-width:2100px){
            width:100px;
            height:100px;
            left:0;
            p{
                font-size: ${({theme}) => theme.fontSize.big};
                line-height: ${({theme}) => theme.fontSize.big};
                padding: 30px;
            }
        }

        @media(max-width: 640px){
            /* bottom: calc(-50% + 30px) ; */
            bottom: -50%;
        }
`

// COMPONENT //
const LanguageButton = () => {

    const {language,changeLanguageContext} = useContext(AppContext);
    


    function handleClick(){
        const button = document.querySelector('.languageButton');
        const changePanel = document.querySelector('.changePanel');
        button.classList.toggle("active");
        changePanel.classList.toggle("active");
    };

    function changeLanguage(){
        changeLanguageContext({
            first: language.second,
            second: language.first,
        })

    }

    function getLocation(){
        if(typeof window !=="undefined"){
            let pathname = window.location.pathname;
            if(pathname.includes('/nl') || pathname.includes('/pl') ){
                pathname = pathname.split('');
                pathname.splice(0,3);
                pathname = pathname.join('');
            }

            const link = language.second === 'pl' ? 
            `${pathname}` :
            `/${language.second}${pathname}`;
            
            return link;
        }
        
    }

    return(
        <>
        <StyledLanguageButton className="languageButton" onClick={handleClick}>
            <p>{language.first}</p> 
            <ChangePanel className="changePanel">
                <button onClick={changeLanguage}>
                    <Link to={getLocation()} className="changePanel__span">{language.second}</Link>
                </button>
            </ChangePanel>
        </StyledLanguageButton>
        </>
    )
}

export default LanguageButton;