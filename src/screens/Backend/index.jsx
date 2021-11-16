import React, { useState, useEffect} from "react";
import  NodeIcon  from "../../assets/icons8-nodejs-48.png";
import SpringIcon  from "../../assets/spring.png";
import  ServidorImg  from "../../assets/cloud.png";
import Elixir from '../../assets/elixir.png'
import  './styles.css'
import Navbar from '../../compoents/Navbar'
import { useLocation } from "react-router-dom"

export default () => {
  const location = useLocation()
  const [logou, setLogou] = useState(false)

  useEffect(() => {
    setLogou(location.state?.logado)
  })

  return (
    <>
   { logou ? (
   <> 
   <Navbar/>
      <div className="corpo-backend">
        <div className="descricao">
          <img className="servidor-img" src={ServidorImg} alt="servidor-img"/>

          <div className="descricao-texto">
            <p className="paragrafo-descricao">
              Venha para o mundo do Back-end onde nos relacionamos com o que
              está por trás das aplicações desenvolvidas na programação, tudo
              que estrutura e apoia às ações na máquina, onde fazemos a mágica
              que você não vê.
            </p>
          </div>
        </div>
        <div className="mercado">
          <div className="mercado-bloco">
            <h1 className="mercado-titulo">Salário</h1>
            <p className="texto-mercado">
              a média salarial do programador back-end está entre os mais bem
              pagos do mercado com uma faixa de R$5.940,79 segundo:
              <a className="fonte" href="https://pesquisa.codigofonte.com.br/">
                fonte
              </a>
            </p>
          </div>
          <div className="mercado-bloco">
            <h1 className="mercado-titulo">Vagas</h1>
            <p className="texto-mercado">
              O número de vagas na área de tecnologia cresceu 310% no último ano
              segundo:
              <a
                className="fonte"
                href="https://valorinveste.globo.com/objetivo/empreenda-se/noticia/2021/01/10/mercado-de-tecnologia-tem-aumento-de-310percent-de-vagas-em-2020.ghtmlfonte"
              >
                fonte
              </a>
            </p>
          </div>
        </div>

        <div className="subcategorias">
          <div className="icon-subcategoria">
            <img className="icon" src={NodeIcon} alt="node-icon"/>
          </div>
          <h1 className="titulo-subcategorias">Node Js</h1>
        </div>

        <div className="video-subcategorias">
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/videoseries?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/videoseries?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/videoseries?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/videoseries?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <div className="subcategorias">
          <div className="icon-subcategoria">
            <img
              alt="svgImg"
              className="icon"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMyNmUwN2Y7Ij48cGF0aCBkPSJNIDExIDMgTCAxMSA4LjE1ODIwMzEgQyAxMC42NTMgOC4wMTcyMDMxIDkuOTA0MTU2MiA4IDkuNTM1MTU2MiA4IEMgNi43NTkxNTYzIDggNC4xODk0NTMxIDkuMzA2IDQuMTg5NDUzMSAxMyBDIDQuMTg5NDUzMSAxNy40MiA3LjY3IDE4IDEwIDE4IEMgMTAuOTIgMTggMTMgMTcuOTA5MTQxIDE0IDE3LjYxOTE0MSBMIDE0IDMgTCAxMSAzIHogTSAxNiAzIEwgMTYgNiBMIDE5IDYgTCAxOSAzIEwgMTYgMyB6IE0gMTYgOCBMIDE2IDE2LjcwMTE3MiBDIDE2IDE4LjIxNzE3MiAxNS4wNzggMTkuNzk1MTcyIDEzIDIwLjcwMTE3MiBMIDE1Ljg1OTM3NSAyMS45OTYwOTQgQyAxOC43NjUzNzUgMjAuOTk2MDk0IDE5IDE3LjcwMTE3MiAxOSAxNi43MDExNzIgTCAxOSA4IEwgMTYgOCB6IE0gOS45NzA3MDMxIDEwLjU1MDc4MSBDIDEwLjI5MDcwMyAxMC41NTA3ODEgMTAuNjUgMTAuNjA5NDUzIDExIDEwLjY4OTQ1MyBMIDExIDE1LjM5MjU3OCBDIDEwLjY1IDE1LjQ3MjU3OCAxMC4yOTA3MDMgMTUuNTMzMjAzIDkuOTcwNzAzMSAxNS41MzMyMDMgQyA4LjY2MDcwMzEgMTUuNTMzMjAzIDcuMzkwNjI1IDE1LjEyIDcuMzkwNjI1IDEzIEMgNy4zOTA2MjUgMTAuODggOC42NjA3MDMxIDEwLjU1MDc4MSA5Ljk3MDcwMzEgMTAuNTUwNzgxIHoiPjwvcGF0aD48L3N2Zz4="
            />
          </div>
          <h1 className="titulo-subcategorias">Django</h1>
        </div>

        <div className="video-subcategorias">
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/K0pVZmw_pJU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/LZsjuSBW5YM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/UIvnNCQnejw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/QsdOFr_1vPU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="subcategorias">
          <div className="icon-subcategoria">
            <img className="icon" src={SpringIcon} alt="spring-icon"/>
          </div>
          <h1 className="titulo-subcategorias">Spring</h1>
        </div>

        <div className="video-subcategorias">
        <iframe width="280" 
      height="155" 
      src="https://www.youtube.com/embed/videoseries?list=PL8iIphQOyG-DHLpEx1TPItqJamy08fs1D" 
      title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen/>
      <iframe width="280" 
      height="155" 
      src="https://www.youtube.com/embed/videoseries?list=PLmPk8AhMVhETu1h9ZgVZyvquzrY4BwVWS" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen/>
      <iframe width="280" 
      height="155" 
      src="https://www.youtube.com/embed/videoseries?list=PLA8Qj9w4RGkVOj-xGYJCHJ0Ob4CMg-8NI" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen/>
      <iframe width="280" 
      height="155" 
      src="https://www.youtube.com/embed/videoseries?list=PLA9FYWyBXCEb3XchOe9bY7aWPAjobwsR9" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen/>
        </div>

        <div className="subcategorias">
          <div className="icon-subcategoria">
            <img className="icon" alt="elixir-icon" src={Elixir} />
          </div>
          <h1 className="titulo-subcategorias">Elixir</h1>
        </div>

        <div className="video-subcategorias">
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/videoseries?list=PLI2camS-pHm_9_M-hZmOwBTI1Cjsrt2CK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/videoseries?list=PLTd5ehIj0goPm2HGj-YVy-IlIfBXDL9NC"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/videoseries?list=PLA8Qj9w4RGkVOj-xGYJCHJ0Ob4CMg-8NI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <iframe
            width="280"
            height="155"
            src="https://www.youtube.com/embed/videoseries?list=PLA9FYWyBXCEb3XchOe9bY7aWPAjobwsR9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <div className="avaliacoes">

          <div className="avaliacoes-cards">
            <div className="avaliacao">
              <h1 className="nome-avaliacao">Lucas Alexandre</h1>
              <p className="texto-avalicao">
                Conequi obter a base para meu crescimento sólido na programação
              </p>
            </div>
            <div className="avaliacao">
              <h1 className="nome-avaliacao">Andson</h1>
              <p className="texto-avalicao">
                Òtima plataforma que reune de forma gratuita alguns dos melhores
                cursos
              </p>
            </div>

            <div className="avaliacao">
              <h1 className="nome-avaliacao">Lucas Torres</h1>
              <p className="texto-avalicao">
                Tive acesso de forma a livre a conteúdos que levaram aos
                caminhos corretos
              </p>
            </div>
          </div>
        </div>
      </div> </>): <p>não logado</p>}
    </>
  );
};
