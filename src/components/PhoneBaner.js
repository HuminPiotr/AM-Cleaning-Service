import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

// CSS //
const StyledPhoneBaner = styled.div`
    width: 100vw;
    height: 258px;
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
`

// COMPONENT //
const PhoneBaner = ({phoneNumber}) => {
    const data = useStaticQuery(query);
    const background = data.imageSharp.fluid.src;
    const hrefLink = `tel:${phoneNumber}`;
    return(
        <StyledPhoneBaner background={background}>
            <div className="background"></div>
            <h3>Szukasz szybkiej i konretnej informacji?</h3>
            <h2>Zadzwoń <a href={hrefLink}> {phoneNumber}</a> </h2>
        </StyledPhoneBaner>
    )
}

// PROP-TYPES //
PhoneBaner.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
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
