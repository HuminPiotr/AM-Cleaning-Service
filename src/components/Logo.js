import React from 'react';
import styled from 'styled-components';
import {Link, graphql, useStaticQuery} from 'gatsby'
import Image from 'gatsby-image'

import {useIntl} from 'gatsby-plugin-intl';

const LogoWrapper = styled.div`
min-width: 20vw;
padding: 25px;
transition:.3s;


@media(min-width: 2100px){
  padding: 50px;
}

@media(max-width: 600px){
  width: 135px;
  
}
`;



const Logo = () => {
    const data = useStaticQuery(query);
    const intl = useIntl();
    const locale = intl.locale !=="pl" ? `/${intl.locale}` : "";

    return (
    <LogoWrapper className="logo">
      <Link to={`${locale}/`}>
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






