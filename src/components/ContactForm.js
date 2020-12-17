import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

import background from '../assets/images/section5.jpg';

const StyledWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    max-height: 844px;
    padding: 50px;
    display: flex;
    justify-content: flex-end;
    background-image : url(${background});
    background-repeat: no-repeat;
    background-size: cover
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

    #email,#mesage{
        
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
    #mesage{
        min-width: 80%;
        min-height: 45vh;
        resize: none;
        font-style: oblique;
        font-size: ${({theme}) => theme.fontSize.regular};
    }

`

const StyledButton = styled.div`
    position: relative;
    margin: 50px 15px;
    float: right;
    border-radius: 15px;
    font-size: ${(props) => props.theme.fontSize};
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

const ContactForm = ({title}) => (
    <StyledWrapper className="contactFormSection">
        <StyledContantForm >
            <form name="" method="POST" data-netlify="true">
                <legend >{title}</legend>
                <div className="field">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>

                <div className="field">
                    <label for="mesage">Wiadomość</label>
                    <textarea name="mesage" id="mesage" required wrap="hard"  />
                </div>
                
                <StyledButton>
                    <div className="hoverEffect"></div>
                    <input type="submit" id="submit" value="Wyślij"></input>
                </StyledButton>
            </form>
        </StyledContantForm>
    </StyledWrapper>
);

// PROP-TYPES //
ContactForm.propTypes = {
    title: PropTypes.string,
}

ContactForm.defaultProps = {
    title: ''
}



export default ContactForm;