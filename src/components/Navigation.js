import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import {useIntl} from 'gatsby-plugin-intl';


const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 2.8rem;
    
    ul{
        display: flex;
        list-style: none;

        a{
            display: block;
            position: relative;
            margin: 0 16px;
            padding: 5px;
            overflow: hidden;
            color: black;
            font-family: Montserrat;
            transition: .3s;

        }
        a::after{
            content: '';
            position: absolute;
    
            left:-1px;
            bottom:0;
            width: 100%;
            height: 1px;
            background-color: ${(props) => props.theme.color.blue};
            border-radius: 50px;
            transform: translateX(-100%);
            transition: 0.4s ease-in-out;
        }

        a:hover::after{
            transform: translateX(-75%);
        }

        a.active::after{
            transform: translateX(0);
            
        }
    }

    @media(min-width:2100px){
        a{
        font-size: ${({theme}) => theme.fontSize.big};
        margin: 0 50px;
        }
    }

    @media(max-width: 600px){
        /* ul{
            flex-direction: column;
            text-align: center;
            
            li{
                margin: 25px 0;
            }
        } */
        display: none;
        position: fixed;
        top: 150px;
        left:0;
        width: 100vw;
        height: 100vh;
        background: ${({theme}) => theme.color.gray};

        ul{
            flex-direction: column;
            align-items: center;
            margin: auto;
            li{
                margin-bottom: 25px;
                a{
                    font-size: 34px !important;
                }

            }
        }

        

    }
`




const Navigation = () => {
const intl = useIntl();
const locale = intl.locale !=="pl" ? `/${intl.locale}` : "";

return(
    <StyledNavigation>
        <ul>
            <li><Link activeClassName="active" to={`${locale}/`}>{intl.formatMessage({id: "home"})}</Link></li>
            <li><Link activeClassName="active" to={`${locale}/praca`}>{intl.formatMessage({id: "work"})}</Link></li>
            <li><Link activeClassName="active" to={`${locale}/kontakt`}>{intl.formatMessage({id: "contact"})}</Link></li>
        </ul>
    </StyledNavigation>
    

)
}

export default Navigation;



