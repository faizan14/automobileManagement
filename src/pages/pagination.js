import React, { Component } from "react";
import { paginationKey } from "./constants";
class Pagination extends Component {
  render() {
    return (
      <div className="pagination-container mb-3">
        <span
          className="mr-2 text-warning-m font-weight-bolder ft-sz-12"
          onClick={() => this.props.handleClick(paginationKey.first)}
        >
          First
        </span>
        <span
          className="mr-2 text-warning-m font-weight-bolder ft-sz-12"
          onClick={() => this.props.handleClick(paginationKey.previous)}
        >
          Previous
        </span>
        <span className="mr-2 ft-sz-12">
          Page {this.props.currentPageCount} of {this.props.totalPageCount}
        </span>
        <span
          className="mr-2 text-warning-m font-weight-bolder ft-sz-12"
          onClick={() => this.props.handleClick(paginationKey.next)}
        >
          Next
        </span>
        <span
          className="mr-2 text-warning-m font-weight-bolder ft-sz-12"
          onClick={() => this.props.handleClick(paginationKey.last)}
        >
          Last
        </span>
      </div>
    );
  }
}

export default Pagination;
