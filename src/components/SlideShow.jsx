import React, {useRef} from 'react'
import "./SlideShow.css"

// Icons
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import styled from 'styled-components'; // Importamos styled-components que es una librería que nos permite escribir css en js



export const SlideShow = () => {

    const slideshow = useRef(null); // Creamos una referencia para el slideshow
   
    const siguiente = () => {
        if(slideshow.current.children.length > 0){
            const primerElemento = slideshow.current.children[0]; // Obtenemos el primer elemento del slideshow
            slideshow.current.style.transition = `300ms ease-out all` // Agregamos una transición al slideshow

            // Calculamos el ancho del primer elemento
            const tamañoSlide = primerElemento.offsetWidth;
            // Mover
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)` // Movemos el slideshow a la izquierda

            const transicion = () => {
                // Reiniciamos el slideshow
                slideshow.current.style.transition = `none`;
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo colocamos al final
                slideshow.current.appendChild(primerElemento);
            }
            
            slideshow.current.addEventListener('transitionend', transicion);
    }
}
    
    const anterior = () => {
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index]; // Obtenemos el último elemento del slideshow
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild); // Insertamos el último elemento al principio del slideshow
            
            slideshow.current.style.transition = `none`
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)` // Movemos el slideshow a la izquierda

            setTimeout(()=>{
                slideshow.current.style.transition = `300ms ease-out all`
                slideshow.current.style.transform = `translateX(0)` // Movemos el slideshow a la izquierda
            }, 30);
    }
}
    
  return (
    <ContenedorPrincipal className=''>
        <ContenedorSlideshow ref={slideshow}>
            <Slide>
                <a href="#">
                  <img src="https://via.placeholder.com/1200x400" alt="Imagen 1"></img>
                </a>
                <TextoSlide>
                    <p>15% descuento en productos de apple</p>
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="#">
                  <img src="https://via.placeholder.com/1200x400" alt="Imagen 2"></img>
                </a>
                <TextoSlide>
                    
                </TextoSlide>
            </Slide>
            <Slide>
                <a href="#">
                  <img src="https://via.placeholder.com/1200x400" alt="Imagen 2"></img>
                </a>
                <TextoSlide>
                    
                </TextoSlide>
            </Slide>
            
        </ContenedorSlideshow>
        <Controles>
                <Boton onClick={anterior}>
                    <FaArrowCircleLeft/>
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <FaArrowCircleRight/>
                </Boton>
            </Controles>
    </ContenedorPrincipal>
  )
}


const ContenedorPrincipal = styled.div`
	position: relative;
    overflow: hidden;x
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	/* max-height: 500px; */
	position: relative;

	img {
		width: 100%;
		vertical-align: top;
	}
`;

const TextoSlide = styled.div`
	background-color: rgba(0,0,0,.3);
	color: white;
	width: 100%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
    font-size: 30px;
	/* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */

    ${props => props.derecho ? 'right: 0' : 'left: 0'}

	
`;

// const ContenedorPrincipal = styled.div`
//     overflow: hidden;
//     position: relative;
// ` 

// const ContenedorSlideShow = styled.div`
//     display: flex;
//     flex-wrap: no-wrap;
   
// `

// const Slide = styled.div`
//     min-width: 100%;
//     overflow: hidden;
//     transition: .3s ease all;
//     z-index: 10;
//     max-height: 800px;
//     position: relative;

//     img{
//         width: 100%;
//         height: 100%;
//         vertical-align: top;
//     }
// `

// const TextoSlide = styled.div`
//     background-color: rgba(0,0,0,.5);
//     color: white;
//     width: 100%;
//     padding: 10px 60px;
//     text-align: center;
//     font-size: 20px;  
//     position: absolute;
//     bottom: 0;
    
//     @media screen and (max-width: 700px){
//         position: relative;
//     }
// `

// const Controles = styled.div`
//     position: absolute;
//     top: 0;
//     z-index: 20;
//     width: 100%;
//     height: 100%;
//     pointer-events: none;
// `
// const Boton = styled.button`
//     background:none;
//     border: none;
//     padding: 10px 40px;
//     pointer-events: all;
//     cursor: pointer;
//     outline: none;
//     width: 50px;
//     height: 100%;
//     text-align: center;
//     position: absolute;
//     transition: .3s ease all;
//     font-size: 30px;

//     ${props => props.derecho ? 'right: 0' : 'left: 0'}
// `
