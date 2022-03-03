/*useContext
Context es una herramienta para pasar propiedades en un arbol de componentes de arriba hacia abjo sin tener que pasar por componentes intermedios.
Par usar context debemos importar dos cosas: createContext -> Permite crear el contexto
useContext -> Este hook nos va permitir uusar contextos dentro de los componentes
*/
import React from 'react';

const AppContext = React.createContext({});

export default AppContext;