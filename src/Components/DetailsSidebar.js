import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserInfoContext from "../Contexts/UserInfoContext";
import "./DetailsSidebar.scss";

const DetailsSidebar = ({
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

  const [personalExpanded, setPersonalExpanded] = useState(false);
  const [workExperienceExpanded, setWorkExperienceExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);

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
      <h4 className="header-title">Details</h4>
      <div
        className="accordion-button"
        onClick={() =>
          personalExpanded
            ? setPersonalExpanded(false)
            : setPersonalExpanded(true)
        }
      >
        Personal
      </div>

      <div
        className="expanded"
        style={{ display: personalExpanded ? "block" : "none" }}
      >
        <div className="input-wrap">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>

        <div className="input-wrap">
          <input
            type="text"
            placeholder="Job Title"
            onChange={(e) => setJobTitle(e.target.value)}
            value={jobTitle}
          ></input>
        </div>

        <div className="input-wrap">
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          ></input>
        </div>

        <div className="input-wrap">
          <input
            type="number"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          ></input>
        </div>

        <div className="input-wrap">
          <input
            type="text"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>

        <div className="input-wrap">
          <textarea
            type="text"
            placeholder="Profile"
            onChange={(e) => setProfile(e.target.value)}
            value={profile}
          ></textarea>
        </div>
      </div>

      <div
        className="accordion-button"
        onClick={() =>
          workExperienceExpanded
            ? setWorkExperienceExpanded(false)
            : setWorkExperienceExpanded(true)
        }
      >
        Work Experience
      </div>
      <div
        className="expanded"
        style={{ display: workExperienceExpanded ? "block" : "none" }}
      >
        <h4 className="experience-title">
          Work Experience {experienceArray.length + 1}
        </h4>
        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => setExperienceJobTitle(e.target.value)}
          value={experienceJobTitle}
        ></input>
        <input
          type="text"
          placeholder="Company"
          onChange={(e) => setExperienceCompany(e.target.value)}
          value={experienceCompany}
          required
        ></input>
        <input
          type="text"
          placeholder="Start Year"
          onChange={(e) => setExperienceStartYear(e.target.value)}
          value={experienceStartYear}
        ></input>
        <input
          type="text"
          placeholder="End Year"
          onChange={(e) => setExperienceEndYear(e.target.value)}
          value={experienceEndYear}
        ></input>
        <div className="checkbox-wrap">
          <input
            type="checkbox"
            onChange={() => {
              if (currently === false) {
                setCurrently(true);
                setExperienceEndYear("Present");
              } else {
                setCurrently(false);
                setExperienceEndYear("");
              }
            }}
          ></input>
          <span>I still work here</span>
        </div>
        <textarea
          placeholder="Job Description"
          onChange={(e) => setExperienceJobDescription(e.target.value)}
          value={experienceJobDescription}
        ></textarea>
        <button
          className="button save"
          onClick={() => {
            setExperienceArray([experienceObject, ...experienceArray]);
            clearExperienceFields();
            console.log(experienceArray);
            setAddingExperience(false);
            setCurrently(false);

            if (experienceArray.length == 3) {
              setNotificationVisibile(true);
            }
          }}
        >
          Save
        </button>
      </div>

      {experienceArray.map((experience) => {
        return (
          <div class="experience-tab">
            {experience.experienceJobTitle}
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        );
      })}


<div
        className="accordion-button"
        onClick={() =>
          educationExpanded
            ? setEducationExpanded(false)
            : setEducationExpanded(true)
        }
      >
        Education
      </div>
      <div className="expanded" style={{display: educationExpanded ? 'block' : 'none'}}>
        <input
          type="text"
          placeholder="School Name"
          onChange={(e) => setSchoolName(e.target.value)}
          value={schoolName}
        ></input>
        <input
          type="text"
          placeholder="Start Year"
          onChange={(e) => setEducationStartYear(e.target.value)}
          value={educationStartYear}
        ></input>
        <input
          type="text"
          placeholder="End Year"
          onChange={(e) => setEducationEndYear(e.target.value)}
          value={educationEndYear}
        ></input>
        <button
          className="button save"
          onClick={() => {
            setEducationArray([educationObject, ...educationArray]);
            clearEducationFields();
            setAddingEducation(false);
            setCurrently(false);

            if (educationArray.length == 3) {
              setNotificationVisibile(true);
            }
          }}
        >
          Save
        </button>
      </div>

      {educationArray.map((education) => {
        return (
          <div class="experience-tab">
            {education.schoolName}
            <i class="fa-solid fa-ellipsis"></i>
          </div>
        );
      })}
    </div>
  );
};

export default DetailsSidebar;
