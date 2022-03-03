import React, { useRef } from 'react'  // useRef = Hooks para trabajar mejor al traer usuario y clave
// useRef es un hook utilizado para obtener una referencia a los datos de un objeto con información mutable. Es decir, es como una manera de siempre poder obtener los datos mas recientes mediante referencia de algún objeto de html
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Lo que hace es no permitir que se recargue la pagina y mande los valores del formulario por la URL mostrandola
    const formData = new FormData(form.current) // new FormData = este de javacript y es mas seguro enviar data para que no sea espiado en su camino o decifrado
    // form.curren = Es lo que actualmente se esta trayendo del formulario cuando se haya hecho click
    const data = { // Creamos Objeto para poder ver la información como se la vamos a querer enviar al backend 
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}> {/*ref={form} =  a nuestra CONST que creamos arriba haciendo referemcia a UseRef */}
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            //id="email"   ya no se llamara id  sino name para que asi de esa forma podamos obtener ese valor arriba
            name="email"
            placeholder="platzi@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            //id="password"  ya no se llamara id  sino name para que asi de esa forma podamos obtener ese valor arriba
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            onClick={handleSubmit}
            className="primary-button login-button">Log in
            </button>
          <a href="/">Forgot my password</a>
        </form>
        <button 
          className="secondary-button signup-button">
              Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;