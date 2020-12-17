import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import NoticeCard from '../components/NoticeCard'
import Button from '../components/Button';
import ContactForm from  '../components/ContactForm';
import PhoneBaner from '../components/PhoneBaner'
import SEO from "../components/seo"


import backgroundFb from '../assets/images/backgroundFbSection.svg';
import iconFb from '../assets/images/roundedFacebookIcon.svg';
import star1  from '../assets/images/star1.png'
import star2  from '../assets/images/star2.png'
import star3  from '../assets/images/star3.png'

const title = "Praca"

const StyledWrapper = styled.div`
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
        left: 10%;
        animation-delay: 2.5s;
    }
    #star2{
        top: -10%;
        right: 15%;
    }
    #star3{
        bottom: 40%;
        right: 15%;
        animation-delay: 1s;
    }
    .facebookSection{
        position: relative;
        width:100vw;
        height: 75vh;
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
            &-text{
                /* width:40%; */
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
const cardObject = {
    title: "Sprzątanie domków letniskowych Gouda",
    date: "24.04.2021",
    text: "Lotem ipsun dolor Lotem ipsun dolor Lotem ipsun dolor Lorem ipsum."
  }

  const groupFbLink = "https://www.facebook.com"

const WorkPage = ({data}) => {

    const noticeCardList = data.allDatoCmsOgloszenie.nodes.map( (item, index) => 
        <NoticeCard id={item.id} cardObject={{title: item.title, date: item.date, text: item.content}} />
    );

    return(
        <StyledWrapper>
        <SEO title={title} />
            <h1>Aktualne ogłoszenia</h1>
            <div className="noticeBoard">
                {noticeCardList}

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
                        <h2>Dołącz do naszej grupy z ofertami pracy na facebooku!</h2>
                        <Button link={groupFbLink} target="_blank">Dołącz</Button>
                    </div>
                </div>
            </section>

            
                <ContactForm  title="Chcesz dołączyć do naszego zespołu? Napisz!" />
                <PhoneBaner phoneNumber="123 123 123"/>
            

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
      }
    }
  }
`


export default  WorkPage
