import React from 'react'
import { Container, ImgSection, LoginContent, Title, StyledForm, StyledFormWrapper, StyledInput, StyledFieldset, StyledTextArea, StyledButton } from './ContactElements'
import garçonete from '../../images/garçonete.png'



function Contact() {
    return (
        <Container>
            
            <ImgSection>
                <img src={garçonete} alt="garçonete"/>
            </ImgSection>
                <StyledFormWrapper>
        <StyledForm>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email" 
          />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
               
              />
              Male
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea
            name="message"
           
          />
          
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
            {/* </LoginContent> */}
        
        </Container>
    )
}

export default Contact