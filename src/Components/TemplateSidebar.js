import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserInfoContext from "../Contexts/UserInfoContext";
import "./TemplateSidebar.scss";

const TemplateSidebar = ({selectedTemplate}) => {
  return (
    <div className="TemplateSidebar">
      <h4 className="header-title">Select Template</h4>

      <div className="template-preview-container">
        <div className="template-preview-wrap">
          <div className="template-preview" style={{border: selectedTemplate === "minimalist" && 'solid 1px #1b91f0'}}></div>
          <h5 style={{color: selectedTemplate === "minimalist" && '#1b91f0'}} >Minimalist</h5>
        </div>

        <div className="template-preview-wrap">
          <div className="template-preview"></div>
        </div>

        <div className="template-preview-wrap">
          <div className="template-preview"></div>
        </div>

        <div className="template-preview-wrap">
          <div className="template-preview"></div>
        </div>

        <div className="template-preview-wrap">
          <div className="template-preview"></div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSidebar;
