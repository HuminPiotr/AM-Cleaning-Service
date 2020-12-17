import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';



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
`


const Navigation = () => (
    <StyledNavigation>
        <ul>
            <li><Link activeClassName="active" to="/">Stronga główna</Link></li>
            <li><Link activeClassName="active" to="/praca">Praca</Link></li>
            <li><Link activeClassName="active" to="/kontakt">Kontakt</Link></li>
        </ul>
    </StyledNavigation>
    

)

export default Navigation;



