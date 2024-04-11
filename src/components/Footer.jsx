import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
        <div className="info__footer">
          <h3>Info</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati sapiente nihil facilis fuga dolor sit facere explicabo! Culpa magnam vel dolores esse molestiae sint! Facilis placeat temporibus possimus saepe!</p>
        </div>
        <div className="menu__footer">
          <h3>Acceso Directo</h3>
          <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/products'>Productos</Link></li>
            <li><Link to='/contact'>Contacto</Link></li>

          </ul>
        </div>

        <div className="medios__footer">
          <div className="content-redes">
            <h3>Redes Sociales</h3>
              <div className="redes">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram/></a>
                <a href="#"><FaTwitter/></a>
              </div>
          </div>
          <div className="pagos">
            <h3>Métodos de Pago</h3>
            <div className="medios-pagos">
           
                <FaCcMastercard className='icon-pago mastercard'/>
                <FaCcVisa className='icon-pago visa'/>
                <FaPaypal className='icon-pago paypal'/>
              
            </div>
          </div>
        </div>
    </footer>
  )
}
