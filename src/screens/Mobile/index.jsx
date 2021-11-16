import React from "react";
import "./styles.css";
import Folder from "../../assets/folder.png";
import Flutter from "../../assets/flutter.png";
import react from "../../assets/react.png";
import Kotlin from "../../assets/kotlin.png";
import Java from "../../assets/java.png";
import Navbar from '../../compoents/Navbar'
import { useLocation } from "react-router-dom"

export default () => {
  const location = useLocation()
  const [logou, setLogou] = React.useState()

  React.useEffect(() => {
    setLogou(location?.state?.logado)
  })
  return (
    <>
    { logou ? (
      <>
      <Navbar/>
    <div className="corpo-mobile">
      <div className="descricao">
        <img className="folder" alt="folder" src={Folder} />

        <div className="descricao-texto">
          <p>
            A graduação em Dev Mobile é uma das mais procuradas no mercado. O
            profissional formado será capaz de atuar no desenvolvimento para
            dispositivos móveis, levando em conta os diferentes sistemas
            operacionais. <br />O desenvolvedor mobile é responsável por todas
            as partes visuais de um projeto de desenvolvimento.
          </p>
        </div>
      </div>

      <div className="mercado">
        <div className="mercado-bloco">
          <h1 className="mercado-titulo">Salário</h1>
          <p className="texto-mercado">
            A faixa salarial do Desenvolvedor Mobile fica entre R$ 3.400,00
            salário mediana da pesquisa e o teto salarial de R$ 10.246,62, sendo
            que R$ 3.975,89 é a média do piso salarial 2021 de acordos coletivos
            levando em conta profissionais em regime CLT de todo o Brasil.
            <a
              className="fonte"
              href="https://www.salario.com.br/profissao/desenvolvedor-mobile-cbo-317110/"
            >
              {" "}
              fonte
            </a>
          </p>
        </div>
        <div className="mercado-bloco">
          <h1 className="mercado-titulo">Vagas</h1>
          <p className="texto-mercado">
            Desenvolvedor Mobile é um cargo que está com altíssima demanda no
            mercado de trabalho brasileiro nos últimos meses. No comparativo
            entre os meses de Setembro de 2020 e Agosto de 2021, tivemos um
            aumento de 34.36% nas contratações formais com carteira assinada em
            regime integral de trabalho.
            <a
              className="fonte"
              href="https://www.salario.com.br/profissao/desenvolvedor-mobile-cbo-317110/"
            >
              {" "}
              Fonte
            </a>
          </p>
        </div>
      </div>

      <div className="subcategorias">
        <div className="icon-subcategoria">
          <img className="icon" alt="node-icon" src={Flutter} />
        </div>
        <h1 className="titulo-subcategorias">Flutter</h1>
      </div>

      <div className="video-subcategorias">
        <iframe
          width="580"
          height="200"
          src="https://www.youtube-nocookie.com/embed/XeUiJJN0vsE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube-nocookie.com/embed/hQ3YsMiahVg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube-nocookie.com/embed/ZupeUUtNaeg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/YtXtMgOckR8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <div className="subcategorias">
        <div className="icon-subcategoria">
          <img className="icon" alt="node-icon" src={react} />
        </div>
        <h1 className="titulo-subcategorias">React Native</h1>
      </div>

      <div className="video-subcategorias">
        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/w59xvG0e_IU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/qV0xARISAzY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/mbJYEM1FuKw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/TgWNLFFBu9s"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <div className="subcategorias">
        <div className="icon-subcategoria">
          <img className="icon" alt="node-icon" src={Kotlin} />
        </div>
        <h1 className="titulo-subcategorias">Kotlin</h1>
      </div>

      <div className="video-subcategorias">
        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/5BSSq921XNo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/a3e7gcEY1lY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/J-gL4ZknigM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/FW4qUo6qvXw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <div className="subcategorias">
        <div className="icon-subcategoria">
          <img className="icon" alt="node-icon" src={Java} />
        </div>
        <h1 className="titulo-subcategorias">Java</h1>
      </div>

      <div className="video-subcategorias">
        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/ZBKxhnqX-Q0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/v_ZCtgwbS3o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/yWU5bm_pZzY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <iframe
          width="580"
          height="200"
          src="https://www.youtube.com/embed/ijXXaIYsVx4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>

      <div className="avaliacoes">
        <div className="avaliacao">
          <h1 className="nome-avaliacao">Amanda Santos</h1>
          <p className="texto-avalicao">
            Entrar nesse mundo da programação, não é tão difícil como eu pensei,
            graças a Knowledge desenvolvi meu dom de ser uma programadora
          </p>
        </div>

        <div className="avaliacao">
          <h1 className="nome-avaliacao">Vitor Fernandes</h1>
          <p className="texto-avalicao">
            Quando alguém me pergunta onde fazer algum curso de programação,
            logo indico a Knowledge
          </p>
        </div>

        <div className="avaliacao">
          <h1 className="nome-avaliacao">Gustavo Guanabara</h1>
          <p className="texto-avalicao">
            É um ótimo curso, depois que conclui em poucas semanas ja estou
            empregado em um multinacional
          </p>
        </div>
      </div>
    </div>
    </>) :  <h1>...</h1>}
    </>
  );
};
