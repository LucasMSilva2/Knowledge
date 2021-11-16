import styled from "styled-components";

export const Titulo = styled.h1`
display: flex;
margin-top: 50px;
margin-bottom: 100px;
font-size: 18px;
width: 70%;
align-self: center;
line-height: 23px;
font-weight: 400;

`

export const Description = styled.h2`
font-size: 20px;
align-self: center;
text-align: justify-all;
line-height: 25px;
margin-bottom: 15px;
margin-top: 30px;
color: #fff;
font-weight: 400;
width: 90%:
`
export const GameLink = styled.a`
margin-left: 15px;
&:hover {
    color: #fff;
    font-weight: bold;
}
`

export const GameArea = styled.div`
flex-direction: row;
justify-content: flex-start;
align-items: flex-start;
display: flex;
margin-bottom: 20px;
`

export const InfoArea = styled.div`
flex-direction: column;
max-width: 50%;
margin-left: 20px;
`


export const Area = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
align-self: center;
`

export const AreaAlign = styled.div`
display: flex;
width: 90%;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const ImageGame = styled.img`
min-width: 600px;
border-radius: 15px;
`

export const TituloGame = styled.h1`
display: flex;
margin-bottom: 15px;
font-size: 35px;
font-family: 'Mukta', sans-serif;
`



