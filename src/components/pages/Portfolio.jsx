import "./portfolio.css";
import dashboard from "../../assets/images/weatherDashboard.png";
import tripPlanner from "../../assets/images/tripPlanner.png";
import workdayScheduler from "../../assets/images/workdayScheduler.png";
import generatePassword from "../../assets/images/passwordGenerator.png";
import quiz from "../../assets/images/codeQuiz.png";
import ratatouille from "../../assets/images/Ratatouille.png"


export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 ">
          <div
            className="box "
            style={{
              backgroundImage: `url(${dashboard})`,backgroundSize: "cover"
              
            }}
          >
            <div style={{ position: "absolute", margin: "60px" }}>
              <a
                href="https://github.com/RoopaThimmanacherla/weather-dashboard"
                target="blank"
                className="hidden-link"
              >
                Weather Dashboard
              </a>
              <a
                href="https://github.com/RoopaThimmanacherla/weather-dashboard"
                target="blank"
                className="hidden-link"
              >
                <img
                  style={{ width: "60px", height: "60px", padding: "10px" }}
                  src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png"
                  className="rounded-circle"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div
            className="box"
            style={{
              backgroundImage: `url(${tripPlanner})`,backgroundSize: "cover"
            }}
          >
            <div style={{ position: "absolute", margin: "60px" }}>
              <a
                href="https://roopathimmanacherla.github.io/trip-planner/"
                target="blank"
                className="hidden-link"
              >
                Trip Planner
              </a>
              <a
                href="https://github.com/RoopaThimmanacherla/trip-planner"
                target="blank"
                className="hidden-link"
              >
                <img
                  style={{ width: "60px", height: "60px", padding: "10px" }}
                  src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png"
                  className="rounded-circle"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div
            className="box"
            style={{
              backgroundImage: `url(${workdayScheduler})`,backgroundSize: "cover"
            }}
          >
              <div style={{ position: "absolute", margin: "60px" }}>
              <a
                href="https://roopathimmanacherla.github.io/work-day-scheduler/"
                target="blank"
                className="hidden-link"
              >
                Work Day Scheduler
              </a>
              <a
                href="https://github.com/RoopaThimmanacherla/work-day-scheduler"
                target="blank"
                className="hidden-link"
              >
                <img
                  style={{ width: "60px", height: "60px",padding:"10px" }}
                  src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png"
                  className="rounded-circle"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div
            className="box"
            style={{
              backgroundImage: `url(${generatePassword})`,backgroundSize: "cover"
            }}
          >
              <div style={{ position: "absolute", margin: "60px" }}>
              <a
                href="https://github.com/RoopaThimmanacherla/generate-password"
                target="blank"
                className="hidden-link"
              >
                Generate Password
              </a>
              <a
                href="https://roopathimmanacherla.github.io/generate-password/"
                target="blank"
                className="hidden-link"
              >
                <img
                  style={{ width: "60px", height: "60px",padding:"10px" }}
                  src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png"
                  className="rounded-circle"
                  alt="github"
                />
              </a>
            </div>
          </div>
          </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div
            className="box"
            style={{
              backgroundImage: `url(${quiz})`,backgroundSize: "cover"
            }}
          >
              <div style={{ position: "absolute", margin: "60px" }}>
              <a
                href="https://github.com/RoopaThimmanacherla/code-quiz"
                target="blank"
                className="hidden-link"
              >
                Code Quiz
              </a>
              <a
                href="https://roopathimmanacherla.github.io/code-quiz/"
                target="blank"
                className="hidden-link"
              >
                <img
                  style={{ width: "60px", height: "60px", padding: "10px" }}
                  src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png"
                  className="rounded-circle"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div
            className="box"
            style={{
              backgroundImage: `url(${ratatouille})`,backgroundSize: "cover"

            }}
          >
              <div style={{ position: "absolute", margin: "60px" }}>
              <a
                href="https://github.com/RoopaThimmanacherla/Ratatouille"
                target="blank"
                className="hidden-link"
              >
                Ratatouille
              </a>
              <a
                href="https://ratatouille-v2-b27a725e290e.herokuapp.com/login"
                target="blank"
                className="hidden-link"
              >
                <img
                  style={{ width: "60px", height: "60px", padding: "10px" }}
                  src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png"
                  className="rounded-circle"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
