import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {Link} from 'gatsby';

// CSS //
const StyledButton = styled.button`
    margin: 15px;
    position: relative;
    text-transform: uppercase;
    text-align: center;
    border-radius: 15px;
    font-size: ${(props) => props.theme.fontSize.regular};
    background-color: ${(props) => props.theme.color.coral};
    color: ${(props) => props.theme.color.gray};
    transition: .2s;
    z-index: 0;

    .link{
        display: block;
        width:100%;
        height: 100%;
        padding: 18px 34px;
        z-index: 2;
        line-height: 22px;
        color: ${(props) => props.theme.color.gray};
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }

    &:hover{
        border-radius: 0;
        .link{
            color: black;       
        }
         .hoverEffect {
            height: 95%;
    }
    }
    .hoverEffect{
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:0%;
        background-color: ${(props) => props.theme.color.gray};
        transition: 0.3s;
        z-index: -1;

    }

 @media(min-width: 2600px){
    font-size: ${(props) => props.theme.fontSize.big};
    padding: 25px;
    /* padding: 50px; */
 }
`


// COMPONENT //
const Button = ({link, children}) => {

    const isLink = ! link.includes('#');

    function scroll(e){
        const section_position = document.querySelector(link).offsetTop;
        const button_position = e.target.parentNode.offsetTop;
        const direction = button_position < section_position ? "down" : "up";
        let distance = 0;

        if(direction === "down")
            distance = section_position + button_position;
        if(direction === "up")
            distance = -(section_position + button_position);

        window.scrollBy({top: distance, behavior: 'smooth'})
    }

    return(
        <>
            <StyledButton >
                <div className="hoverEffect"></div>
                {
                    isLink ? 
                    <Link to={link} className="link" target="_blank"> {children} </Link> :
                    <div className="link" onClick = {scroll} > {children}</div> 
                }
            </StyledButton>
        </>
    )
}

// PROP-TYPES //
Button.propTypes = {
    link:  PropTypes.string,
}

Button.defaultProps = {
    link: '#',
}

export default Button;
