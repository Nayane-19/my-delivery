import styled from 'styled-components';

export const Container = styled.section`
    width: 90vw;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;
`;
export const ImgSection = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;


    img {
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        display: flex;
      
    }
`
 export const LoginContent = styled.div`
    border: 1px solid #fff;
    /* display: flex; */
	justify-content: center;
	align-items: center;
	text-align: center;
    color: #fff;
    /* margin: 2rem 2rem; */


`
export const Title = styled.h2`
    /* margin: 15px 0; */
	color: #333;
	text-transform: uppercase;
	font-size: 2rem;
    
    /* img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
       
        
} */

`
// export const InputUser = styled.input`
//     position: relative;
//     display: grid;
//     grid-template-columns: 7% 93%;
//     margin: 25px 0;
//     padding: 5px 0;
//     border-bottom: 2px solid #d9d9d9;
// `
export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  padding: 0 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;

`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
 
`;
export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;