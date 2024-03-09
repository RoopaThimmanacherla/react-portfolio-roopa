/* eslint-disable react/prop-types */
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand"style={{height:"100px",backgroundColor:'#bfd9bf',fontSize:'20px'}}>
      <div className="container">
          <b style={{color:"green",fontSize:"40px"}}>Roopa</b>
        <ul className="nav  justify-content-center">
          <li className="nav-item">
            <a
              href="#aboutMe"
              onClick={() => handlePageChange("AboutMe")}
              // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              <b>AboutMe</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              <b>Contact</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              <b>Portfolio</b>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              <b>Resume</b>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
