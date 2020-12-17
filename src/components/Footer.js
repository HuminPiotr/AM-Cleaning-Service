import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

// CSS //
const StyledFooter = styled.footer`
    width: 100vw;
    min-height: 350px;
    display: flex;
    align-items: center;
    flex-grow:1;
    flex-wrap: wrap;
    flex-basis: 33%;
    justify-content: space-between;
    padding:  60px 46px;
    background-color: ${({theme}) => theme.color.gray};

    .footer-logo{
        /* flex-basis: 300px; */
    }
    .footer__center{
        align-self: flex-end;
        text-align: center;
        a{
            font-size: ${({theme}) => theme.fontSize.mini};
        }
    }

    .footer__info{ 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: right;
        font-size: ${({theme}) => theme.fontSize.big};
        
        nav{ 
            a{
                font-size: ${({theme}) => theme.fontSize.regular};margin-right: 0;

                &::after{
                    display: none;
                }
            }

        }
    .footer__contact{
        

    }
    }

`
// COMPONENT //
const Footer = () => (
    <StyledFooter className="footer">
        <div className="footer__logo">
            <Logo />
        </div>

        <div className="footer__center"> 
          <a href="http://www.freepik.com">Designed by Freepik</a>
        </div>
          
        <div className="footer__info">
            <p className="footer__contact">
                <p>amcleaningservices1@hotmail.com</p>
                <p>123 123 123</p>
            </p>
            <Navigation />
        </div>

    </StyledFooter>
)


export default Footer;

