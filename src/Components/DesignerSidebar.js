import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "./DesignerSidebar.scss";
import DesignerContext from "../Contexts/DesignerContext";

const DesignerSidebar = () => {
  const { minimalistHeadingSpacing, setMinimalistHeadingSpacing } =
    useContext(DesignerContext);
  return (
    <div className="controls">
      <h4 className="header-title">Designer</h4>

      <div>
        <span>Heading</span>
        <span>Letter Spacing</span>
        <input
          type="range" min="0" max="5" defaultValue={minimalistHeadingSpacing}
          onChange={(e) =>{ setMinimalistHeadingSpacing(e.target.value); console.log(e.target.value)}}
        ></input>
      </div>
    </div>
  );
};

export default DesignerSidebar;
