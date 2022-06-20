import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserInfoContext from "../Contexts/UserInfoContext";
import "./TipsSidebar.scss";
import TipCard from "./TipCard";

const TipsSidebar = () => {
  const [tipsEmpty, setTipsEmpty] = useState(true);

  const { experienceArray } = useContext(UserInfoContext);

  useEffect(() => {
    if (experienceArray.length > 3) {
      setTipsEmpty(false);
    }
  }, [experienceArray.length]);

  return (
    <div className="controls">
      <h4 className="header-title">Tips</h4>

      {tipsEmpty && <p className="no-tips">No tips right now, your resume looks great!</p>}

      <div className="tip-container">
        {experienceArray.length > 3 && (
          <TipCard
            title={`Are you sure you want to include ${experienceArray.length} work experience entries?`}
            description=" Make sure you're including only relevant work experience."
          />
        )}
      </div>
    </div>
  );
};

export default TipsSidebar;
