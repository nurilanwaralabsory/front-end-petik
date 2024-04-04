import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Title</h2>
          <h3>Genre</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aspernatur accusamus ea commodi itaque facilis dolores facere, quasi
            minus, obcaecati hic minima eaque odit unde amet nobis molestiae in
            corporis modi error ratione culpa! Ea nisi a eius nam molestiae.
          </p>
          <Button>Primary</Button>
        </Col>
        <Col md={4}>
          <img src="https://picsum.photos/300/200" alt="hero-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
