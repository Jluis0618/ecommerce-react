import '../styles/Login.css';
import Input from "./Input";
import imgUsuario from '../assets/imagen-usuario.png';
import imgPassword from '../assets/imagen-candado.png';
import Header from "./Header";
// import Register from './Register';
import { Link } from "react-router-dom";
import { useState } from 'react';




function Login() {

    const [error, setError] = useState(null); //estado para manejar errores

    const [registerData, setRegisterData] = useState({ //estado para manejar los datos del formulario
        email: "",
        password: "",
      });
    
      const handleChange = (e) => { 
        setRegisterData({ ...registerData, [e.target.name]: e.target.value }); // actualiza el estado con los valores del formulario
        console.log(registerData);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:3000/api/login", { //envia los datos al servidor
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData), //convierte los datos a un string
          });
          if (response.ok) {
            const {token, rol} = await response.json() //recibe la respuesta del servidor
            localStorage.setItem('token', token) //guarda el token en el local storage
            localStorage.setItem('rol', rol) //guarda el rol en el local storage
            
            if(rol === 'admin'){
              window.location.href = '/adminpanel'  //redirecciona a la pagina de admin
            } else{
              window.location.href = '/' //redirecciona a la pagina principal
            }

          }else {
            const { error  } = await response.json();   //recibe el error del servidor
            setError(error); //actualiza el estado con el error
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