import React from "react"
import styled from 'styled-components';


import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import {useIntl} from 'gatsby-plugin-intl';
import ReactHtmlParser from "react-html-parser"

import BGImage from '../components/BGImage';
import Button from '../components/Button'
import SocialButton from '../components/SocialButton'
import ScrollIcon from '../components/ScrollIcon';
import Curtain from '../components/Curtain';
import SEO from "../components/seo";

import star1  from '../assets/images/star1.png'
import star2  from '../assets/images/star2.png'
import star3  from '../assets/images/star3.png'
import map from '../assets/images/section4-map.svg'
import ContactForm from "../components/ContactForm";
import PhoneBaner from '../components/PhoneBaner'




// import SEO from "../components/seo"

// CSS //
const Hero = styled.section`
  position: relative;
  height: calc(100vh - 20vh);
  width: 100%;
  
  .hero__stars{
    position: relative;
    z-index: -2;
    height: 100%;


    .star{
      position: absolute;
      transform:scale(0);
      animation-name: starAnimation;
      animation-duration: .4s;
      animation-delay: 1.6s;
      animation-fill-mode: forwards;
    }

    #star1{
      right: 45%;
    bottom: 15%;
      @media(min-width: 641px) and (max-width: 1000px){
        right: 66%;
      }
      @media (min-width: 1001px) and (max-width: 1300px) {
        right: 48%;
      }
      @media (min-width: 2048px){
        right: 53%;
      }
    }
    #star2{
      top: 0;
      right: 36%;
      width: 5vw;
      animation-delay: 2.3s;
      @media(min-width: 641px) and (max-width: 1000px){
        left: 5%;
      }
      @media (min-width: 1001px) and (max-width: 1300px){
        right: 45%;
      }
    }
    
    #star3{
      top: -40px;
      width: 6vw;
      right: 1%;
      z-index: 5;
      animation-delay: 2.1s;
    }
  }
  #mobileStar{
      display: none;
    }

  .hero__text{
    height: calc(100vh - 20vh);
      position: absolute;
      max-width: 50%;
      top:0;
      left:0;
      padding: 50px;
      padding-left: 8%;
      text-align: center;
      
      h1{
        margin:0;
        font-size: ${({theme}) => theme.fontSize.gross};
        
      }
      span{
        color: ${({theme}) => theme.color.blue};
      }


      



      @media(min-width: 641px) and (max-width: 1000px){
        h1{
          font-size: ${({theme}) => theme.fontSize.veryBig};
        }
        
      }

      @media (max-width: 640px){
        padding-left: 50px;
        

      }
    }

    .container{
      position:absolute;
      top:-150px;
      left:0;
      width:100vw;
      height: 100vh;
    }

    // ANIMATIONS //
    @keyframes starAnimation{
      0%{
        transform: scale(0) rotate(-45deg);
      }
      65%{
        transform:scale(1.4) rotate(0deg);
      }
      100%{
        transform:scale(1);
      }
    }

    @media(max-width: 640px){
      margin-top: 90px;
      position: static;
      .star{
        display: none;
      }
      .hero{
        &__text{
          max-width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-grow: 0;
          align-items: center;
          margin-top: 90px;
          

          h1{
            font-size: 40px;
           
            text-shadow: 1px 1px 4px white;
          }
        }
        &__star{
          position: absolute;
        }
      }
      .fakeBgImage{
        height: 60vh;
      }
      
      #mobileStar{
      display: block;
      position: absolute;
      bottom: 10px;
      right:25px;
      width: 100px;

      transform:scale(0);
      animation-name: starAnimation;
      animation-duration: .4s;
      animation-delay: .8s;
      animation-fill-mode: forwards;
    }
    }


    
`

