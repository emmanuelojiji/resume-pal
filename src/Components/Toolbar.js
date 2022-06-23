import "./Toolbar.scss";
import UserInfoContext from "../Contexts/UserInfoContext";
import { useState, useContext, useEffect } from "react";

const Toolbar = ({ toolbarView, setToolbarView }) => {
  const activeStyle = {
    color: "#1b91f0",
    background: "#d1e9fc",
  };

  const [notificationAlertVisible, setNotificationAlertVisible] =
    useState(false);

  const { experienceArray } = useContext(UserInfoContext);

  useEffect(() => {
    if (experienceArray.length > 3 && experienceArray.length < 5) {
      setNotificationAlertVisible(true);
    }
  }, [experienceArray.length]);

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

      <div class="icon-notification-wrap">
        <i
          class="fa-solid fa-lightbulb"
          onClick={() => {
            setToolbarView("tips");
            setNotificationAlertVisible(false);
          }}
          style={{
            color: toolbarView === "tips" && "#F7D002",
            background: toolbarView === "tips" && "#fcf0b3",
          }}
        ></i>

        {notificationAlertVisible && <div className="notification-alert"></div>}
      </div>
    </div>
  );
};

export default Toolbar;
