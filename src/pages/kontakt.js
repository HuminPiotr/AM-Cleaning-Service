import React, {useContext} from "react"
import styled from 'styled-components'
import {useIntl} from 'gatsby-plugin-intl';

import SEO from "../components/seo"
import ContactForm from '../components/ContactForm'

import phoneIcon from '../assets/images/phone.svg'
import emailIcon from '../assets/images/email.svg'
import facebookIcon from '../assets/images/roundedFacebookIcon.svg'
import { AppContext } from "../components/AppContext";

const title = "Kontakt";


// CSS //

const StyledWrapper = styled.div`
h1{
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.gross};
}
@media (max-width: 640px){
    margin-top: 90px;
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

    a{
        text-decoration: underline;
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
    .info__phone{
        a:hover{
            transition: .2s;
            color: ${({theme}) => theme.color.darkblue};
        }
    }
    .info__email{
        a:hover{
            transition: .2s;
            color: ${({theme}) => theme.color.coral};
        }
    }
    .info__facebook{
        a:hover{
            transition: .2s;
            color: ${({theme}) => theme.color.blue};
        }
    }

    @media (min-width: 641px) and (max-width: 1000px){
        .contactDiv{
            flex-direction: column;
            padding: 0 15px;
        }
        .icon{
            margin: auto;
        }
        text-align: center;
    }

    @media (max-width: 640px){
        text-align: center;
        a{
        font-size: 4.5vw;

        }
        .icon{
            margin: auto;
            width: 40%;
        }
        .contactDiv{
            flex-direction: column;
            padding: 0 15px;
        }

        .info__facebook {
            .icon{
                width: 30%;
            }
        }
    }
`

// COMPONENT //
const ContactPage = () => {
    const intl = useIntl();
    // const locale = intl.locale !=="pl" ? `/${intl.locale}` : "";

    const {contactInfo: {phone, email, facebook, facebookGroup}} = useContext(AppContext);


    return(
    <StyledWrapper>
    <SEO title={title} />
    <h1>{intl.formatMessage({id: "contact"})}</h1>
    <InfoSection className="info">
        <div className="info__phone contactDiv">
            <img src={phoneIcon} className="icon" alt="phone-icon"/>
            <div className="text">
                <p>{intl.formatMessage({id: "phoneNumber"})}</p>
                <strong><a href={`tel: ${phone}`}>{phone}</a></strong>
            </div>
        </div>
        <div className="info__email contactDiv">
            <img src={emailIcon} className="icon" alt="email-icon"/>
            <div className="text">
                <p>Email:</p>
                <strong><a href={`mailto: ${email}`}>{email}</a></strong>
            </div>
        </div>
        <div className="info__facebook contactDiv">
            <img src={facebookIcon} className="icon" alt="facebook-icon"/>
            <div className="text">
                <p>Facebook:</p>
               <strong><a href={facebook} target="_blank" > facebook.com/AMKocon</a></strong>
                <p>{intl.formatMessage({id: "facebookGroup"})}:</p>
               <strong> <a href={facebookGroup} target="_blank" > facebook.com/groups/995047077598629</a></strong>
            </div>
        </div>

    </InfoSection>
    <ContactForm title={intl.formatMessage({id: "contactFormContact"})}></ContactForm>
    </StyledWrapper>

)
}

export default  ContactPage
