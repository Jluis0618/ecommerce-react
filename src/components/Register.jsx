import "../styles/Register.css";
// import '../styles/Login.css';
import Header from "./Header";
import Input from "./Input";
import imgUsuario from "../assets/imagen-usuario.png";
import imgPassword from "../assets/imagen-candado.png";
import imgCorreo from "../assets/imagen-correoElectronico.png";
import { useState } from "react";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

import Modal from "react-modal";
function Register() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [registerData, setRegisterData] = useState({
    name: "",
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
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      if (response.ok) {
       setRegistrationSuccess(true); 
        setTimeout(() => {
          setRegistrationSuccess(false);
          window.location.href = '/login'
        }, 2000);
      }else {
        const { errors } = await response.json();
        setError(errors.password.message);
    }
    } catch (error) {
      console.log({ error: error.message });
    }
  };
  return (
    <>
      <form className="main-register-container" onSubmit={handleSubmit}>
        <div className="div-register-container">
          <a href="/login" className="back-to-login"> <span><FaArrowLeft className="arrow-left-register"/></span>Volver al login</a>
          <Header value="CREATE ACCOUNT" />
          <div className="input-container">
            <Input
              id="1"
              name="name"
              placeholder="Nombre"
              img={imgUsuario}
              type="text"
              alt="img usuario"
              handleChange={handleChange}
              value={registerData.name}
            />
            <Input
              id="3"
              name="email"
              placeholder="Correo eléctronico"
              img={imgCorreo}
              type="email"
              alt="img Correo Electronico"
              handleChange={handleChange}
              value={registerData.email}
            />
            <Input
              id="4"
              name="password"
              placeholder="Contraseña"
              img={imgPassword}
              type="password"
              alt="img Pasword"
              handleChange={handleChange}
              value={registerData.password}
            />
          </div>

          {error && (
                    <p className="error-message">{error}</p>
                )}

          <div className="div-register-boton">
            <button>REGISTER</button>
          </div>
        </div>
      </form>

      {/* Modal para registro exitoso */}
      <Modal
        isOpen={registrationSuccess}
        contentLabel="Registro Exitoso"
        onRequestClose={() => setRegistrationSuccess(false)}
        ariaHideApp={false}
        className="custom-modal"
        overlayClassName="custom-overlay"
      >
        <div className="modal-content">
          <FaCheckCircle className="check-register" />
          <p>¡Se ha registrado correctamente!</p>
          <p>Redirigiendo al inicio de sesión...</p>
        </div>
      </Modal>
    </>
  );
}

export default Register;
