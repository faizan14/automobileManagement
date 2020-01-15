import React, { Component } from "react";
import DropdownInput from "./dropdownInput";
import ListView from "./listView";
import helper from "./helper";

import { Container, Col, Row } from "react-bootstrap";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
      manufacturers: [],
      selectedColor: "",
      selectedManufacturer: "",
      cars: [],
      totalCarsCount: "",
      totalPageCount: "",
      currentPageCount: 1,
      contentLoading: false
    };
  }
  componentDidMount() {
    this.setState({ contentLoading: true });
    let colors = [];
    let manufacturers = [];
    let cars = [];
    let totalPageCount = "";
    let totalCarsCount = "";
    let requests = [
      helper.getColorsUrl(),
      helper.getManufacturersUrl(),
      helper.getCarsUrl()
    ].map(url => fetch(url));

    Promise.all(requests)
      .then(responses => responses)
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(data => {
        colors = data[0].colors;
        manufacturers = data[1].manufacturers;
        cars = data[2].cars;
        totalPageCount = data[2].totalPageCount;
        totalCarsCount = data[2].totalCarsCount;
        this.setState({
          colors,
          manufacturers,
          cars,
          contentLoading: false,
          totalPageCount,
          totalCarsCount
        });
      });
  }

  handleSelectedCars = (eventKey, event) => {
    this.setState({ selectedColor: eventKey });
  };

  handleSelectedManufacturers = (eventKey, event) => {
    this.setState({ selectedManufacturer: eventKey });
  };

  handleFilter = (currentPageCount = 1, sort = "asc") => {
    this.setState({ contentLoading: true });
    let queryParam = helper.getQueryParam("cars", {
      color: this.state.selectedColor,
      manufacturer: this.state.selectedManufacturer,
      page: currentPageCount,
      sort: sort
    });
    fetch(queryParam)
      .then(res => res.json())
      .then(data => {
        const { cars, totalCarsCount, totalPageCount } = data;
        this.setState({
          cars,
          totalCarsCount,
          totalPageCount,
          currentPageCount,
          contentLoading: false
        });
      });
  };

  handlePaginationClick = param => {
    if (param === "first") this.handleFilter(1);
    else if (param === "previous")
      this.handleFilter(this.state.currentPageCount - 1);
    else if (param === "next")
      this.handleFilter(this.state.currentPageCount + 1);
    else if (param === "last") this.handleFilter(this.state.totalPageCount);
  };

  handleSortOrder = eventKey => {
    let eventKeyValue = parseInt(eventKey, 10);
    if (eventKeyValue === 1)
      this.handleFilter(this.state.currentPageCount, "asc");
    else if (eventKeyValue === 2)
      this.handleFilter(this.state.currentPageCount, "des");
  };
  render() {
    return (
      <>
        <Container fluid className="mt-4 ml-1">
          <Row>
            <Col sm={3}>
              <DropdownInput
                colors={this.state.colors}
                manufacturers={this.state.manufacturers}
                handleSelectedCars={this.handleSelectedCars}
                handleSelectedManufacturers={this.handleSelectedManufacturers}
                handleFilter={this.handleFilter}
                selectedColor={this.state.selectedColor}
                selectedManufacturer={this.state.selectedManufacturer}
              ></DropdownInput>
            </Col>
            <Col sm={9}>
              <ListView
                totalCarsCount={this.state.totalCarsCount}
                cars={this.state.cars}
                totalPageCount={this.state.totalPageCount}
                handlePaginationClick={this.handlePaginationClick}
                currentPageCount={this.state.currentPageCount}
                handleSortOrder={this.handleSortOrder}
                contentLoading={this.state.contentLoading}
              ></ListView>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
