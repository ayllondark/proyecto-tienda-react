import React, { useEffect, useState } from 'react'; // para trabajar con hooks
import axios from 'axios';

const useGetProducts = (API) => { // useGetProducts = Constante que vamos a exportar
    const [products, setProdutcs] = useState([]); // [] el primer valor va hacer lo q esta almavcenado en el estado  y el 2do va hacer la funcion que va a modificar esta pieza del estado
    useEffect(async() => { // UseEffect recibe 2 elementos, una funcion anonima donde se va a ejecutar nuestro codigo y la segunda va hacer un arreglo 
        //donde vamosa poder tener diferentes elementos o valores con los cuales va estar escuchando sobre un cambio
        //useEffect es una manera de que nuestro componente de React, puede recibir nueva info, re-renderizar o cambiar su contenido, cuando una función se haya completado
        const response = await axios(API);
        setProdutcs(response.data);
    }, []); // , [] = Segundo valor

    return products;

};

export default useGetProducts;