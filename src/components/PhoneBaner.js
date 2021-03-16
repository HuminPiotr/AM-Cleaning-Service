import React, {useContext} from 'react';
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'

import {useIntl} from 'gatsby-plugin-intl';
import { AppContext } from './AppContext';

// CSS //
const StyledPhoneBaner = styled.div`
    width: 100vw;
    height: 18vw;
    min-height: 258px;
    max-width: 2220px;
        margin: 0 auto;

    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-image: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    text-align: center;
    h3{
        font-size: 4.4rem;
        filter: drop-shadow(0px 4px 4px black);
        margin:0;
        margin-bottom: 20px;
    }
    h2{
        font-size: 6.9rem;
        filter: drop-shadow(0px 4px 4px black);
        margin:0;
    }

    @media (min-width: 641px) and (max-width: 1000px){
        h2{
            font-size: 5.2rem;
        }
        h3{
            font-size: ${(props) => props.theme.fontSize.big};
        }
    }

    @media (max-width: 640px){
        
        h2{
            font-size: 5.2rem;
        }
        h3{
            font-size: ${(props) => props.theme.fontSize.veryBig};
        }
    }
`

// COMPONENT //
const PhoneBaner = () => {
    const data = useStaticQuery(query);
    const background = data.imageSharp.fluid.src;
    
    const intl = useIntl();
    
    const {contactInfo: {phone}} = useContext(AppContext);
    const hrefLink = `tel:${phone}`;
    

    return(
        <StyledPhoneBaner background={background}>
            <div className="background"></div>
            <h3>{intl.formatMessage({id: "phoneBaner"})}</h3>
            <h2>{intl.formatMessage({id: "call"})} <a href={hrefLink}> {phone}</a> </h2>
        </StyledPhoneBaner>
    )
}


export const query = graphql`
    {
        imageSharp(fluid: {originalName: {regex: "/baner/"}}) {
            fluid(quality: 100){
                src
            }
        }
    }
`

export default PhoneBaner;

