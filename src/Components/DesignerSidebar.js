import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserInfoContext from "../Contexts/UserInfoContext";
import "./DesignerSidebar.scss";

const DesignerSidebar = ({
  setNotificationVisibile,
  addingExperience,
  setAddingExperience,
  addingEducation,
  setAddingEducation,
}) => {
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

  const [editorView, setEditorView] = useState("personal");

  const [currently, setCurrently] = useState(false);

  const experienceObject = {
    experienceJobTitle: experienceJobTitle,
    experienceCompany: experienceCompany,
    experienceStartYear: experienceStartYear,
    experienceEndYear: experienceEndYear,
    experienceJobDescription: experienceJobDescription,
  };

  const educationObject = {
    schoolName: schoolName,
    educationStartYear: educationStartYear,
    educationEndYear: educationEndYear,
  };

  const clearExperienceFields = () => {
    setExperienceJobTitle();
    setExperienceCompany();
    setExperienceStartYear();
    setExperienceEndYear();
    setExperienceJobDescription();
  };

  const clearEducationFields = () => {
    setSchoolName("");
    setEducationStartYear("");
    setEducationEndYear("");
  };

  return (
    <div className="controls">
      <h4 className="header-title">Designer</h4>
    </div>
  );
};

export default DesignerSidebar;
