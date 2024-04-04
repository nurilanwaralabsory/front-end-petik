import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from "reactstrap";

function Movies() {
  const movies = [
    {
      title: "Movie 1",
      year: 2020,
    },
    {
      title: "Movie 2",
      year: 2020,
    },
    {
      title: "Movie 3",
      year: 2020,
    },
    {
      title: "Movie 4",
      year: 2020,
    },
    {
      title: "Movie 5",
      year: 2020,
    },
  ];

  return (
    <div>
      <Row>
        {movies.map((movie) => {
          return (
            <Col>
              <Card
                style={{
                  width: "18rem",
                }}
              >
                <img alt="Sample" src="https://picsum.photos/300/200" />
                <CardBody>
                  <CardTitle tag="h5">{movie.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {movie.year}
                  </CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card‘s content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Movies;
