import React from 'react';
import  './navbar.css'
import {Nav, LinkButton,ButtonKnow} from './styles.js'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom"

export default () => {
  const location = useLocation()
  const navigate = useHistory();
 
  return (
    <Nav >
      <ul className="navbar-items">
        <li className="navbar-item" id="navbar-marca">
        <ButtonKnow className="Link_know" onClick={()=> navigate.push('/home', {logado: true, usermethod: location?.state?.usermethod})}> - Knowledge</ButtonKnow>

        </li>
        
        <li className="navbar-item">
          <LinkButton className="Link" onClick={()=> navigate.push('/home', {logado: true, usermethod: location?.state?.usermethod})}>Home</LinkButton>
        </li>

        <li className="navbar-item">
          <LinkButton className="Link" onClick={()=> navigate.push('/backend', {logado: true, usermethod: location?.state?.usermethod})}>Backend</LinkButton>
        </li>

        <li className="navbar-item">
          <LinkButton className="Link" onClick={()=> navigate.push('/frontend', {logado: true, usermethod: location?.state?.usermethod})}>Frontend</LinkButton>
        </li>

        <li className="navbar-item">
          <LinkButton className="Link" onClick={()=> navigate.push('/datascience', {logado: true, usermethod: location?.state?.usermethod})}>DataScience</LinkButton>
        </li>

        <li className="navbar-item">
          <LinkButton className="Link" onClick={()=> navigate.push('/mobile', {logado: true, usermethod: location?.state?.usermethod})}>Mobile</LinkButton>
        </li>

        <li className="navbar-item">
          <LinkButton className="Link" onClick={()=> navigate.push('/games', {logado: true, usermethod: location?.state?.usermethod})}>Games</LinkButton>
        </li>

        <li className="navbar-item">
          <LinkButton className="Link" onClick={()=> navigate.push('/dashboard', {logado: true, usermethod: location?.state?.usermethod})}>Dashboard</LinkButton>
        </li>

       
 
             
      </ul>
    </Nav>

  );
};
