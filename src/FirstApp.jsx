import React from 'react';

//  const newMessage = {
//     message: 'Hola mundo',
//     title: 'Carlos'
//  };
//
// para renderizar las {llaves} no aceptan 'objetos' y entonces tampoco 'promesas'
const getResult =  () => {
    return 4 + 4;
}

let amigo = {
    name: 'Joe',
    surname: 'Rossi'
};
//
 const saludar = (value) => {
  return value = 'buenas noches';
}



const FirstApp = () => {
 

  return (
    <>
      <h2> {getResult()}</h2>
      {JSON.stringify(`${amigo.name}  ${amigo.surname}`)}
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>soy un subtitulo</p>
      {saludar()}
    </>
  );
}

export default FirstApp