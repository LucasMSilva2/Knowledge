import styled from 'styled-components'

export const DashboardPagina = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #193557;
    align-self: center;
    justify-content: center;
` 
export const DashboardArea = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    align-self: center;
    background-image: linear-gradient(to right, #1357ab 30%, #193557);
    margin-top: 10px;
    border-radius: 10px;
    border: 0.5px solid #c4c4c4;
    margin-bottom: 50px;
    padding:15px;
`

export const CardsArea = styled.div`
    display: flex;
    align-items: colum;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 64%;
    width: 100%;
`


export const DashboardAreaPerfil = styled.div`
    display: flex;
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`
export const AreaPerfil = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    height: 100%;
`


export const PerfilImage = styled.button`
    display: flex;
    margin-left: 40px;
    background-color: #fff;
    min-width: 120px;
    height: 120px;
    border-radius: 100%;
    box-shadow: 5px 4px 6px #193557;
    
`
export const ImagePerfil = styled.img`
height: 280px;
margin-top: 80px;
`

export const PerfilNome = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    margin-left: 20px;
`
export const LogoutButton = styled.button`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    height: 25%;
    width: 10%;
    margin-right: 6px;
    border-radius: 8px;
    border: 0.1px solid #5d6689;
    box-shadow: 4px 4px 6px #193557;
    background: #1959a8;
    color: white;
    transition: 0.5s;
    &:hover {
        color: #333;
        background: #ccc;
        font-weight: bold;
`
export const LogoutButtonText = styled.p`
    color: #fff;
    font-size: 17px;
`

export const CText = styled.p`
  display: flex;
  font-size: 25px;
  color: white;
  margin-top: 25%;
`
export const AreaUser = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  width: 90%;
  align-items: center;
`

export const TextOthers = styled.h1`
font-size: 20px;
margin-bottom: 50px;
color: #fff;
`