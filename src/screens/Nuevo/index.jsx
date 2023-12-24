import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Nuevo() {
  return (
    <>
      <img width="100%" src="/assets/Nuevo/Banner_Nuevo_1.png" alt="banner" />

      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBottom: "20px",
            paddingTop: "50px",
            gap: "10px",
          justifyContent:'left'          }}
        >
          <h4 style={{ color: "#202335" }}> Nuevos </h4>

          <h6 style={{ color: "#202335" }}> Destacados </h6>
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
      <Container>


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
            <Card.Img variant="top" src="/assets/Nuevo/Sarka.png" />
            <Card.Body>
              <Card.Title>Sarka</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Nuevo/Anatole.png" />
            <Card.Body>
              <Card.Title>Anatole</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Nuevo/Aliona.png" />
            <Card.Body>
              <Card.Title>Aliona</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Nuevo/Nova.png" />
            <Card.Body>
              <Card.Title>Nova</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Container>

      <Container>

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
            <Card.Img variant="top" src="/assets/Nuevo/Milk.png" />
            <Card.Body>
              <Card.Title>Milk</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Nuevo/Ulie.png" />
            <Card.Body>
              <Card.Title>Ulie</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Nuevo/Iaman.png" />
            <Card.Body>
              <Card.Title>Laman</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Nuevo/Skye.png" />
            <Card.Body>
              <Card.Title>Skye</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Nuevo;

// ** Styles **
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
