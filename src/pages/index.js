import React from "react"
import styled from 'styled-components';


import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import {useIntl} from 'gatsby-plugin-intl';
import ReactHtmlParser from "react-html-parser"

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
  
  background-image: url(${(props) => props.background });
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;

  .hero__stars{
    position: relative;
    z-index: -2;
    height: 100%;

    img{
      position: absolute;
    }

    .star{
      transform:scale(0);
      animation-name: starAnimation;
      animation-duration: .4s;
      animation-delay: .1s;
      animation-fill-mode: forwards;
    }

    #star1{
      right: 42%;
      bottom: 25%;
      @media(min-width: 641px) and (max-width: 1000px){
        right: 66%;
      }
      @media (min-width: 1001px) and (max-width: 1300px) {
        right: 68%;
      }
      @media (min-width: 2048px){
        right: 53%;
      }
    }
    #star2{
      top: 0;
      right: 36%;
      width: 5vw;
      animation-delay: .4s;
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
      animation-delay: .3s;
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
      top: 90px;
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
          

          h1{
            font-size: 40px;
           
            text-shadow: 1px 1px 4px white;
          }
        }
        &__star{
          position: absolute;
        }
      }
      
      #mobileStar{
      display: block;
      position: absolute;
      bottom: 0;
      right:25px;
      width: 100px;

      transform:scale(0);
      animation-name: starAnimation;
      animation-duration: .4s;
      animation-delay: .5s;
      animation-fill-mode: forwards;
    }
    }


    
`

const Description = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width:100vw;
  height: 100vh;
  /* margin-top: -13vh; */
  background-repeat: no-repeat;
  background-size: cover;
  
  background-image: url(${(props) => props.background});
  background-color: #FAFAFA;

  .text{
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
  @media (min-width: 2000px){
    .text{
      font-size: ${({theme}) => theme.fontSize.veryBig};
    }
  }

  @media(min-width: 641px) and (max-width: 1000px){
    background-position-x: -150px;
    .text{
      width: 100%;
      padding: 15px;
      margin:0;
    }
  }

  @media(max-width: 640px){
    background-image: none;

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
`

const SectionMap = styled.section`
  width: 100vw;
  /* height: 400px; */
  height: 50vh;
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
  /* height: 400px; */
  height: 50vh;
  overflow: hidden;
  display: flex;
  align-items: center;

  .text, .woman{
    width: 50%;
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

  // PAGE CONTENT
  
//  const heroText =  data.allDatoCmsIndex.nodes.filter((item) => item.heroNode.locale.includes('nl') );
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
      <Hero className="hero" background={data.backgroundHero.fluid.src}>

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
      
      <Description background={data.backgroundDescription.fluid.src} >
          <div className="text" >
              <p className="text__first">
                {getTextContentPage(data.textContent.nodes[0].description1)}
              </p>
              <br></br>
              <p className="text__second">{getTextContentPage(data.textContent.nodes[0].description2)}</p>
          </div>
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
          <Button link="/praca"> {intl.formatMessage({id: "check"})} </Button>
        </div>

        <div className="woman">
          <Image fixed={data.workWoman.fixed} />
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
                fixed(quality: 100 height: 400) {
                  ...GatsbyImageSharpFixed
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
