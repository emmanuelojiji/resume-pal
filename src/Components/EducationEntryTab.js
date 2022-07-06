import "./EntryTab.scss";

import UserInfoContext from "../Contexts/UserInfoContext";
import { useState, useContext } from "react";

const EducationEntryTab = ({ education, index }) => {
  const { educationArray, setEducationArray } = useContext(UserInfoContext);

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div class="experience-tab">
      {education.schoolName}

      <div className="menu-container">
        <i
          class="fa-solid fa-ellipsis"
          onClick={() =>
            menuVisible ? setMenuVisible(false) : setMenuVisible(true)
          }
        ></i>
        {menuVisible && (
          <div className="edit-delete-menu">
            <span
              onClick={() => {
                console.log(educationArray.length);
              }}
            >
              Edit
            </span>
            <span
              onClick={() => {
                educationArray.splice(index, 1);
                setEducationArray([...educationArray]);
              }}
            >
              Delete
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationEntryTab;
