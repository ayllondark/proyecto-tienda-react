// Layout.jsx = Componente que va arecibir un hijo el cual va hacer la parte principal de nuestro proyecto
import React from 'react';
import { Children } from 'react/cjs/react.production.min';
import Header from '../components/Header.jsx';

const Layout = (props) => {
    return(
        <div className='Layout'>
            <Header />
            {props.children}
        </div>
    );
}

export default Layout;