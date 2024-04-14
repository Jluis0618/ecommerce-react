import '../styles/Login.css';
import Input from "./Input";
import imgUsuario from '../assets/imagen-usuario.png';
import imgPassword from '../assets/imagen-candado.png';
import Header from "./Header";
// import Register from './Register';
import { Link } from "react-router-dom";
import { useState } from 'react';



function Login() {

  const [error, setError] = useState(null);

    const [registerData, setRegisterData] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
        console.log(registerData);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
          });
          if (response.ok) {
            const {token} = await response.json()
            localStorage.setItem('token', token)
            console.log(token)
            window.location.href = "/";
          }else {
            const { error  } = await response.json();
            setError(error);
        }
        } catch (error) {
          console.log({ error: error.message });
        }
      };
    return (
        <form className="main-container" onSubmit={handleSubmit}>
            <div className="div-container">
                <Header
                value="USER LOGIN"/>
            <div className="input-container">
                <Input
                id="1"
                name="email"
                placeholder="Correo"
                img={imgUsuario}
                type="email"
                alt="img Correo Electronico"
                handleChange={handleChange}/>

                <Input
                id="2"
                name="password"
                placeholder="Contraseña"
                img={imgPassword}
                type="password"
                alt="img Pasword"
                handleChange={handleChange}/>
            </div> {/*input-container*/}

            {error && (
                    <p className="error-message">{error}</p>
                )}


            <div className="div-boton">
                <button>Ingresar</button>
            </div>

            <div className="div-register">
                <p>¿No tienes una cuenta?</p>
                <Link to='/Register' >Crea una</Link>
            </div>


            </div> {/*login-container*/}
        </form> /*principal-container*/
    );
}

export default Login;