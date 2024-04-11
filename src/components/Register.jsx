import '../styles/Register.css';
// import '../styles/Login.css';
import Header from "./Header"
import Input from "./Input"
import imgUsuario from '../assets/imagen-usuario.png';
import imgPassword from '../assets/imagen-candado.png';
import imgCorreo from '../assets/imagen-correoElectronico.png';

function Register() {
    return (
      <div className='main-register-container'>
        <div className='div-register-container'>
          <Header 
            value="CREATE ACCOUNT"/>

        <div className="input-container">
                <Input 
                id="1"
                name="firstname"
                placeholder="First Name"
                img={imgUsuario}
                type="text"
                alt="img usuario"/>

                <Input 
                id="2"
                name="lastname"
                placeholder="Last Name"
                img={imgUsuario}
                type="text"
                alt="img usuario"/>

                <Input 
                id="3"
                name="email"
                placeholder="Email ID"
                img={imgCorreo}
                type="email"
                alt="img Correo Electronico"/>

                <Input 
                id="4"
                name="password"
                placeholder="Password"
                img={imgPassword}
                type="password"
                alt="img Pasword"/>

                <Input 
                id="5"
                name="password"
                placeholder="Re-type password"
                img={imgPassword}
                type="password"
                alt="img Pasword"/>
          </div> {/*input-container*/}

          <div className="div-register-boton">
                <button>REGISTER</button>
            </div>
        </div>
      </div>
    );
}

export default Register;