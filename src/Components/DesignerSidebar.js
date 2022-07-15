import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./DesignerSidebar.scss";
import DesignerContext from "../Contexts/DesignerContext";
import MinimalistDesigner from "./MinimalistDesigner";

const DesignerSidebar = () => {
  const { minimalistHeadingSpacing, setMinimalistHeadingSpacing } =
    useContext(DesignerContext);
  return (
    <div className="controls">
      <h4 className="header-title">Designer</h4>

      <MinimalistDesigner />
    </div>
  );
};

export default DesignerSidebar;
