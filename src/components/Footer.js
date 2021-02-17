import React, {useContext} from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import { AppContext } from './AppContext';

// CSS //
const StyledFooter = styled.footer`
    width: 100vw;
    /* max-width: 2220px; */
    margin: 0 auto;
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

    @media (max-width: 640px){
        padding: 25px;
        text-align: center;
        flex-direction: column;
        .footer{
            &__logo{
                .logo{
                padding: 0;
                margin-top: 25px;
                width: 150px;
                }

            }
            &__info{
                text-align: center;
            }
            &__center{
                order: 3;
                align-self: center;
            }
        }
    }

`
// COMPONENT //
const Footer = () => {
    const {contactInfo: {phone, email}} = useContext(AppContext);

    return(
        <StyledFooter className="footer">
            <div className="footer__logo">
                <Logo />
            </div>

            <div className="footer__center"> 
            <a href="http://www.freepik.com">Designed by Freepik</a>
            </div>
            
            <div className="footer__info">
                <p className="footer__contact">
                    <p>{email}</p>
                    <p>{phone}</p>
                </p>
                <Navigation />
            </div>

        </StyledFooter>
    )
}


export default Footer;

