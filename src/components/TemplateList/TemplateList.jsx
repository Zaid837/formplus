import React, { Component } from "react";
import "./TemplateList.styles.css";
import TemplateCard from "../TemplateCard/TemplateCard";
import { paginate } from "../../utils/paginate";
import moment from "moment";

class TemplateList extends Component {
  render() {
    const { templates, currentPage, pageSize, category, sortType } = this.props;

    // pass filtered category before applying pagination
    const filteredByCategory =
      category === "All"
        ? templates
        : templates.filter((template) => template.category.includes(category));

    // sorting templates ist based on order of descending or ascending
    const sortedByOrder = filteredByCategory.sort((a, b) => {
      const isReversed = sortType === "Ascending" ? 1 : -1;
      return isReversed * a.name.localeCompare(b.name);
    });
    // call paginate function from utils and pass to map function call
    const pagedTemplates = paginate(sortedByOrder, currentPage, pageSize);

    // console.log(moment(templates[0].created));
    // console.log(moment(templates[0].created));
    return (
      <React.Fragment>
        <div className="template-con">
          <p>{category} Templates</p>
          <p>{`${filteredByCategory.length} templates`}</p>
        </div>
        <div className="template-list">
          {templates.length !== 0 ? (
            pagedTemplates
              //   .filter((template, index) => index < 15)
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
