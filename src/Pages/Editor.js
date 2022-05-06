import "../global.scss";
import "./Editor.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Editor = () => {
  const [editorView, setEditorView] = useState("personal");

  const [notificationVisibile, setNotificationVisibile] = useState(false);

  const [name, setName] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [emailAddress, setEmailAddress] = useState();

  const [addingExperience, setAddingExperience] = useState(false);

  const [experienceArray, setExperienceArray] = useState([]);
  const [experienceJobTitle, setExperienceJobTitle] = useState();
  const [experienceCompany, setExperienceCompany] = useState();
  const [experienceStartYear, setExperienceStartYear] = useState();
  const [experienceEndYear, setExperienceEndYear] = useState();
  const [experienceJobDescription, setExperienceJobDescription] = useState();

  const clearExperienceFields = () => {
    setExperienceJobTitle();
    setExperienceCompany();
    setExperienceStartYear();
    setExperienceEndYear();
    setExperienceJobDescription();
  };

  const experienceObject = {
    experienceJobTitle: experienceJobTitle,
    experienceCompany: experienceCompany,
    experienceStartYear: experienceStartYear,
    experienceEndYear: experienceEndYear,
  };

  return (
    <div className="Editor">

        {notificationVisibile && <div className="notification">Make sure you're including your best work only!</div>}

        <div className="design-container">
            <span>Designer</span>
        </div>


      <div className="controls">
        <Link to="/" className="back">
          Back
        </Link>
        <div class="controls-nav">
          <h4
            style={{ color: editorView === "personal" && "#1b91f0" }}
            onClick={() => setEditorView("personal")}
          >
            Personal
          </h4>
          <h4
            style={{ color: editorView === "experience" && "#1b91f0" }}
            onClick={() => setEditorView("experience")}
          >
            Experience
          </h4>
          <h4
            style={{ color: editorView === "education" && "#1b91f0" }}
            onClick={() => setEditorView("education")}
          >
            Education
          </h4>
          <h4
            style={{ color: editorView === "skills" && "#1b91f0" }}
            onClick={() => setEditorView("skills")}
          >
            Skills
          </h4>
        </div>

        {(() => {
          if (editorView === "personal") {
            return (
              <div className="personal-view">
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
                    onChange={(e) => setEmailAddress(e.target.value)}
                    value={emailAddress}
                  ></input>
                </div>
              </div>
            );
          } else if (editorView === "experience") {
            return (
              <>
                {addingExperience === false && (
                  <button
                    onClick={() => setAddingExperience(true)}
                    className="button add-experience"
                  >
                    Add Experience
                  </button>
                )}

                {addingExperience && (
                  <>
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
                    <textarea
                      placeholder="Job Description"
                      onChange={(e) =>
                        setExperienceJobDescription(e.target.value)
                      }
                      value={experienceJobDescription}
                    ></textarea>
                    <button
                      className="button save"
                      onClick={() => {
                        setExperienceArray([
                          experienceObject,
                          ...experienceArray,
                        ]);
                        clearExperienceFields();
                        console.log(experienceArray);
                        setAddingExperience(false);

                        if (experienceArray.length == 2) {
                          setNotificationVisibile(true)
                        }
                      }}
                    >
                      Save
                    </button>
                  </>
                )}

                {experienceArray.map((experience) => {
                  return (
                    <div class="experience-tab">
                      {experience.experienceJobTitle}{" "}
                      <i class="fa-solid fa-ellipsis"></i>
                    </div>
                  );
                })}
              </>
            );
          } else if (editorView === "education") {
            return <p>Education</p>;
          } else if (editorView === "skills") {
            return <p>Skills</p>;
          }
        })()}
      </div>

      <div className="preview">
          <div className="details-design-toggle"></div>
        <div class="page">
          <h1>{name}</h1>
          <h2>{jobTitle}</h2>

          {experienceArray.map((experience) => {
            return <h6>{experience.experienceJobTitle}</h6>;
          })}

          {addingExperience && (
            <div class="page-experience-container">
              <h6>{experienceJobTitle}</h6>
              <p>{experienceCompany}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Editor;
