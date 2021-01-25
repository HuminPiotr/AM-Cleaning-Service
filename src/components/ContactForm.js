import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {useIntl} from 'gatsby-plugin-intl';

import background from '../assets/images/section5.jpg';

const StyledWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    max-height: 1080px;
    padding: 50px;
    display: flex;
    justify-content: flex-end;
    background-image : url(${background});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 640px){
        padding: 25px 10px;
        background-image: none;
        background-color: white;
    }
`
const StyledContantForm = styled.div`
    width: 60vw;

    legend{
        margin-bottom: 25px;
        font-size: ${({theme}) => theme.fontSize.big};
        font-weight: ${({theme}) => theme.fontWeight.bold};
    }

    input{
        font-size: ${({theme}) => theme.fontSize.regular};
        margin-bottom: 20px;
    }
    label{
        width: 100%;
        font-size: ${({theme}) => theme.fontSize.regular};
        margin-left: 5px;
        margin-bottom: 5px;
    }
    .field{
        display: flex;
        flex-direction: column;
    }

    #email,#message{
        
        font-family: "Lato";
        border-radius: 9px;
        border-color: ${({theme}) => theme.color.darkblue};
        filter: drop-shadow(7px 7px 1px ${({theme}) => theme.color.darkblue});
        vertical-align:middle;
        padding: 25px;
        

        &:active,&:focus{
            box-shadow: 0;
            outline: none;
        }
    }
    #email{
        width: 50%;
        height: 63px;
    }
    #message{
        min-width: 80%;
        /* min-height: 45vh; */
        min-height: 300px;
        resize: none;
        font-style: oblique;
        font-size: ${({theme}) => theme.fontSize.regular};
    }

    @media (max-width: 640px){
        width: 100%;
        
        

        legend{
            font-size: ${({theme}) => theme.fontSize.veryBig};
            margin: 0;
            margin-bottom: 25px;
            text-align: center;
        }
        .field{
            padding: 10px 15px;
            padding-top: 0;
        }
        #email{
            width: 100%;
        }
        .button{
            margin: 10px 15px;
        }
    }
`

const StyledButton = styled.div`
    position: relative;
    margin: 35px 15px;
    float: right;
    border-radius: 15px;
    font-size: ${(props) => props.theme.fontSize.big};
    background-color: ${(props) => props.theme.color.coral};
   
    transition: .2s;
    z-index:0;

    #submit{
        background: 0;
        border: 0;
        outline:0;
        padding: 18px 34px;
        margin-bottom: 0;
        color: ${(props) => props.theme.color.gray};
        z-index: 2;
        cursor: pointer;
        }

    &:hover{
        border-radius: 0;

         .hoverEffect {
            height: 95%;
        }
        #submit{
            color: black;
        }
    }
    .hoverEffect{
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:0%;
        background-color: ${(props) => props.theme.color.gray};
        transition: 0.3s;
        z-index: -1;

    }

 
`

const ContactForm = ({title}) => { 
const intl = useIntl();

const [formState, setFormState] = useState({
    email: "",
    message: "",
})



const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join('&');
}

const handleChange = e => {
    setFormState({
        ...formState,
        // [e.target.name]: e.target.value,
        "email": document.querySelector('#email').value,
        "message": document.querySelector('#message').value,
    })

    console.log(e.target.value);
}

const handleSubmit = e => {
    fetch('/', {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formState})
    })
        .then(() => alert(intl.formatMessage({id: "succes"})))
        .catch(error => alert(error));

    e.preventDefault();
}

return(
    <StyledWrapper className="contactFormSection" setState={setFormState}>
        <StyledContantForm >
            <form name="contact" method="post" data-netlify="true"  data-netlify-honeypot="bot-field" onSubmit={handleSubmit} >

                <input type="hidden" name="form-name" value="contact" />

                <legend >{title}</legend>
                <div className="field">
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={formState.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                <div className="field">
                    <label for="mesage">{intl.formatMessage({id: "message"})}</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        required
                        wrap="hard" 
                        value={formState.message}
                        onChange={handleChange}  
                    />
                </div>

                <div>
                    <div data-netlify-recaptcha="true"></div>
                </div>
                
                <StyledButton type="submit" className="button">
                    <div className="hoverEffect"></div>
                    <input type="submit" id="submit" name="submit" value={intl.formatMessage({id: "send"})}></input>
                </StyledButton>

            </form>
        </StyledContantForm>
    </StyledWrapper>
)
}

// PROP-TYPES //
ContactForm.propTypes = {
    title: PropTypes.string,
}

ContactForm.defaultProps = {
    title: ''
}



export default ContactForm;