const Description = styled.section`

  width:100vw;
  height: 100vh;

  background-color: #FAFAFA;

  .text{
    position: absolute;
    top:0;
    right:0;
    width:45%;
    margin: 50px;
    padding:50px;
    text-align:center;
    font-size: ${({theme}) => theme.fontSize.big};

    &__first{

    }
    &__second{
      font-weight: bold;
    }
  }

  .fakeBgImage{
    position: static !important;
    height: 100vh;
  }

  @media (min-width: 2000px){
    .text{
      font-size: ${({theme}) => theme.fontSize.veryBig};
    }
  }

  @media(min-width: 641px) and (max-width: 1000px){
    .text{
      width: 100%;
      padding: 15px;
      margin:0;
    }
  }

  @media(max-width: 640px){
    .fakeBgImage{
      display: none;
    }
    .text{
      width: 100%;
      padding: 15px;
      margin:0;
      
    }
  }

  
`

const Offer = styled.section`
   display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position:relative;
  width:100vw;
  height: 100vh;
  max-height: 1600px;

  background-repeat: no-repeat;
  background-size: cover;
  
  background-image: url(${(props) => props.background});
  background-color: #FAFAFA;

  h2{
    width:100%;
    text-align: center;
    margin: 0;
    margin-top: 25px;
    
    font-size: ${({theme}) => theme.fontSize.gross};
  }

  .text{
    margin-left:20%;
    flex-grow: 2;

    h3{
      font-size: ${({theme}) => theme.fontSize.veryBig};
      margin: 10px;
    }
    ul{
      font-size: ${({theme}) => theme.fontSize.big}
    }

  }


  @media (max-width: 640px){
    align-content: flex-start;
    background-image: none;
    height: auto;
    padding: 10px;
    padding-bottom: 50px;
    


    h2{
      margin-bottom: 25px;
    }
  }
  @media (min-width: 2220px){
    li{
    font-size: ${({theme}) => theme.fontSize.veryBig};

    }
    h3{
      font-size: ${({theme}) => theme.fontSize.gross} !important;
    }
  }
`

const SectionMap = styled.section`
  width: 100vw;
  height: 50vh;
  max-height: 400px;
  overflow: hidden;
  display: flex;
  background: linear-gradient(180deg, #F3EFF5 0%, rgba(243, 239, 245, 0) 122.06%);

  .woman, .map{
    width:50%;
    height: 100%;
  }

  .woman{
    text-align: center;

    img{
      height: 100%;
      width: auto;

    }
  }

  .map{
    height: 90%;
    padding: 50px;
    padding-left:100px;
    padding-right:100px;
    background-image: url(${map});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    text-align: center;
    h2{
      max-height:50%;
      margin-top: 0;
      font-size: ${({theme}) => theme.fontSize.veryBig};
    
  }
  }

  @media (min-width: 2048px){
    max-height:400px;
  }

  @media (min-width: 641px) and (max-width: 1000px){
    .map{
      padding: 15px;
      padding-top: 50px;
    }
  }

  @media (max-width: 640px){
    .woman{
      display: none;
      width:0;
      height:0;
    }
    .map{
      width: 100%;
      padding: 50px 35px;
      
    }
   
  }

`

const SectionWork = styled.section`
  width: 100vw;
  height: 50vh;
  max-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;

  .text, .woman{
    width: 50%;

  }

  .gatsby-image-wrapper{
    width: 85%;
    max-width: 715px;
    max-height: 400px;
  }


  .text{
    text-align: center;
    
    h2,h3{
    margin: 0;
    }
    h2{
      font-size: ${({theme}) => theme.fontSize.gross};

    }
    h3{
      font-size: ${({theme}) => theme.fontSize.veryBig};
      
    }
  }


  @media (min-width: 2048px){
   max-height:400px;
  }
  @media (min-width: 641px) and (max-width: 1000px){
    .woman{
      width: 50%;
      align-self: flex-end;
    }

  }

  @media (min-width: 2048px){
    .woman{
    align-self: flex-end;

    }
  }

  @media (max-width: 640px){
    .woman{
      display: none;
    }
    .text{
      width: 100%;
      h2{
        font-size: 5.4rem;
      }
      h3{
        font-size: 3.4rem;
      }

    }
  }
`



