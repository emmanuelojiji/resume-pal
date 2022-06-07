import "./Designer.scss";

const Designer = () => {
  return (
    <div class="Designer">
      <h4 className="designer-heading">Designer</h4>
      <div className="designer-row">
        <h4 class="designer-sub-heading">Header</h4>
        <span>Header</span>
      </div>
      <div className="designer-row">
        <h4 class="designer-sub-heading">Heading</h4>
        <span>Heading colour</span>
  
      </div>
      <div className="designer-row">
        <h4 class="designer-sub-heading">Paragraph</h4>
        <span>Paragraph colour</span>
      </div>

      <div className="designer-row">
        <h4 class="designer-sub-heading">Spacing</h4>
        <span>Vertical Spacing</span>
        <span>Horizontal Spacing</span>
      </div>
    </div>
  );
};

export default Designer;
