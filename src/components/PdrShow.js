import React from "react";
import { Button, Card } from "react-bootstrap";

const PdrShow = ({ pdr }) => {
  return (
    <div className="m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pdr.image} />
        <Card.Body>
          <Card.Title>{pdr.designation}</Card.Title>
          <Card.Text>
            {pdr.reference} - {pdr.machine}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PdrShow;
