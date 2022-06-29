import "./MinimalistTemplate.scss";
import { useContext } from "react";
import UserInfoContext from "../Contexts/UserInfoContext";

const MinimalistTemplate = () => {
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

  return (
    <div className="MinimalistTemplate">
      <div className="minimalist-header">
        <div className="minimalist-header-left">
          <span className="minimalist-name">{name}</span>
          <span className="minimalist-job-title">{jobTitle}</span>
        </div>

        <div className="minimalist-header-right">
          <span>{address}</span>
          <span>{phoneNumber}</span>
          <span>{email}</span>
        </div>
      </div>

      <div class="content-row">
        <span className="minimalist-heading">PROFILE</span>
        <span>{profile}</span>
      </div>

      <div class="content-row">
        <span className="minimalist-heading">EXPERIENCE</span>

        <div class="page-experience-entry entry-preview">
          <span>{experienceJobTitle}</span>
          <span>{experienceCompany}</span>
          <div>
            <span>
              {experienceStartYear} {addingYear && <>-</>} {experienceEndYear}
            </span>
          </div>
          <span>{experienceJobDescription}</span>
        </div>

        {experienceArray.map((experience) => {
          return (
            <>
              <div className="page-experience-entry">
                <span>{experience.experienceJobTitle}</span>
                <span>{experience.experienceCompany}</span>
                <div>
                  <span>
                    {experience.experienceStartYear} -{" "}
                    {experience.experienceEndYear}
                  </span>
                </div>
                <span>{experience.experienceJobDescription}</span>
              </div>
            </>
          );
        })}
      </div>

      <div class="content-row">
        <span className="minimalist-heading">EDUCATION</span>

        <div class="page-experience-entry entry-preview">
          <span>{schoolName}</span>
          <div>
            <span>
              {educationStartYear} - {educationEndYear}
            </span>
          </div>
          <span>{experienceJobDescription}</span>
        </div>

        {educationArray.map((education) => {
          return (
            <>
              <div className="page-experience-entry">
                <span>{education.schoolName}</span>
                <div>
                  <span>
                    {education.educationStartYear} -{" "}
                    {education.educationEndYear}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MinimalistTemplate;
