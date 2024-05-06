import React from 'react';
import PropTypes from "prop-types";
import "./../styles/styles.css";  

export const FirstApp = ({title, subtitle}) => {

  const newMessage = {
    nombre: "Mario",
  };

  if (!title) {
    throw new Error("El titulo no existe");
  }

  const getMessage = () => "Valor de mi funcion";

  return <React.Fragment>
    <h1>First App</h1>
    <p data-testid="parrafo">Soy un parrafo</p>
    <p>{ 1 + "1" }</p>
    <p id="nombre">{ newMessage.nombre }</p>
    <p>{ JSON.stringify(newMessage) }</p>
    <code>{JSON.stringify(newMessage)}</code>
    <p>{ getMessage() }</p>
    <p id="titulo">{ title }</p>
    <p id="subtitle">{ subtitle }</p>
  </React.Fragment>
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay ningun titulo",
  subtitle: "No hay subtitulo",
  name: "Fernando Herrera"
}