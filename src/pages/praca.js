import React, { useContext } from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import NoticeCard from '../components/NoticeCard'
import Button from '../components/Button';
import ContactForm from  '../components/ContactForm';
import PhoneBaner from '../components/PhoneBaner'
import SEO from "../components/seo"

import {useIntl} from 'gatsby-plugin-intl';

import backgroundFb from '../assets/images/backgroundFbSection.svg';
import iconFb from '../assets/images/roundedFacebookIcon.svg';
import star1  from '../assets/images/star1.png'
import star2  from '../assets/images/star2.png'
import star3  from '../assets/images/star3.png'
import { AppContext } from "../components/AppContext";


const StyledWrapper = styled.section`
    h1{
        margin: 25px;
        width: 100%;
        text-align: center;
        font-size: ${({theme}) => theme.fontSize.gross};
    }

    .noticeBoard{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        padding: 25px 5%;
        flex-shrink: -1;
        flex-grow: 1;
        justify-content: space-evenly;

        &__info{
            color: ${({theme}) => theme.color.teal};
            font-size: ${({theme}) => theme.fontSize.big};
            margin-bottom: 100px;
        }
    }
    .star{
        position: absolute;
        z-index: -1;
        transform:scale(0);
    }
    .sal-animate{
        animation-name: starAnimation;
         animation-duration: .4s;
         animation-delay: 0s;
         animation-fill-mode: forwards;
    }
    #star1{
        top: -5%;
        left: 15%;
        animation-delay: 2.5s;
        @media (min-width: 641px) and (max-width: 1000px){
            top: -10%;
        }
    }
    #star2{
        top: -10%;
        right: 15%;
    }
    #star3{
        top: 0%;
        left: 5%;
        animation-delay: 1s;
    }
    .facebookSection{
        position: relative;
        width:100vw;
        height: 75vh;
        max-height: 1000px;
        padding-bottom: 75px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${backgroundFb});

        &__content{
            position: absolute;
            bottom: 15%;
            left: 50%;
            margin-right: -50%;
            transform: translateX(-50%);
            margin: auto;
            display: flex;
             justify-content: center;
             align-items: center;
            text-align: center;
 

            h2{
                font-size: ${({theme}) => theme.fontSize.veryBig};
                padding: 0 25px;
            }

        }

    }
    @media (min-width: 641px) and (max-width: 1000px){
        .facebookSection__content{
            width: 80%;
        }
    }

    @media (max-width: 640px){

        .star{
            display: none;
        }
        h1{
            margin: 0;
            margin-top: 90px;
        }
        .noticeBoard{
            
            .noticeCard{
                max-width: 100%;
            }
        }

        .facebookSection{
           &__content{
               top: 40%;
               margin: auto;
               width: 100%;
               padding: 25px;
               flex-direction: column;
         
           }
           &__icon{
               width: 100px;
           }
            h2{
                font-size: ${({theme}) => theme.fontSize.veryBig}
            }
        }
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
`





const WorkPage = ({data}) => {

    const intl = useIntl();

    const {language, contactInfo: {facebookGroup}} = useContext(AppContext);

    const filtredNoticeCardList = data.allDatoCmsOgloszenie.nodes.filter((item) => item.locale.includes(language.first) && !item.archive);

    
    
    const noticeCardList = filtredNoticeCardList.map( (item, index) => 
    <NoticeCard id={item.id} cardObject={{title: item.title, date: item.date, text: item.content}} key={item.id}/>
    );

    


    return(
        <StyledWrapper>
        <SEO title={intl.formatMessage({id: "work"})} />
            <h1>{intl.formatMessage({id: "actualAnnouncements"})}</h1>
            <div className="noticeBoard">
                {noticeCardList.length <= 0 ? <p className="noticeBoard__info">W tej chwili nie mamy żadnych nowych ogłoszeń. </p>: noticeCardList}

                {/* *** STARS *** */}
                <img src={star2} alt="star" id="star2" className="star"
                    data-sal="slide-left"
                    data-sal-delay="0"
                    data-sal-easing="ease"
                />
                <img src={star3} alt="star" id="star3" className="star"
                    data-sal="slide-left"
                    data-sal-delay="0"
                    data-sal-easing="ease"
                />
            </div>

            <section className="facebookSection">
                {/* *** STAR */}
                <img src={star1} alt="star" id="star1" className="star" 
                    data-sal="zoom-in"
                    data-sal-delay="0"
                    data-sal-easing="ease"
                    
                />

                <div className="facebookSection__content">
                    <img src={iconFb} className="facebookSection__icon" alt="facebook-icon"/>
                    <div className="facebookSection__content-text">
                        <h2>{intl.formatMessage({id: "facebookGroupBaner"})}</h2>
                        <Button link={facebookGroup} target="_blank">{intl.formatMessage({id: "join"})}</Button>
                    </div>
                </div>
            </section>

            
                <ContactForm  title={intl.formatMessage({id: "contactFormWork"})} />
                <PhoneBaner />
            

        </StyledWrapper>

    
    )
    }





export const query = graphql`
{
    allDatoCmsOgloszenie {
      nodes {
        date
        title
        content
        id
        locale
        archive
      }
    }
  }
`

export default  WorkPage
