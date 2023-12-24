import { useState } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Contact() {
 
  return (
    <>

<img
        width="100%"
        src="/assets/Contacto/Group_784.png"
        alt="banner" style={{padding:'80px', paddingTop:'20px'}}
      />

<img
        width="80%"  
        src="/assets/Contacto/Group_785.png"
        alt="banner"
      />

     
<img
        width="100%"
        src="/assets/Contacto/Banner_Contacto_1.png"
        alt="banner"
      />

     
    </>
  );
}

export default Contact;

// *** Styles ***
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  padding: 34px;
  padding-top: 43px;
  padding-bottom: 25px;
  border-radius: 18px 0px 0px 18px;
  justify-content: center;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  padding-top: 35px;
  padding-bottom: 80px;
  justify-content: center;
`;
