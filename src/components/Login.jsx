import '../styles/Login.css';
import Input from "./Input";
import imgUsuario from '../assets/imagen-usuario.png';
import imgPassword from '../assets/imagen-candado.png';
import Header from "./Header";
// import Register from './Register';
import { Link } from "react-router-dom";


function Login() {
    return (
        <div className="main-container">
            <div className="div-container">
                <Header
                value="USER LOGIN"/>
            <div className="input-container">
                <Input
                id="1"
                name="email"
                placeholder="Email ID"
                img={imgUsuario}
                type="email"
                alt="img Correo Electronico"/>

                <Input
                id="2"
                name="password"
                placeholder="Password"
                img={imgPassword}
                type="password"
                alt="img Pasword"/>
            </div> {/*input-container*/}

            <p className="forgot-password"><a href="#">Forgot password?</a></p>

            <div className="div-boton">
                <button>LOGIN</button>
            </div>

            <div className="div-register">
                <p>Not registered?</p>
                <Link to='/Register' >Create account</Link>
            </div>


            </div> {/*login-container*/}
        </div> /*principal-container*/
    );
}

export default Login;