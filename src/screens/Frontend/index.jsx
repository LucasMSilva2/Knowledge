import React from 'react';
import { useLocation } from "react-router-dom"
import './styles.css'
import frontEndBanner from '../../assets/desarrollo-web-profesional-frontend-backend.png'
import Html_css_icon from '../../assets/htmleCss.png'
import Javascript from '../../assets/javascript.png'
import reactIcon from '../../assets/react.png'
import Vue from "../../assets/vu.js.png"
import Navbar from '../../compoents/Navbar'

export default () => {
  const location = useLocation()
  const [logou, setLogou] = React.useState(false)

  React.useEffect(() => {
    setLogou(location?.state?.logado)
  })

  return(
    <>{ logou ? (
      <> 
      <Navbar/>
      <div className="corpo-front">
    <div className="descricao">
      <img className="banner" alt="banner" src={frontEndBanner}/>

      <div className="descricao-texto">
        <p>
           <strong className="titulo-descricao">Front-end</strong><br/> <strong className="titulo-descricao2">O que é?<br/><br/></strong> O front-end é tudo aquilo em que o usário tem acesso, basicamente é a tela pelo qual você está lendo isso agora. O desenvolvedor front-end é responsável pela experiência do usuário dentro de uma aplicação web, é ele quem vai desenhar e desenvolver as páginas com as quais, posteriormente, o usuário irá interagir. Tecnologias como <strong>HTML, CSS e JavaScript</strong> são essenciais para isso. E ai? Agora que sabe o que é o front-end <br/> <strong className="ajuste-descricao">Vamos construir um site?</strong>
        </p>
      </div>

      <br/>
    </div>
    <div className="mercado">
      <div className="mercado-bloco">
        <h1 className="mercado-titulo">Salário</h1>
        <p className="texto-mercado">
          A média salarial para Desenvolvedor Front-end no Brasil é de R$ 3.036,00. A formação mais comum é de Graduação em Sistemas de Informação (Análise de Sistemas). Segundo:
          <a className="fonte" target="blanck" href="https://www.vagas.com.br/cargo/desenvolvedor-front-end"
            >fonte</a
          >
        </p>
      </div>
      <div className="mercado-bloco">
        <h1 className="mercado-titulo">Vagas</h1>
        <p className="texto-mercado">
          O Desenvolvedor Front-End é uma das profissões mais requisitadas do Brasil, estatíscas apontam que há vagas sobrando no mercado, o que aumenta a média salarial e chances de contratações.
          Segundo:
          <a
            className="fonte" target="blanck"
            href="https://mentorama.com.br/blog/desenvolvedor-front-end-tudo-sobre-a-carreira-e-profissao/"
            >fonte</a
          >
        </p>
      </div>
    </div>

  <div className="subcategorias">
    <div className="icon-subcategoria">
      <img className="icon" alt="HTML-CSS-icon" src={Html_css_icon}/>
    </div>
    <h1 className="titulo-subcategorias">HTML e CSS</h1>    
  </div>

  <div className="video-subcategorias">
    <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/Ejkb_YpuHWs" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen/>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/jgQjeqGRdgA" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen/>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/VfIXgGJWLvA" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen/>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/57wyfS560Uk" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen/>
  </div>
  

  <p  className="curso_completo"><br/>Acesse o curso completo de <strong><a style={{color: '#4395cc'}} href="https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="_blank">HTML & CSS</a></strong> </p>

  <div className="subcategorias">
    <div className="icon-subcategoria">
      <img className="icon" id="icone-javascript" alt="javascript-icon" src={Javascript}/>
    </div>
    <h1 className="titulo-subcategorias">JavaScript</h1>    
  </div>

  <div className="video-subcategorias">
    <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/1-w1RfGIov4" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/BXqUH86F-kA" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/uzEhd3Lugik" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/Ptbk2af68e8" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
  </div>

  <p  className="curso_completo"><br/>Acesse o curso completo de <strong><a style={{color: '#4395cc'}} href="https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1" target="_blank">JavaSrcipt</a></strong> </p>

  <div className="subcategorias">
    <div className="icon-subcategoria">
      <img className="icon" alt="react-icon" src={reactIcon}/>
    </div>
    <h1 className="titulo-subcategorias">React</h1>    
  </div>

  <div className="video-subcategorias">
    <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/FXqX7oof0I4" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/Jg6JaEjovJk" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/9iKNxnFJY_Q" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
    height='155'
      src="https://www.youtube.com/embed/-wrsG0IGc-M" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
  </div>

  <p  className="curso_completo"><br/>Acesse o curso completo de <strong><a style={{color: '#4395cc'}} href="https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO" target="_blank">React</a></strong> </p>

  <div className="subcategorias">
    <div className="icon-subcategoria">
      <img className="icon" alt="vurjs-icon" src={Vue}/>
    </div>
    <h1 className="titulo-subcategorias">Vue.js</h1>    
  </div>

  <div className="video-subcategorias">
    <iframe width='280' 
      height='155'
      src="https://www.youtube.com/embed/Rz7D51uU_gY" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
      height='155'
      src="https://www.youtube.com/embed/ArC_Tfmgfb0" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
      height='155'
      src="https://www.youtube.com/embed/YFCYHG-TPxo" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <iframe width='280' 
      height='155'
      src="https://www.youtube.com/embed/Zx3vNhmx_YY" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
  </div>

  <p  className="curso_completo"><br/>Acesse o curso completo de <strong><a style={{color: '#4395cc'}} href="https://www.youtube.com/playlist?list=PLWNaqtzH6CWR-dykXeDD5XmMzJur9JBIh" target="_blank">Vue.js</a></strong> </p>
  


  <div className="avaliacoes">
      <div className="avaliacao">
        <h1 className="nome-avaliacao">Andson</h1>
        <p className="texto-avalicao">Educação grátis de qualidade, muito bom! Continuem.</p>

      </div>
      <div className="avaliacao">
        <h1 className="nome-avaliacao">Lucas Alexandre</h1>
        <p className="texto-avalicao">Parabens aos desevolvedores desse site, a ideia é simplesmente incrível.</p>
      </div>
      <div className="avaliacao">
        <h1 className="nome-avaliacao">Lucas Emanuel</h1>
        <p className="texto-avalicao">Uaauuu! Gostei das cores do site.</p>

      </div>
  </div>
  </div>
  </>
  ) : (
  <p>...</p>
  )}
  </>
    
  
  
) 
}