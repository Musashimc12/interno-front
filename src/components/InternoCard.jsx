import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function InternoCard({ imageSrc, title,text}) {
  return (
    
    <Card style={{border:'none'}}>
      <Card.Img variant="top" src={imageSrc} style={{borderRadius:'5px'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}


export default InternoCard;






