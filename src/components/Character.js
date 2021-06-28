import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import styled from "styled-components";

const Cardcont= styled(Card)`
 margin: 0 auto;
  
 width: 25rem;
 ` 
 const Cardstyle= styled(CardBody)`
 font-weight: bold;
 `

const Character = (props) => {
  return (
    <Cardcont>
      <Card>
        <Cardstyle>
          <CardTitle tag="h5">NAME: {props.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">GENDER: {props.gender}</CardSubtitle>
          <CardText>HEIGHT: {props.height}cm</CardText>
        </Cardstyle>
      </Card>
    </Cardcont>
  );
};

export default Character;