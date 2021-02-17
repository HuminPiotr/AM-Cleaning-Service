import React from 'react';
import styled from 'styled-components';

import Img from 'gatsby-image';

const BGWrapper = styled.div`
    position: relative;
    width: 100%;
    
`

const FakeBgImg = styled(Img)`

    position: absolute !important;
    top: 0;
    right:0;
    height: calc(100vh - 7vh);
    width: 100%;
    max-width: 87vh;

    z-index: 0;
    object-fit: contain;


`

const Content = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;

`



const BGImage = ({fluid, title, height, mobileHeight, className, children}) => (
 
    <BGWrapper>
        <FakeBgImg
            fluid={fluid}
            title={title}
            height={height}
            mobileHeight={mobileHeight}
            className="fakeBgImage"
        />
        <Content className={className}>{children}</Content>
    </BGWrapper>
);

export default BGImage;