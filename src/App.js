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
      templates: "",
      currentPage: 1,
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
  render() {
    const { templates, currentPage } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="badge-notification">
          <img src={Vector} alt="info" className="info-icon" />
          <p>
            Tada! Get started with a free template. Can’t find what you are
            looking for? Search from the 1000+ available templates
          </p>
        </div>
        <TemplateList templates={templates} />
        {templates && (
          <Pagination
            templates={templates}
            currentPage={currentPage}
            toggleNextPage={this.handleNextPage}
            togglePrevPage={this.handlePrevPage}
          />
        )}
      </div>
    );
  }
}

export default App;
