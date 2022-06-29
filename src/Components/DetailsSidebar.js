import { Link } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
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
    addingYear,
    setAddingYear,
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
    setExperienceJobTitle("");
    setExperienceCompany("");
    setExperienceStartYear("");
    setExperienceEndYear("");
    setExperienceJobDescription("");
  };

  const clearEducationFields = () => {
    setSchoolName("");
    setEducationStartYear("");
    setEducationEndYear("");
    setAddingYear(false);
  };

  const jobTitleInput = useRef();

  useEffect(() => {
    jobTitleInput.current.value = "hey"
  })

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
        style={{ background: personalExpanded && "#f5f5f5" }}
      >
        Personal
        <i class="fa-solid fa-chevron-down"></i>
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
            onChange={(e) => {
              setJobTitle(e.target.value);

              if (e.target.value > 0) {
                setAddingYear(true);
              } else {
                setAddingYear(false);
              }
            }}
            value={jobTitle}
            ref={jobTitleInput}
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
        style={{ background: workExperienceExpanded && "#f5f5f5" }}
      >
        Work Experience
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div
        className="expanded"
        style={{ display: workExperienceExpanded ? "block" : "none" }}
      >
        <h4 className="experience-title">Entry {experienceArray.length + 1}</h4>
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
          onChange={(e) => {
            setExperienceStartYear(e.target.value);

            if (e.target.value) {
              setAddingYear(true);
            } else {
              setAddingYear(false);
            }
          }}
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
            setCurrently(false);
            setAddingYear(false);

            if (experienceArray.length == 3) {
              setNotificationVisibile(true);
            }
          }}
        >
          Save
        </button>
      </div>

      {experienceArray.map((experience, index) => {
        return (
          <div class="experience-tab">
            {experience.experienceJobTitle}

            <div className="menu-container">
              <i class="fa-solid fa-ellipsis" key={index}></i>
              <div className="edit-delete-menu">
                <span
                  onClick={() => {
                    setWorkExperienceExpanded(true);
                    
                    console.log(jobTitleInput.current.value)
                  }}
                >
                  Edit
                </span>
                <span>Delete</span>
              </div>
            </div>
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
        style={{ background: educationExpanded && "#f5f5f5" }}
      >
        Education
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div
        className="expanded"
        style={{ display: educationExpanded ? "block" : "none" }}
      >
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
