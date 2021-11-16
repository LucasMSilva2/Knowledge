import React, {useState, useEffect} from "react";
import "./styles.css";
import {
  Titulo,
  Area,
  TituloGame,
  AreaAlign,
  ImageGame,
  Description,
  GameLink,
  GameArea,
  InfoArea,
} from "./style";

import flaxboxfroggy from "./Images/flaxboxfroggy.jpg";
import flexboxdefense from "./Images/flexboxdefense.jpg";
import gridgarden from "./Images/gridgarden.jpg";
import { useLocation } from "react-router-dom"
import Navbar from '../../compoents/Navbar'


export default () => {
  const location = useLocation()
  const [logou, setLogou] = useState(false)

  useEffect(() => {
    setLogou(location.state?.logado)
  })

  return (
    <>
    
    {logou != null & logou ? (
    <>
    <Navbar/>
    <Area>
      <AreaAlign>
        <Titulo className="TextoTituloArea">
          Nessa página você vai se deparar com alguns jogos CSS para te ajudar a
          codar e treinar o seu desenvolvimento. Disponibilizamos 3 jogos para
          você se divertir, aprender e praticar!
        </Titulo>

        <GameArea className="TextoGameArea">
          <ImageGame className="ImageAnimation" src={flaxboxfroggy} />
          <InfoArea >
            <TituloGame className="TextoGameArea">FlexBox Froggy</TituloGame>
            <Description className="TextoGameArea">
              Flexbox Froggy é um jogo onde você ajuda o sapo e seus amigos
              escrevendo código CSS! Guie este sapo até a vitória-régia à
              direita usando a propriedade justify-content. Para treinar
              suas habilidades, clique no link a baixo e se divirta com Flexbox
              <GameLink className="TextoGameArea" href="https://flexboxfroggy.com/" target="_blank">
                Jogar Flexboxfroggy
              </GameLink>
            </Description>
          </InfoArea>
        </GameArea>

        <GameArea>
        <ImageGame className="ImageAnimation" src={flexboxdefense} />
        <InfoArea>
        <TituloGame className="TextoGameArea">Flexbox Defense</TituloGame>
        <Description className="TextoGameArea">
          Seu trabalho é impedir que os inimigos que chegam passem por suas
          defesas. Ao contrário de outros jogos de defesa da torre, você deve
          posicionar suas torres usando CSS! Para  treinar suas habilidades,
          clique no link a baixo e se divirta com Flexbox Defense.{" "}
          <GameLink className="TextoGameArea" href="http://www.flexboxdefense.com/" target="_blank">
            Jogar Flexboxdefense
          </GameLink>
        </Description>
        </InfoArea>
        </GameArea>


        <GameArea>
        <ImageGame className="ImageAnimation" src={gridgarden} />
        <InfoArea>
        <TituloGame className="TextoGameArea">Grid Garden</TituloGame>
        <Description className="TextoGameArea">
          No Grid Garden você escreve código em CSS para cultivar seu jardim de
          cenouras! Regar apenas as áreas que possuem cenouras usando a
          propriedade grid-column-start. Por exemplo, vai regar a área a partir
          da 3ª linha de grade vertical, que é outra maneira de dizer a terceira
          fronteira vertical da esquerda na grade grid-column-start: 3;. Para
           treinar suas habilidades, clique no link a baixo e se divirta com
          Grid Garden.
          <GameLink className="TextoGameArea" href="https://cssgridgarden.com/" target="_blank">
            Jogar Grid Garden
          </GameLink>
        </Description>
        </InfoArea>
        </GameArea>

      </AreaAlign>
    </Area>
    </>): <p>não logado</p>}
    </>
    
  );
};
