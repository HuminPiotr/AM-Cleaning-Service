import React from 'react'
import styled from 'styled-components'

import {useIntl} from 'gatsby-plugin-intl';



// CSS //
const StyledNoticeCard = styled.div`
    position: relative;
    width: 400px;
    max-width: 30%;
    min-height: 430px;
    border: solid 2px black;
    padding: 37px 42px;
    box-shadow: 7px 7px 4px 4px ${({theme}) => theme.color.gray};
    
    margin-bottom: 50px;
    background:white;
    
    hr{
        width: 50%;
        margin: 0 auto;
        height: 5px;
        background: black;
        margin-bottom: 25px;
    }
    h2,aside{
        text-align: center;
    }
    .icon{
        cursor: pointer;
        text-align: right;
        transition: .3s;
        position: absolute;
        bottom: 25px;
        right: 25px;
    }
    .icon:hover{
        transform: translateY(-10%);
    }

    @media (min-width: 641px) and (max-width: 1000px){
        max-width: 50%;
    }

    @media (max-width: 600px){
        font-size: 20px;
    }
`

// COMPONENT //
const NoticeCard = ({cardObject, id}) => {
    const {title, date, text} = cardObject;

    const intl = useIntl();
    const locale = intl.locale !=="pl" ? `${intl.locale}` : "pl";

    

    const handleClick = (e) => {
        const emailContent = locale === 'pl' 
            ? `Dzień dobry! \nJestem zainteresowany/a ogłoszeniem "${title}". \n...  
            `
            : `Hallo! \nIk ben geïnteresseerd in de aankondiging "${title}."
            \n...`
            
        const textArea = document.querySelector('#mesage');
        const contactFormSection = document.querySelector('.contactFormSection');
        textArea.value = emailContent;
        contactFormSection.scrollIntoView({behavior:"smooth"});
        // startAnimation(e.target);
    }

    // const startAnimation = (target) => {
    //     console.log(target);
    // }


    return(
        <StyledNoticeCard className="noticeCard" >
            <hr />
            <article>
                <h2>{title}</h2>
                <aside>{intl.formatMessage({id: "date"})}: {date}</aside>
                <p>{text}</p>
            </article>
            <button onClick={handleClick}>
            <div className="icon">
                <svg width="71" height="53" viewBox="0 0 71 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.5625 0H4.4375C3.2606 0 2.13191 0.465326 1.29971 1.29361C0.467521 2.1219 0 3.24529 0 4.41667V48.5833C0 49.7547 0.467521 50.8781 1.29971 51.7064C2.13191 52.5347 3.2606 53 4.4375 53H66.5625C67.7394 53 68.8681 52.5347 69.7003 51.7064C70.5325 50.8781 71 49.7547 71 48.5833V4.41667C71 3.24529 70.5325 2.1219 69.7003 1.29361C68.8681 0.465326 67.7394 0 66.5625 0ZM63.1456 48.5833H8.12062L23.6519 32.595L20.4569 29.5254L4.4375 46.0217V7.77333L32.0166 35.0904C32.848 35.913 33.9727 36.3748 35.145 36.3748C36.3173 36.3748 37.442 35.913 38.2734 35.0904L66.5625 7.08875V45.7346L50.2325 29.4812L47.1041 32.595L63.1456 48.5833ZM7.34406 4.41667H62.9681L35.145 31.9546L7.34406 4.41667Z" fill="black"/>
                </svg>
            </div>
            </button>


        </StyledNoticeCard>
    )
}
 export default NoticeCard;