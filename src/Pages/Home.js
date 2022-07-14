import "../global.scss";
import "./Home.scss";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

import TypeAnimation from "react-type-animation";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="banner">
        <p>Hey! This is the development version of ResumePal. So if you find things which don't look or work correctly, don't worry!</p>
      </div>
      <section className="billboard">
        <div className="page-width">
          <h1>We make resumes look beautiful.</h1>
          <p>
            With our simple and interactive editor, you can be job ready within
            minutes.
          </p>
          <Link to="/editor" className="button"> 
            Create My Resume
          </Link>

          <div className="simulator">
            <div className="simulator-content">
              <TypeAnimation
                className="name"
                cursor={false}
                sequence={["Emmanuel O"]}
                wrapper="h3"
              />

              <TypeAnimation
                cursor={false}
                sequence={[
                  "",
                  2000,
                  "Hospitality Assistant",
                  1000,
                  "Front End Developer",
                  1000,
                  "UI Design Engineer",
                  1000,
                ]}
                wrapper="p"
              />

              <div className="profile-wrap">
                <TypeAnimation
                  className="profile-h3"
                  cursor={false}
                  sequence={["", 11000, "Profile"]}
                  wrapper="h3"
                />

                <TypeAnimation
                  className="bio"
                  cursor={false}
                  sequence={[
                    "",
                    12000,
                    "An aspiring",
                    1000,
                    "A creator who builds exciting products that cause conversation.",
                  ]}
                  wrapper="P"
                />
              </div>

              <div className="skeleton-line skeleton-line-1"></div>
              <div className="skeleton-line skeleton-line-2"></div>
              <div className="skeleton-line skeleton-line-3"></div>

              <a className="simulator-button">Create</a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
