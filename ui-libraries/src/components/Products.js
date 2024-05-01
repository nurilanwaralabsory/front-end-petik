import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Container, CardBody, CardTitle, Row, Col, CardText } from "reactstrap";

const Products = () => {
  const products = [
    {
      title: "Product 1",
      price: 10000,
    },
    {
      title: "Product 2",
      price: 15000,
    },
    {
      title: "Product 3",
      price: 180000,
    },
    {
      title: "Product 4",
      price: 23000,
    },
    {
      title: "Product 5",
      price: 12000,
    },
  ];
  return (
    <Container className="my-5">
      <Row className="row-gap-0">
        {products.map((product, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index} className="p-2">
              <NavLink to={"/detail"}>
                <Card
                  className="is-overflow-hidden shadow"
                  color="light"
                  style={{
                    width: "100%",
                  }}
                >
                  <img alt="Sample" src="https://picsum.photos/300/200" />
                  <CardBody className="text-center">
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardText>{product.price}</CardText>
                  </CardBody>
                </Card>
              </NavLink>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
