import React from "react"
import styled from 'styled-components'

import SEO from "../components/seo"
import ContactForm from '../components/ContactForm'

import phoneIcon from '../assets/images/phone.svg'
import emailIcon from '../assets/images/email.svg'
import facebookIcon from '../assets/images/roundedFacebookIcon.svg'

const title = "Kontakt";


// CSS //

const StyledWrapper = styled.div`
h1{
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.gross};
}
`

const InfoSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 10%;
    margin-bottom: 50px;

    p,strong,a{
        font-size: ${({theme}) => theme.fontSize.big};
    }

    .icon{
        max-width:162px;
        max-height: 130px;
        margin-right: 50px;
        
    }
    .contactDiv{
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        
    }
    .info__facebook{
        a:hover{
            transition: .2s;
            color: ${({theme}) => theme.color.blue};
        }
    }
`

// COMPONENT //
const ContactPage = () => (
    <StyledWrapper>
    <SEO title={title} />
    <h1>Kontakt</h1>
    <InfoSection className="info">
        <div className="info__phone contactDiv">
            <img src={phoneIcon} className="icon"/>
            <div className="text">
                <p>Numer telefonu:</p>
                <strong><a href="tel: +31123123123">+31 123 123 123</a></strong>
            </div>
        </div>
        <div className="info__email contactDiv">
            <img src={emailIcon} className="icon"/>
            <div className="text">
                <p>Email:</p>
                <strong><a href="mailto: mail@hotmail.com ">email@hotmail.com</a></strong>
            </div>
        </div>
        <div className="info__facebook contactDiv">
            <img src={facebookIcon} className="icon"/>
            <div className="text">
                <p>Facebook:</p>
               <strong><a href="https://www.facebook.com/AMKocon/" target="_blank" > facebook.com/AMKocon</a></strong>
                <p>Grupa ofery pracy sprzątanie Facebook:</p>
               <strong> <a href="https://www.facebook.com/groups/995047077598629/?ref=share" target="_blank" > facebook.com/groups/995047077598629</a></strong>
            </div>
        </div>

    </InfoSection>
    <ContactForm title="Formularz kontaktowy"></ContactForm>
    </StyledWrapper>

)

export default  ContactPage
