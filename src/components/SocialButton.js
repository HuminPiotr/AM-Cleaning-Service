import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Link} from 'gatsby';
import Image from 'gatsby-image';

//STYLES//
const StyledSocialButton = styled(Link)`
    display: flex;
    align-items: center;
    position:absolute;
    bottom:25px;
    left: 25px;
    overflow:hidden;
    cursor: pointer;
    

    p{
        margin-left: 15px;
        max-width: 80px;
        text-align: left;
        font-weight: ${(props) => props.theme.fontWeight.bold};
    }

    ::before{
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, #fff, transparent);
        transition: .3s;
        transform: rotate(0deg)
    }
    :hover{
        
    }
    :hover::before{
        transform: translateX(190%);
    }
`

//COMPONENT//
const SocialButton = ({link}) => (
    <StyledSocialButton to={link} target="_blank">
    
    <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.6429 0H5.35714C3.93634 0 2.57373 0.553124 1.56907 1.53769C0.564412 2.52226 0 3.85761 0 5.25L0 43.75C0 45.1424 0.564412 46.4777 1.56907 47.4623C2.57373 48.4469 3.93634 49 5.35714 49H20.6752V32.3411H13.644V24.5H20.6752V18.5238C20.6752 11.7261 24.8047 7.97125 31.1295 7.97125C34.1585 7.97125 37.3259 8.50063 37.3259 8.50063V15.1725H33.8359C30.3973 15.1725 29.3248 17.2638 29.3248 19.4086V24.5H37.0011L35.7734 32.3411H29.3248V49H44.6429C46.0637 49 47.4263 48.4469 48.4309 47.4623C49.4356 46.4777 50 45.1424 50 43.75V5.25C50 3.85761 49.4356 2.52226 48.4309 1.53769C47.4263 0.553124 46.0637 0 44.6429 0Z" fill="#2A266F"/>
    </svg>

    <p>Obserwuj nas!</p>

    </StyledSocialButton>
)

// PROP-TYPES //
StyledSocialButton.propTypes = {
    link: PropTypes.string,
}
StyledSocialButton.defaultProps = {
    link: "#",
}


export default SocialButton;