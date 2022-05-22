import "./MinimalistTemplate.scss";

const MinimalistTemplate = ({
  name,
  jobTitle,
  profile,
  phoneNumber,
  email,
  address,
  experienceArray,
  addingExperience,
  experienceJobTitle,
  experienceCompany,
  experienceStartYear,
  experienceEndYear,
  experienceJobDescription,
  addingEducation,
  educationArray,
  schoolName,
  educationStartYear,
  educationEndYear,
}) => {
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

        {addingExperience && (
          <div class="page-experience-entry entry-preview">
            <span>{experienceJobTitle}</span>
            <span>{experienceCompany}</span>
            <div>
              <span>
                {experienceStartYear} - {experienceEndYear}
              </span>
            </div>
            <span>{experienceJobDescription}</span>
          </div>
        )}

        {experienceArray.map((experience) => {
          return (
            <>
              <div className="page-experience-entry">
                <span>{experience.experienceJobTitle}</span>
                <span>{experience.experienceCompany}</span>
                <div>
                  <span>
                    {experience.experienceStartYear} -
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
        {addingEducation && (
          <div class="page-experience-entry entry-preview">
            <span>{schoolName}</span>
            <div>
              <span>
                {educationStartYear} - {educationEndYear}
              </span>
            </div>
            <span>{experienceJobDescription}</span>
          </div>
        )}

        {educationArray.map((education) => {
          return (
            <>
              <div className="page-experience-entry">
                <span>{education.schoolName}</span>
                <div>
                  <span>
                    {education.educationStartYear} -{education.educationEndYear}
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
