import "./HeaderEditor.scss";

import { Link } from "react-router-dom";

const HeaderEditor = () => {
  return (
    <header>
      <div className="page-width">
        <h3>ResumePal</h3>

        <div>
          <button>Share</button>
          <button>Download</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderEditor;
