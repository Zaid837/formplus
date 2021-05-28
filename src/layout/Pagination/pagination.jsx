import React, { Component } from "react";
import PropTypes from "prop-types";
import "./pagination.styles.css";
class Pagination extends Component {
  render() {
    const { templates, toggleNextPage, togglePrevPage, currentPage, pageSize } =
      this.props;
    // console.log(templates.length);

    const pagesCount = Math.ceil(templates.length / pageSize);
    return (
      <div className="pagination">
        <div className="page-con">
          <p
            className="page-btn"
            onClick={currentPage <= 1 ? null : togglePrevPage}
          >
            Previous
          </p>
          <div className="counter">
            <span className="count-number">{currentPage}</span> of {pagesCount}
          </div>
          <p
            className="page-btn"
            onClick={currentPage >= pagesCount ? null : toggleNextPage}
          >
            Next <span> </span>
          </p>
        </div>
      </div>
    );
  }
}

// checking prop types to make sure non usable props aren't passed
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  toggleNextPage: PropTypes.func.isRequired,
  togglePrevPage: PropTypes.func.isRequired,
};

export default Pagination;
