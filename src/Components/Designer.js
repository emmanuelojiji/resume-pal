import "./Designer.scss";

const Designer = () => {
  return (
    <div class="Designer">
      <h4 className="designer-heading">Designer</h4>
      <div className="designer-row">
        <h4 class="designer-sub-heading">Header</h4>
        <span className="control-heading">Header color</span>
        <div class="colour-circle" style={{background: "#333333"}}></div>
        <div class="colour-circle" style={{background: "#233441"}}></div>
        <div class="colour-circle"></div>
        <div class="colour-circle"></div>
      </div>
      <div className="designer-row">
        <h4 class="designer-sub-heading">Heading</h4>
        <span class="control-heading">Font size</span>
      </div>
      <div className="designer-row">
        <h4 class="designer-sub-heading">Paragraph</h4>
        <span class="control-heading">Font size</span>
      </div>

      <div className="designer-row">
        <h4 class="designer-sub-heading">Spacing</h4>
        <span class="control-heading">Vertical Spacing</span>
      </div>
    </div>
  );
};

export default Designer;
