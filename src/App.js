import React from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./layout/Navbar/Navbar";
import TemplateList from "./components/TemplateList/TemplateList";

import Vector from "./assets/Group.png";
import Pagination from "./layout/Pagination/pagination";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates",
      templates: [],
      currentPage: 1,
      pageSize: 15,
      category: "All",
      sortType: "Default",
      sortByDate: "Default",
    };
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ templates: res.data });
  }

  handleNextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  handlePrevPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  selectCategory = (e) => {
    const { value } = e.target;
    this.setState({ category: value, sortType: "Default" });
  };

  selectSortType = (e) => {
    const { value } = e.target;
    this.setState({ sortType: value });
  };

  selectSortDateType = (e) => {
    const { value } = e.target;
    this.setState({ sortByDate: value });
  };
  render() {
    const { templates, currentPage, pageSize, category, sortType, sortByDate } =
      this.state;
    return (
      <div className="App">
        <Navbar
          handleSelectedCategory={this.selectCategory}
          category={category}
          handleSelectOrderType={this.selectSortType}
          handleSelectDateType={this.selectSortDateType}
          sortType={sortType}
          sortByDate={sortByDate}
        />
        <div className="badge-notification">
          <img src={Vector} alt="info" className="info-icon" />
          <p>
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </p>
        </div>

        <TemplateList
          templates={templates}
          currentPage={currentPage}
          pageSize={pageSize}
          category={category}
          sortType={sortType}
          sortByDate={sortByDate}
        />
        {templates.length !== 0 && (
          <Pagination
            templates={templates}
            currentPage={currentPage}
            toggleNextPage={this.handleNextPage}
            togglePrevPage={this.handlePrevPage}
            pageSize={pageSize}
          />
        )}
      </div>
    );
  }
}

export default App;
