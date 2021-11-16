import React from "react";
import ML from "../../assets/ml.png";
import BigData from "../../assets/bigData.png";
import IA from "../../assets/IA.png";
import DC from "../../assets/DC.png";
import Pandas from "../../assets/pandas.png";
import './styles.css'


import Navbar from '../../compoents/Navbar'
import { useLocation } from "react-router-dom"

export default () => {
  const location = useLocation()
  const [logou, setLogou] = React.useState(false)

  React.useEffect(() => {
    setLogou(location?.state?.logado)
  })

    return(
<>
  { logou ? (
    <>
    <Navbar/>
  <div className="corpo-datascience">
    <div className="descricao">
      <img alt="servidor" src={DC} />

      <div className="descricao-texto">
        <p>
          A área da ciência de dados ajuda empresas e profissionais a tomar
          decisões e se tornou fundamental no mundo 4.0. A demanda por
          profissionais nessa só aumenta e a cultura de dados continua em
          intensa expansão.
        </p>
      </div>
    </div>
    <div className="mercado">
      <div className="mercado-bloco">
        <h1 className="mercado-titulo">Salário</h1>
        <p className="texto-mercado">
          "O salário médio nacional de um Cientista De Dados é de R$ 7.500 por
          mês em Brasil."
          <a
            className="fonte"
            href="https://www.glassdoor.com.br/Sal%C3%A1rios/cientista-de-dados-sal%C3%A1rio-SRCH_KO0,18.htm"
          >
            www.glassdoor.com.br
          </a>
        </p>
      </div>
      <div className="mercado-bloco">
        <h1 className="mercado-titulo">Vagas</h1>
        <p className="texto-mercado">
          "O mercado para quem atua com Data Analytics deve crescer 19% até
          2024"
          <a
            className="fonte"
            href="https://olhardigital.com.br/2021/06/24/pro/levantamento-mostra-aumento-de-mais-de-450-nas-vagas-em-dados/"
          >
            www.olhardigital.com.br
          </a>
        </p>
      </div>
    </div>

    <div className="subcategorias">
      <div className="icon-subcategoria">
        <img className="icon" alt="pandas" src={Pandas} />
      </div>
      <h1 className="titulo-subcategorias">Python Pandas</h1>
    </div>

    <div className="video-subcategorias">
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/hD0uJln4S2Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/iSOQ5Vx43IA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/cC-WWgs7Ilk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/NtlkrWa45qo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <div className="subcategorias">
      <div className="icon-subcategoria">
        <img className="icon" alt="IA-icon" src={IA} />
      </div>
      <h1 className="titulo-subcategorias">IA</h1>
    </div>

    <div className="video-subcategorias">
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/J-fm43XrZ7U"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/XgHTL_kjS4A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/F4A_ZG9KCEk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/d8U7ygZ48Sc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      
    </div>

    <div className="subcategorias">
      <div className="icon-subcategoria">
        <img className="icon" alt="node-icon" src={BigData} />
      </div>
      <h1 className="titulo-subcategorias">BigData</h1>
    </div>

    <div className="video-subcategorias">
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/NmzNlov-HOI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/x57z5YL4Ens"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/TSQxKqqXgfo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/efifoxdgqqw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      
    </div>

    <div className="subcategorias">
      <div className="icon-subcategoria">
        <img className="icon" alt="node-icon" src={ML} />
      </div>
      <h1 className="titulo-subcategorias">Machine learning</h1>
    </div>

    <div className="video-subcategorias">
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/pKc1J4RB_VQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/1degLJSjwwM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/prsXGBrndRg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        width="280"
        height="155"
        src="https://www.youtube.com/embed/7pZ1VXWHuTQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      
    </div>

    <div className="avaliacoes">

        <div className="avaliacao">
          <h1 className="nome-avaliacao">João da Silva</h1>
          <p className="texto-avalicao">"Gostei da base de dados utilizada nos projetos. Bastante interativo."</p>
        </div>

        <div className="avaliacao">
          <h1 className="nome-avaliacao">Roberta Rodrigues</h1>
          <p className="texto-avalicao">"Revi alguns conceitos de estatística e de python e gostei bastante do conteúdo."</p>
        </div>

        <div className="avaliacao">
          <h1 className="nome-avaliacao">Geraldo Oliveira</h1>
          <p className="texto-avalicao">"Ótimo professor, plataforma muito boa, aplicabilidade excelente demonstrada pelos projetos e exemplos."</p>
        </div>
    
    </div>
  </div>
  </>
  ) : (
    <h1>...</h1>
  )}
  </>
);
  }
