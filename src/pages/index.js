import React from "react"
import { Link} from "gatsby"
import styled from 'styled-components';


import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import {useIntl} from 'gatsby-plugin-intl';

import Button from '../components/Button'
import SocialButton from '../components/SocialButton'
import ScrollIcon from '../components/ScrollIcon';
import Curtain from '../components/Curtain';

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
  height: calc(100vh - 50px);
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
    }
    #star2{
      top: 0;
      right: 36%;
      width: 5vw;
      animation-delay: .4s;
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
    height: calc(100vh - 150px);
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
      
      @media (min-width:2100px){
        height:auto;
        
      }
      @media (max-width: 600px){
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

    @media(max-width: 600px){
      .star{
        display: none;
      }
      .hero{
        &__text{
          max-width: 100%;

          h1{
            font-size: 36px;
           
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
      animation-delay: .3s;
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
  margin-top: -13vh;
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

  @media(max-width: 600px){
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

  @media (max-width: 600px){
    align-content: flex-start;
    background-image: none;

    h2{
      margin-bottom: 50px;
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

  @media (max-width: 600px){
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

  @media (max-width: 600px){
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
  
    return(
    <>
    {/* <SEO title="Home" /> */}
      <Hero className="hero" background={data.backgroundHero.fluid.src}>

      <div className="hero__stars">
          <img src={star1} alt="star" id="star1" className="star"  />
          <img src={star2} alt="star" id="star2" className="star"/>
          <img src={star3} alt="star" id="star3" className="star" />
      </div>

      <div className="hero__text">
        <h1>Profesjonalne <span>sprzątanie</span> dla 
            Ciebie i Twojej firmy!
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
              <p className="text__first">Podstawą sukcesu każdej firmy  są odpowiednio wykwalifikowani i zmotywowani pracownicy. 
              Personel sprzątający nie jest tu wyjątkiem. Od tego, jakie osoby zatrudniam w  firmie do wykonania usługi czystości, zależą jej kontrakty, relacje z klientami i wizerunek.</p>
              <br></br>
              <p className="text__second">Profesjonalna firma sprzątająca niczym perfekcyjna pani domu ma jasno wyznaczone standardy, których w codziennej pracy muszą przestrzegać jej pracownicy. Efekt wykonanej pracy jest  widoczny na pierwszy rzut oka.</p>
          </div>
      </Description>

      <Offer background={data.backgroundOffer.fluid.src}>
        <Curtain />
          <h2>{intl.formatMessage({id: "offer"})}</h2>
          <div className="text">
            <h3>{intl.formatMessage({id: "cleaning"})}:</h3>
            <ul >
              <li>pokoi hotelowych</li>
              <li>sal konferencyjnych oraz recepcji</li>
              <li>domów i apartamentów</li>
              <li>hal produkcyjnych</li>
              <li>szkół</li>
              <li>przedszkoli</li>
              <li>apartamentów wakacyjnych</li>
              <li>po remontach</li>
            </ul>
          </div>

      </Offer>

      <SectionMap >
        <div className="woman">
          <Image fixed={data.woman.fixed} />
        </div>
        <div className="map">

          <h2>Nasze usługi sprzątające oferujemy na terenie całej Holandii!</h2>
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
     

        <ContactForm  title="Napisz nam jakiego rodzaju usługi potrzebujesz!" />

        <PhoneBaner phoneNumber="123 123 123"/>
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


    

}
`


export default  IndexPage;
