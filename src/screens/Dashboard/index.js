import React, { useEffect } from "react";
import {
  DashboardPagina,
  DashboardArea,
  DashboardAreaPerfil,
  AreaPerfil,
  LogoutButton,
  CText,
  PerfilImage,
  PerfilNome,
  CardsArea,
  AreaUser,
  TextOthers,
  ImagePerfil,
} from "./styles.js";
import Nome from "./Nomes/index";
import ContainerCards from "./Cards/index";
import Navbar from "../../compoents/Navbar";
import api from "../../services/api";
import { useLocation } from "react-router-dom";
import { Entypo } from "react-web-vector-icons";
import { useHistory } from "react-router-dom";
import Foto from "../../assets/user.png";
import './style.css'

export default () => {
  const [userData, setUserData] = React.useState();
  const [nome, setNome] = React.useState();
  const location = useLocation();
  const navigate = useHistory();
  const [logou, setLogou] = React.useState(false);

  React.useEffect(() => {
    const getUsers = () => {
      api
        .get("users/")
        .then((response) => {
          setUserData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          window.alert(err);
        });
    };
    getUsers();
  }, []);

  React.useEffect(() => {
    setLogou(location?.state?.logado);
    setNome(location?.state?.usermethod);
  });

  return (
    <>
      {logou ? (
        <>
          <Navbar />
          <DashboardPagina >
            <DashboardArea className="DashAnimation">
              <DashboardAreaPerfil>
                <AreaUser>
                  <AreaPerfil>
                    <ImagePerfil src={Foto} />
                    <PerfilNome>
                      <CText>{nome}</CText>
                    </PerfilNome>
                  </AreaPerfil>
                  <LogoutButton onClick={() => navigate.push('/login')}>
                    Sair
                  </LogoutButton>
                </AreaUser>
              </DashboardAreaPerfil>
              <TextOthers>Outros Usuarios</TextOthers>
              <CardsArea>
                {userData != null ? (
                  userData.map((item, key) => (
                    <ContainerCards
                      key={key}
                      h2={item.username}
                      p={item.email}
                    />
                  ))
                ) : (
                  <p></p>
                )}
              </CardsArea>
            </DashboardArea>
          </DashboardPagina>
        </>
      ) : (
        <h1>você deve estar logado</h1>
      )}
    </>
  );
};
