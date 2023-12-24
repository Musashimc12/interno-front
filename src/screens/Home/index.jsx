import React, { useEffect, useState } from "react";
import axios from "axios";
import InternoCard from "../../components/InternoCard";
import CardGroup from "react-bootstrap/CardGroup";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  const [internoCards, setInternoCards] = useState(null);

  const getInternoCards = async () => {
    const apiUrl = "http://localhost:8000";
    const interno = await axios.get(`${apiUrl}/api/interno`);
    return interno.data;
  };

  useEffect(() => {
    getInternoCards().then((interno) => {
      setInternoCards(interno);
    });
  }, []);

  if (!internoCards) {
    return <></>;
  }

  return (
    <>
      <img width="100%" src="/assets/LandingPage/Banner1.png" alt="banner" />

      <Container>
        <h4 style={{ color: "#202335", paddingTop: "50px" }}> Categorias</h4>

        <CardGroup
          style={{
            gap: "12px",
            alignItems: "center",
            padding: "70px",
            paddingTop: "40px",
            paddingBottom: "20px",
          }}
        >
          {internoCards.map((item) => (
            <InternoCard
              title={item.title}
              text={item.text}
              imageSrc={item.imageSrc}
            />
          ))}
        </CardGroup>
      </Container>

      <Container
        style={{ display: "flex", flexDirection: "row", paddingTop: "50px" }}
      >
        <img
          src="/assets/LandingPage/Banner_2.png"
          alt=""
          style={{
            width: "500px",
            paddingLeft: "100px",
            paddingRight: "100px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "30px",
            paddingRight: "200px",
          }}
        >
          <h2>Muebles y Ropa de cama para toda tu casa</h2>
          <p>
            {" "}
            Aqui encontraras los mejores modelos de muebles para tu hogar. Todos
            nuestros muebles estan diseñados con maderas de alta calidad y
            pulidos intensivos.
          </p>

          <p>
            {" "}
            Mas de mas de 100 modelos diferentes de sillones, mesas, lamparas, y
            ropa de cama en stock inmediato y por pedido.
          </p>
         
        </div>
      </Container>

      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "20px",
            paddingTop: "50px",
            gap: "100px",
          }}
        >
          <h4 style={{ color: "#202335" }}>
            {" "}
            Destacados
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            paddingTop: "20px",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1100px",
          }}
        >
          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/LandingPage/Colcha.png" />
            <Card.Body>
              <Card.Title>Colcha</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/LandingPage/Lamoara.png" />
            <Card.Body>
              <Card.Title>Lámpara</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/LandingPage/Silln.png" />
            <Card.Body>
              <Card.Title>Sillon</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/LandingPage/Almohada.png" />
            <Card.Body>
              <Card.Title>Almohada</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Home;

// ** Styles **
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
