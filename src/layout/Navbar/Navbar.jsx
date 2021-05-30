import React, { Component } from "react";
import "./Navbar.styles.css";
import SearchIcon from "../../assets/search.png";

class Navbar extends Component {
  render() {
    const {
      handleSelectedCategory,
      handleSelectOrderType,
      sortType,
      handleSelectDateType,
      sortByDate,
    } = this.props;
    return (
      <div className="navbar">
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search Templates"
          />
          <img src={SearchIcon} alt="search-icon" className="search-icon" />
        </div>
        <div className="filters">
          <p className="sort-title">Sort By:</p>
          <div className="filter-types">
            <div className="category">
              <span className="dropdown-title">Category</span>
              <select name="category" id="" onChange={handleSelectedCategory}>
                <option value="All">All</option>
                <option value="Health">Health</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Education">Education</option>
              </select>
            </div>
            <div className="category">
              <span className="dropdown-title">Order</span>
              <select
                name="order"
                id=""
                onChange={handleSelectOrderType}
                value={sortType}
              >
                <option value="default">Default</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
            <div className="category">
              <span className="dropdown-title">Date</span>
              <select
                name="date"
                id=""
                onChange={handleSelectDateType}
                value={sortByDate}
              >
                <option value="default">Default</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
