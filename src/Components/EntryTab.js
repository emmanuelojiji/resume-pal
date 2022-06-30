import "./EntryTab.scss";

import UserInfoContext from "../Contexts/UserInfoContext";
import { useState, useContext } from "react";

const EntryTab = ({ experience, index }) => {
  const { experienceArray, setExperienceArray } = useContext(UserInfoContext);

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div class="experience-tab">
      {experience.experienceJobTitle}

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
                console.log(experienceArray.length);
              }}
            >
              Edit
            </span>
            <span
              onClick={() => {
                experienceArray.splice(index, 1);
                setExperienceArray([...experienceArray]);
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

export default EntryTab;
