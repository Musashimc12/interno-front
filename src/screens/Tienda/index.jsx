import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Tienda() {
  return (
    <>
      <img width="100%" src="/assets/Shop/Banenr_Shop_1.png" alt="banner" />

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
          <h4 style={{ color: "#202335" }}> Shop </h4>

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
            <Card.Img variant="top" src="/assets/Shop/Siena_1.png" />
            <Card.Body>
              <Card.Title>Siena</Card.Title>
              <Card.Text>$390000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Nova_1.png" />
            <Card.Body>
              <Card.Title>Nova</Card.Title>
              <Card.Text>$980000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Nova_2.png" />
            <Card.Body>
              <Card.Title>Nova</Card.Title>
              <Card.Text>$1750000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Nova_3.png" />
            <Card.Body>
              <Card.Title>Nova</Card.Title>
              <Card.Text>$1750000.00</Card.Text>

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
            <Card.Img variant="top" src="/assets/Shop/Siena_2.png" />
            <Card.Body>
              <Card.Title>Siena</Card.Title>
              <Card.Text>$390000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Siena_3.png" />
            <Card.Body>
              <Card.Title>Siena</Card.Title>
              <Card.Text>$260000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Dena_1.png" />
            <Card.Body>
              <Card.Title>Dena</Card.Title>
              <Card.Text>$4550000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Herve.png" />
            <Card.Body>
              <Card.Title>Herve</Card.Title>
              <Card.Text>$550000.00</Card.Text>

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
            <Card.Img variant="top" src="/assets/Shop/Rod.png" />
            <Card.Body>
              <Card.Title>Rod</Card.Title>
              <Card.Text>$545000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Dena_2.png" />
            <Card.Body>
              <Card.Title>Dena </Card.Title>
              <Card.Text>$15650000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Sofi.png" />
            <Card.Body>
              <Card.Title>Sofi</Card.Title>
              <Card.Text>$450000.00</Card.Text>

            </Card.Body>
          </Card>

          <Card
            style={{
              width: "18rem",
              border: "none",
            }}
          >
            <Card.Img variant="top" src="/assets/Shop/Melchior.png" />
            <Card.Body>
              <Card.Title>Melchior</Card.Title>
              <Card.Text>$9350000.00</Card.Text>

            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}

export default Tienda;

// ** Styles **
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
