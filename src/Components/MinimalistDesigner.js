import { useContext } from "react";
import DesignerContext from "../Contexts/DesignerContext";

const MinimalistDesigner = () => {
    const { minimalistHeadingSpacing, setMinimalistHeadingSpacing } =
    useContext(DesignerContext);
  return (
    <>
      <span>Header</span>
      <span>Show header</span>
      <div className="input-container">
        <input type="toggle"></input>
      </div>

      <div>
        <span>Heading</span>
        <span>Letter Spacing</span>
        <div className="input-container">
          <input
            type="range"
            min="0"
            max="5"
            defaultValue={minimalistHeadingSpacing}
            onChange={(e) => {
              setMinimalistHeadingSpacing(e.target.value);
              console.log(e.target.value);
            }}
          ></input>
        </div>

        <span>Paragraph</span>
        <span>Spacing</span>
        <div className="input-container">
          <input
            type="range"
            min="0"
            max="5"
            defaultValue={minimalistHeadingSpacing}
            onChange={(e) => {
              setMinimalistHeadingSpacing(e.target.value);
              console.log(e.target.value);
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

export default MinimalistDesigner;
