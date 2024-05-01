import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Card, Container, CardBody, CardTitle, Row, Col, CardText } from "reactstrap";

const CourseCards = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get("https://api.sukmax.my.id/course");
    setCourses(response.data);
  };

  return (
    <Container className="my-5">
      <Row className="row-gap-0">
        {courses.map((course, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index} className="p-2">
              <NavLink to={`/course/${course.id}`}>
                <Card
                  className="is-overflow-hidden shadow"
                  color="light"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img alt="Sample" src={course.url} />
                  <CardBody className="text-center">
                    <CardTitle className="fw-bold" tag="h5">{course.name}</CardTitle>
                    <CardText>{course.desc}</CardText>
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

export default CourseCards;
