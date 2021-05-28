import React, { Component } from "react";
import "./TemplateCard.styles.css";

class TemplateCard extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div className="template-card-con">
        <div className="card">
          <h1 className="card-header">{name}</h1>
          <div className="card-body">{description}</div>
          <div className="card-footer">Use Template</div>
        </div>
      </div>
    );
  }
}

export default TemplateCard;
