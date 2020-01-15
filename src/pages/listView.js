import React, { Component } from "react";
import { Card, Row, Col, Image, Dropdown } from "react-bootstrap";
import Pagination from "./pagination";
import ContentLoader from "./contentLoader";

class ListView extends Component {
  getFilteredData = () => {
    const { cars } = this.props;
    const filteredData = cars.map(car => (
      <Card key={car.stockNumber} className="mb-3">
        <Row className="align-items-center">
          <Col sm={2} md={3} lg={2}>
            <Image className="mw-80" src={car.pictureUrl} thumbnail />
          </Col>
          <Col className="pl-0" sm={10} md={9} lg={10}>
            <Card.Body>
              <Card.Title className="text-left">
                {car.manufacturerName} {car.modelName}
              </Card.Title>
              <Card.Text className="text-left">
                Stock # {car.stockNumber} - {car.mileage.number}{" "}
                {car.mileage.unit} - {car.fuelType} - {car.color}
              </Card.Text>
              <Card.Link
                className="text-left d-block text-warning-m"
                href={`/info/${car.stockNumber}`}
              >
                View Details
              </Card.Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    ));
    return filteredData;
  };

  render() {
    return (
      <div>
        <Row className="mb-2">
          <Col className="text-left" sm={8} md={8}>
            <h4>Available cars</h4>
            <label>
              Showing {this.props.cars.length} of {this.props.totalCarsCount}{" "}
              results
            </label>
          </Col>
          <Col sm={4} md={4}>
            <Dropdown>
              <label className="text-left d-block">Sort by</label>
              <Dropdown.Toggle className="text-left d-block dropdown-toggle-button">
                None
              </Dropdown.Toggle>
              <Dropdown.Menu
                onSelect={eventKey => this.props.handleSortOrder(eventKey)}
              >
                <Dropdown.Item
                  onSelect={eventKey => this.props.handleSortOrder(eventKey)}
                  eventKey="1"
                >
                  Mileage - Ascending
                </Dropdown.Item>
                <Dropdown.Item
                  onSelect={eventKey => this.props.handleSortOrder(eventKey)}
                  eventKey="2"
                >
                  Mileage - Descending
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {this.props.contentLoading && <ContentLoader />}
        {this.getFilteredData().length > 0 && this.getFilteredData()}

        {this.getFilteredData().length > 0 && (
          <Pagination
            handleClick={this.props.handlePaginationClick}
            currentPageCount={this.props.currentPageCount}
            totalPageCount={this.props.totalPageCount}
          ></Pagination>
        )}
      </div>
    );
  }
}

export default ListView;
