import styled from "styled-components";
import { publicUrls } from "../config";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Header() {
  const tabs = [
    {
      id: "home",
      text: "Home",
      link: publicUrls.home,
    },
  
    {
      id: "nuevo",
      text: "Nuevo",
      link: publicUrls.nuevo,
    },
    {
      id: "tienda",
      text: "Shop",
      link: publicUrls.tienda,
    },
    {
      id: "contacto",
      text: "Contacto",
      link: publicUrls.contact,
    },

    {
      id: "login",
      text: "Login",
      link: publicUrls.login,
    },

    
  ];
  return (
    <Container style={{justifyContent:'space-around'}}>
      <img width="100px" src="/assets/LandingPage/Interno_logo.png" alt="logo" />

      <TabsContainer>
        {tabs.map((item) => (
          <Link to={item.link}>{item.text}</Link>
        ))}
      </TabsContainer>
      <Navbar className="justify-content-between">
      <Form inline>
        <Row>
         
          <Col xs="auto">
          <img width="20px" src="/assets/LandingPage/Layer_1.png" alt="icono" />
          </Col>
        </Row>
      </Form>
    </Navbar>
    </Container>

    
  );
}

export default Header;

// ** Styles **
const Container = styled.div`
  height: 80px;
  display: flex;
  gap: 30px;
  padding: 3rem;
  align-items: center;

  a {
    text-decoration: none;
    color: #202335;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;


