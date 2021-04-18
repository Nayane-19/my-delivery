import styled from 'styled-components';

export const Container = styled.div`
width: 100%auto;
height: 5.9rem;
display: flex;
place-content: space-between;
border: solid 2px;
background: #1C1C1C;
`

export const Button = styled.button`
width: 9rem;
height: 3rem;
font-size: 1.2rem;
background: #1C1C1C;
color: #fff;
&:hover {
    background: #363636;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
    outline: none;
}
cursor: pointer;
border-radius: 5px;
justify-content: flex-start;
margin-top: 1rem;
margin-left: 2rem;
outline: none;
text-transform: uppercase;
box-sizing: border-box;
border-radius: 10px;
`