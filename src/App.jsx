import React from "react";
import Clock from "./Clock";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./App.css";

function App() {
  const clockData = [
    { timeZone: "America/New_York", city: "New York" },
    { timeZone: "Europe/London", city: "London" },
    { timeZone: "Asia/Tokyo", city: "Tokyo" },
    { timeZone: "Australia/Sydney", city: "Sydney" },
  ];

  return (
    <Container className="mt-5">
      <h1 class="text-center mb-4 font-bold text-white text-5xl shadow-[2px_2px_4px_rgba(0,0,255,0.7)] mt-20">
        World Clock
      </h1>
      <Row>
        {clockData.map((clock, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{clock.city}</Card.Title>
                <Card.Text>
                  <Clock timeZone={clock.timeZone} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
