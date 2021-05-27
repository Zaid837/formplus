import React, { Component } from "react";
import "./TemplateList.styles.css";
import TemplateCard from "../TemplateCard/TemplateCard";

class TemplateList extends Component {
  render() {
    const { templates } = this.props;
    return (
      <React.Fragment>
        <div className="template-con">
          <p>All Templates</p>
          <p>{`${templates.length} templates`}</p>
        </div>
        <div className="template-list">
          {templates ? (
            templates
              .filter((template, index) => index < 15)
              .map((template, index) => (
                <TemplateCard
                  key={index}
                  name={template.name}
                  description={template.description}
                />
              ))
          ) : (
            <h1>Loading Templates...</h1>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default TemplateList;
