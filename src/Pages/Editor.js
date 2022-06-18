import "../global.scss";
import "./Editor.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import MinimalistTemplate from "../Components/MinimalistTemplate";
import Designer from "../Components/Designer";

import UserInfoContext from "../Contexts/UserInfoContext";
import { useContext } from "react";
import Sidebar from "../Components/Sidebar";

const Editor = () => {
  const {
    name,
    setName,
    profile,
    setProfile,
    jobTitle,
    setJobTitle,
    address,
    setAddress,
    phoneNumber,
    setPhoneNumber,
    email,
    setEmail,
    experienceJobTitle,
    setExperienceJobTitle,
    experienceCompany,
    setExperienceCompany,
    experienceStartYear,
    setExperienceStartYear,
    experienceEndYear,
    setExperienceEndYear,
    experienceJobDescription,
    setExperienceJobDescription,
    schoolName,
    setSchoolName,
    educationStartYear,
    setEducationStartYear,
    educationEndYear,
    setEducationEndYear,
    experienceArray,
    setExperienceArray,
    educationArray,
    setEducationArray,
  } = useContext(UserInfoContext);

  const [selectedTemplate, setSelectedTemplate] = useState("minimalist");
  const [templatesVisible, setTemplatesVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [designerVisible, setDesignerVisible] = useState(false);

  const [addingExperience, setAddingExperience] = useState(false);
  const [addingEducation, setAddingEducation] = useState(false);

  return (
    <div className="Editor">
      {designerVisible && <Designer />}

      {notificationVisible && (
        <div className="notification">
          Make sure you're including your best work only!
        </div>
      )}

      <div
        className={`template-container ${
          templatesVisible ? "fade-in" : "fade-out"
        } `}
        onClick={() => setTemplatesVisible(false)}
      >
        <div className="template-options">
          <h2>Choose Template</h2>

          <div className="template-preview-wrap">
            <div>
              <div
                className="template-preview"
                style={{
                  border:
                    selectedTemplate === "minimalist" && "4px solid #1b91f0",
                }}
              ></div>
              <span class="template-preview-name">Minimalist</span>
            </div>

            <div
              className="template-preview"
              style={{
                border:
                  selectedTemplate === "minimalists" && "4px solid #1b91f0",
              }}
            ></div>

            <div
              className="template-preview"
              style={{
                border: selectedTemplate === "x" && "4px solid #1b91f0",
              }}
            ></div>

            <div
              className="template-preview"
              style={{
                border: selectedTemplate === "x" && "4px solid #1b91f0",
              }}
            ></div>

            <div
              className="template-preview"
              style={{
                border: selectedTemplate === "x" && "4px solid #1b91f0",
              }}
            ></div>
          </div>
        </div>
      </div>

      <Sidebar
        setNotificationVisibile={setNotificationVisible}
        addingExperience={addingExperience}
        setAddingExperience={setAddingExperience}
        addingEducation={addingEducation}
        setAddingEducation={setAddingEducation}
      />

      <div className="preview">
        <div
          className="designer-toggle"
          onClick={() =>
            designerVisible
              ? setDesignerVisible(false)
              : setDesignerVisible(true)
          }
        >
          <i class="fa-solid fa-crop-simple"></i>
        </div>

        <div
          className="details-design-toggle"
          onClick={() => setTemplatesVisible(true)}
        >
          <i class="fa-solid fa-grip"></i>
        </div>
        <div class="page">
          <MinimalistTemplate
            name={name}
            jobTitle={jobTitle}
            phoneNumber={phoneNumber}
            email={email}
            address={address}
            profile={profile}
            experienceArray={experienceArray}
            addingExperience={addingExperience}
            experienceJobTitle={experienceJobTitle}
            experienceCompany={experienceCompany}
            experienceStartYear={experienceStartYear}
            experienceEndYear={experienceEndYear}
            experienceJobDescription={experienceJobDescription}
            addingEducation={addingEducation}
            educationArray={educationArray}
            schoolName={schoolName}
            educationStartYear={educationStartYear}
            educationEndYear={educationEndYear}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
