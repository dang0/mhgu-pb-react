import React, { Component } from 'react';
import './AppBody.css';
import { Grid, Row, Col } from 'react-bootstrap';

class AppBody extends Component {
  render() {
    return (
    <Grid>
      <Row className="body">
        <Col xs={12}>
          content goes here
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default AppBody;