const IndexPage = ({data}) => {
  const intl = useIntl();
  const language = intl.locale;

function getTextContentPage(data){

  for(const item of data){
    
    if(item.locale.includes(language)){
      return item.value;
    }
  
  } 
}


const offerList = getTextContentPage(data.textContent.nodes[0].offer).map((item) =>(
  <li>{item.name}</li>
));

    return(
    <>
    <SEO title={intl.formatMessage({id: "home"})} />
      <Hero className="hero">
      <BGImage 
          title="descriptionImage"
          fluid={data.backgroundHero.fluid}
          height="500px"
          mobileHeight="200px"
        />

      <div className="hero__stars">
          <img src={star1} alt="star" id="star1" className="star"  />
          <img src={star2} alt="star" id="star2" className="star"/>
          <img src={star3} alt="star" id="star3" className="star" />
      </div>

      <div className="hero__text">
        <h1>
          {ReactHtmlParser(getTextContentPage(data.textContent.nodes[0].hero)) }
        </h1>

        <Button link="#hiperForm"> 
          {intl.formatMessage({id: "heroButton"})}
        </Button>

        <ScrollIcon />

        <SocialButton className="hero__facebook" link="https://www.facebook.com/AMKocon/" />
        <img src={star2} alt="star" id="mobileStar" className="star"/>
      </div>


    </Hero>
      
      <Description>
      <BGImage 
          title="heroImage"
          fluid={data.backgroundDescription.fluid}
          height="100%"
          mobileHeight="200px"
        >
          <div className="text" >
              <p className="text__first">
                {getTextContentPage(data.textContent.nodes[0].description1)}
              </p>
              <br></br>
              <p className="text__second">{getTextContentPage(data.textContent.nodes[0].description2)}</p>
          </div>
         </BGImage>
      </Description>

      <Offer background={data.backgroundOffer.fluid.src}>
        <Curtain />
          <h2>{intl.formatMessage({id: "offer"})}</h2>
          <div className="text">
            <h3>{intl.formatMessage({id: "cleaning"})}:</h3>
            <ul>
              {
                offerList
              }
            </ul>
          </div>

      </Offer>

      <SectionMap >
        <div className="woman">
          <Image fixed={data.woman.fixed} />
        </div>
        <div className="map">
          <h2>
            {getTextContentPage(data.textContent.nodes[0].map)}
          </h2>

        </div>
      </SectionMap>

      <SectionWork id="hiperForm" >
       <div className="text">
          <h2>{intl.formatMessage({id: "lookingWork"})}</h2>
          <h3>{intl.formatMessage({id: "lookingWork2"})}</h3>
          <Button link={`/${language}/praca`}> {intl.formatMessage({id: "check"})} </Button>
        </div>

        <div className="woman">
          <Image fluid={data.workWoman.fluid} />
        </div>
      </SectionWork>
     

        <ContactForm  title={getTextContentPage(data.textContent.nodes[0].contact_form)} />

        <PhoneBaner/>
      </>
      
    )
  }



export const query = graphql`
{
    
      backgroundHero: imageSharp(original: 
        {src: {regex: "/hero/"}}) {
          fluid(quality: 100)  {
            src
        }
      }

      backgroundDescription: imageSharp(original:
        {src: {regex: "/section2/"}}) {
          fluid(quality: 100 maxHeight: 3500 ) {
            src
          }
        }


        backgroundOffer: imageSharp(original:
          {src: {regex: "/section3/"}}) {
            fluid(quality: 100 maxHeight: 3500 ) {
              src
            }
          }
        
          woman: imageSharp(original:
            {src: {regex: "/section4-woman/"}}) {
              fixed(quality: 100 height: 400) {
                ...GatsbyImageSharpFixed
              }
            }

            workWoman: imageSharp(original:
              {src: {regex: "/workWoman/"}}) {
                fluid(quality: 100 maxHeight: 400 ) {
                  ...GatsbyImageSharpFluid
                }
              }


              textContent:allDatoCmsIndex {
                nodes {
                 hero: _allHeroLocales {
                    locale
                    value
                  }
                  description1: _allDescription1Locales {
                    locale
                    value
                  }
                  description2: _allDescription2Locales {
                    locale
                    value
                  }
                  offer: _allListaOfertyLocales {
                    locale
                    value {
                      name
                    }
                  }

                  map: _allMapLocales {
                    locale
                    value
                  }

                  contact_form: _allContactFormLocales {
                    locale
                    value
                  }

                }
              }



}
`


export default  IndexPage;
