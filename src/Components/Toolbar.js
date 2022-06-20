import "./Toolbar.scss";

const Toolbar = ({ toolbarView, setToolbarView }) => {
  const activeStyle = {
    color: "#1b91f0",
    background: "#d1e9fc",
  };

  return (
    <div className="Toolbar">
      <i
        class="fa-solid fa-pen-to-square"
        onClick={() => setToolbarView("details")}
        style={{
          color: toolbarView === "details" && "#1b91f0",
          background: toolbarView === "details" && "#d1e9fc",
        }}
      ></i>

      <i
        class="fa-solid fa-wand-magic-sparkles"
        onClick={() => setToolbarView("designer")}
        style={{
          color: toolbarView === "designer" && "#1b91f0",
          background: toolbarView === "designer" && "#d1e9fc",
        }}
      ></i>
      <i
        class="fa-solid fa-table-columns"
        onClick={() => setToolbarView("templates")}
        style={{
          color: toolbarView === "templates" && "#1b91f0",
          background: toolbarView === "templates" && "#d1e9fc",
        }}
      ></i>
    </div>
  );
};

export default Toolbar;
