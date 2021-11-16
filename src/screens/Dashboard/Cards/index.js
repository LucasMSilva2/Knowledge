import React from "react";
import {
  AreaText,
  AreaUsers,
  Cards,
  DivText,
  Image,
  NameUsers,
  Text,
  ImagePerfil
} from "./styles";
import Foto  from "../../../assets/user.png";

export default (props) => {
  return (
    <Cards>
        <ImagePerfil src={Foto} />
      <DivText>
          <NameUsers>{props.h2}</NameUsers>
          <Text>{props.p}</Text>
      </DivText>
    </Cards>
  );
};
