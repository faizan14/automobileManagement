import React, { Component } from "react";
import { Dropdown, Card, Button } from "react-bootstrap";

class DropdownInput extends Component {
  render() {
    const colorsList = this.props.colors.map((item, index) => (
      <Dropdown.Item
        eventKey={item}
        key={index}
        onSelect={(eventKey, event) =>
          this.props.handleSelectedCars(eventKey, event)
        }
      >
        {item}
      </Dropdown.Item>
    ));

    const manufacturersList = this.props.manufacturers.map((item, index) => (
      <Dropdown.Item
        eventKey={item.name}
        key={index}
        onSelect={(eventKey, event) =>
          this.props.handleSelectedManufacturers(eventKey, event)
        }
      >
        {item.name}
      </Dropdown.Item>
    ));

    return (
      <>
        <Card>
          <Card.Body>
            <Dropdown>
              <label className="text-left d-block">Color</label>
              <Dropdown.Toggle className="text-left d-block dropdown-toggle-button">
                {this.props.selectedColor || <span>All car colors</span>}
              </Dropdown.Toggle>
              <Dropdown.Menu>{colorsList}</Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <label className="text-left d-block mt-2">Manufacturer</label>
              <Dropdown.Toggle className="text-left d-block dropdown-toggle-button">
                {this.props.selectedManufacturer || (
                  <span>All manufacturers</span>
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu>{manufacturersList}</Dropdown.Menu>
            </Dropdown>
            <Button
              className="mt-4 float-right btn-warning text-white"
              onClick={() => this.props.handleFilter()}
            >
              Filter
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default DropdownInput;
