import "../global.scss";
import "./Editor.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import MinimalistTemplate from "../Components/MinimalistTemplate";
import Designer from "../Components/Designer";

import UserInfoContext from "../Contexts/UserInfoContext";
import { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Toolbar from "../Components/Toolbar";
import HeaderEditor from "../Components/HeaderEditor";

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
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [designerVisible, setDesignerVisible] = useState(false);

  const [addingExperience, setAddingExperience] = useState(false);
  const [addingEducation, setAddingEducation] = useState(false);

  const [toolbarView, setToolbarView] = useState("information");


  return (
    <>
      <HeaderEditor />
      <div className="Editor">
        {notificationVisible && (
          <div className="notification">
            Make sure you're including your best work only!
          </div>
        )}

        <Toolbar toolbarView={toolbarView} />

        <Sidebar
          setNotificationVisibile={setNotificationVisible}
          addingExperience={addingExperience}
          setAddingExperience={setAddingExperience}
          addingEducation={addingEducation}
          setAddingEducation={setAddingEducation}
        />

        <div className="preview">
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
    </>
  );
};

export default Editor;
