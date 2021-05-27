import React, { Component } from "react";
import "./pagination.styles.css";
class Pagination extends Component {
  //   constructor() {
  //     super();
  //     this.state = {

  //     };
  //   }

  render() {
    const { templates, toggleNextPage, togglePrevPage, currentPage } =
      this.props;
    // console.log(templates.length);

    const pagesCount = Math.ceil(templates.length / 15);
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

export default Pagination;
