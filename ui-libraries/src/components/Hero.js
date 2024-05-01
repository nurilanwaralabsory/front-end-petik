import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Hero = () => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={8} className="text-md-left">
            <h2 className="text-primary">Title</h2>
            <h3 className="text-primary">Category :</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, perspiciatis. Explicabo quas magnam tenetur, quibusdam similique corrupti quisquam vero recusandae id quis rem iusto, provident vitae? Nisi est reprehenderit a?
            </p>
            <Button color="primary">Primary</Button>
          </Col>
          <Col md={4}>
            <img src="https://picsum.photos/300/200" alt="hero-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
