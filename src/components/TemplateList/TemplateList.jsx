import React, { Component } from "react";
import "./TemplateList.styles.css";
import TemplateCard from "../TemplateCard/TemplateCard";
import { paginate, getPaginatedData } from "../../utils/paginate";

class TemplateList extends Component {
  render() {
    const {
      templates,
      currentPage,
      pageSize,
      category,
      sortType,
      sortByDate,
      PaginateArg,
    } = this.props;

    // pass filtered category before applying pagination
    const filteredByCategory =
      category === "All"
        ? templates
        : templates.filter((template) => template.category.includes(category));

    const data = getPaginatedData(
      filteredByCategory,
      PaginateArg,
      sortType,
      sortByDate
    );
    // call paginate function from utils and pass to map function call
    const pagedTemplates = paginate(data, currentPage, pageSize);
    console.log(pagedTemplates);

    return (
      <React.Fragment>
        <div className="template-con">
          <p>{category} Templates</p>
          <p>{`${filteredByCategory.length} templates`}</p>
        </div>
        <div className="template-list">
          {templates.length !== 0 ? (
            pagedTemplates.map((template, index) => (
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
