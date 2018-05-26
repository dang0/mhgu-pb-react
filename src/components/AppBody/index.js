import React, { Component } from 'react';
import './AppBody.css';
import { Grid, Row, Col } from 'react-bootstrap';

class AppBody extends Component {
  render() {
    return (
      <Grid className="body show-grid">
        <Row>
          <Col xs={12}>
            content goes here
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default AppBody;
