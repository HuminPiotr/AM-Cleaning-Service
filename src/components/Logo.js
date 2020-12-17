import React from 'react';
import styled from 'styled-components';
import {Link, graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'


const LogoWrapper = styled.div`
min-width: 20vw;
padding: 25px;
transition:.3s;


@media(min-width: 2100px){
  padding: 50px;
}
`;



const Logo = () => {
    const data = useStaticQuery(query);

    return (
    <LogoWrapper className="logo">
      <Link to="/">
      <Image fluid={data.imageSharp.fluid} />
      </Link>
    </LogoWrapper>
    )
}

export const query = graphql`
  {
    imageSharp(fluid: {originalName: {regex: "/logo/"}}) {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`


export default Logo;






