import React from "react";

import "./TemplateCard.styles.css";

const TemplateCard = ({ name, description }) => {
  return (
    <div className="template-card-con">
      <div className="card">
        <h1 className="card-header">{name}</h1>
        <div className="card-body">{description}</div>
        <div className="card-footer">Use Template</div>
      </div>
    </div>
  );
};

export default TemplateCard;
