import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import helper from "./helper";
import RenderNotfound from "./notFound";
import { carMsg, saveMessage } from "./constants";

class InfoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carInfo: undefined,
      isLoaded: false
    };
  }

  componentDidMount() {
    let url = `${helper.getCarsUrl()}/${this.props.match.params.stockNumber}`;
    fetch(url)
      .then(res => {
        if (res.status === 404) {
          return res.text();
        } else {
          return res.json();
        }
      })
      .then(data => {
        const response = data === "Not Found" ? undefined : data.car;
        this.setState({ carInfo: response, isLoaded: true });
      });
  }

  render() {
    return (
      <>
        {!this.state.isLoaded && (
          <Spinner className="mt-4" animation="border" />
        )}
        {!this.state.carInfo && this.state.isLoaded && (
          <RenderNotfound className="mt-4"></RenderNotfound>
        )}
        {this.state.carInfo && (
          <Container className="mt-4 info-container text-left">
            <Button href="/" className="btn-warning text-white">
              Back
            </Button>
            <Row className="mt-4">
              <Col className="text-left" md={8} sm={8} lg={8}>
                <h2 className="text-left">
                  {this.state.carInfo.manufacturerName}{" "}
                  {this.state.carInfo.modelName}
                </h2>
                <p className="text-left">
                  Stock # {this.state.carInfo.stockNumber} -{" "}
                  {this.state.carInfo.mileage.number}{" "}
                  {this.state.carInfo.mileage.unit} -{" "}
                  {this.state.carInfo.fuelType} - {this.state.carInfo.color}
                </p>
                <span>{this.state.carInfo.message || carMsg}</span>
              </Col>
              <Col className="text-left" md={4} sm={4} lg={4}>
                <Card>
                  <Card.Body>
                    <span>{this.state.carInfo.saveMessage || saveMessage}</span>
                    <Button className="mt-4 float-right btn-warning text-white">
                      Save
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </>
    );
  }
}

export default InfoView;
