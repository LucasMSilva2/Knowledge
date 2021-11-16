import React,{useEffect, useState} from "react";
import "./styles.css";
import Torres from '../../assets/perfis/torres.jpeg'
import Emanuel from '../../assets/perfis/Emanuel.jpeg'
import Andson from '../../assets/perfis/Andson.jpeg'
import Alexandre from '../../assets/perfis/Alexandre.jpeg'
import Navbar from '../../compoents/Navbar'
import { useLocation } from "react-router-dom"

export default () => {
  const location = useLocation()
  const [logou, setLogou] = useState()

  useEffect(() => {
    setLogou(location?.state?.logado)
  })

  return (
    <>
    
      {logou != null & logou ? (
        <>
        <Navbar/>
        <div className="corpo-Home">
          <div className="inicio">
            <div className="inicio-categorias">
              <p className="titulo-inicio-categoria" id="datascience">
                DataScience
              </p>
              <p className="titulo-inicio-categoria" id="front-end">
                Front-end
              </p>
              <p className="titulo-inicio-categoria" id="back-end">
                Back-end
              </p>
              <p className="titulo-inicio-categoria" id="mobile">
                Mobile
              </p>
            </div>

            <p className="welcome-message">
              Seja Bem-vindo a Knowledge, Venha para a profissão que vai
              literalmente construir o futuro da tecnologia no mundo
            </p>
          </div>

          <div className="Perfis">
            <div className="Perfil">
              <div className="Title">
                <img className="img_perfil" src={Alexandre} alt="perfil" />
                <h1 className="titulo_perfil">Lucas Alexandre</h1>
              </div>
              <p className="texto_perfil">
                Desenvolvedor da página DataScience e games
              </p>
            </div>

            <div className="Perfil">
              <div className="Title">
                <img className="img_perfil" src={Torres} alt="perfil" />
                <h1 className="titulo_perfil">Lucas Torres</h1>
              </div>
              <p className="texto_perfil">Desenvolvedor da página Front-end, login, cadastro, dashboard</p>
            </div>

            <div className="Perfil">
              <div className="Title">
                <img className="img_perfil" src={Andson} alt="perfil" />
                <h1 className="titulo_perfil">Andson Albuquerque</h1>
              </div>
              <p className="texto_perfil">Desenvolvedor da página Mobile, e games </p>
            </div>

            <div className="Perfil">
              <div className="Title">
                <img className="img_perfil" src={Emanuel} alt="perfil" />
                <h1 className="titulo_perfil">Lucas Emanuel</h1>
              </div>
              <p className="texto_perfil">
                Desenvolvedor da pagina home, backend e component navbar, backend  e outras telas 
              </p>
            </div>
          </div>
        </div>
        </>
      ) : (
        <h1>...</h1>
      )}
    </>
  );
};
