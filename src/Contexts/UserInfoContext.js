import { createContext, useState } from "react";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [experienceJobTitle, setExperienceJobTitle] = useState("");
  const [experienceCompany, setExperienceCompany] = useState("");
  const [experienceStartYear, setExperienceStartYear] = useState("");
  const [experienceEndYear, setExperienceEndYear] = useState("");
  const [experienceJobDescription, setExperienceJobDescription] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [educationStartYear, setEducationStartYear] = useState("");
  const [educationEndYear, setEducationEndYear] = useState("");

  const [experienceArray, setExperienceArray] = useState([]);
  const [educationArray, setEducationArray] = useState([]);

  const [addingYear, setAddingYear] = useState(false);



  return (
    <UserInfoContext.Provider   
      value={{
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
        setAddingYear
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default UserInfoContext;
