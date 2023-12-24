import React from 'react'
import styled from 'styled-components';
function Footer() {


    return(
        <FooterContainer className="main-footer ">
        <div className="footer-middle">
        <div className="row">
        {/* Columna 1 */}
        <div className="col-md-3 col-sm-6">
            <h4>INFORMACIÓN PARA EL CLIENTE </h4>
        <ul className='list-unstyled'>
            <li> Información del cliente </li>
            <li>Plazo de entrega </li>
            <li>Devoluciones </li>
            <li>Cuidado de muebles </li>
        </ul>
        </div>

         {/* Columna 2 */}
         <div className="col-md-3 col-sm-6">
         <h4>informacion de compra </h4>
        <ul className='list-unstyled'>
        <li>Política de devoluciones </li>
        <li>Pago </li>
        <li>Profesionales</li>
        <li>Condiciones de envío </li>
        <li>Contacto </li>
        </ul>
        </div>

          {/* Columna 3 */}
          <div className="col-md-3 col-sm-6">
         <h4>Área Privada </h4>
        <ul className='list-unstyled'>
        <li>Mi Cuenta </li>
        <li>Mis Pedidos </li>
        <li>Mi lista de deseos </li>
        <li>Mi pago</li>
        <li>Iniciar sesión</li>
        <li>Registrarse</li>
        </ul>
        </div>

         {/* Columna 4 */}
         <div className="col-md-3">
            <img src="/assets/LandingPage/Group_5_1.png" style={{width:'70%'}} alt="" />
            
        </div>
        </div>
        </div>
        </FooterContainer>
    )
}

export default Footer;

// ** Styles **

const FooterContainer = styled.footer`

.footer-middle{
    background: #384353;
    color: white;
    padding: 30px;
    padding-top: 80px;
}

.footer-bottom{
    display: flex;
    flex-direction: column;
    align-items: center;

}

.row h4 {
    font-size: 20px;
}

`;