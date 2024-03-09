//import PortfolioContainer from "./PortfolioContainer";
//import NavTabs from "./NavTabs";

const styles = {
  headerStyle: {
    color: "white",
    fontSize: "20px",
    height:"100px",
    backgroundColor:'#193367'
 },
  img :{
    width: "50px",
    height: "50px",
  }
};

const Footer = () => {
  return (
    <div className="justify-content-center" style={styles.headerStyle} >
      <a
        href="https://github.com/RoopaThimmanacherla?tab=repositories"
        target="blank"
      >
        <img style={styles.img}
          src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png" className="rounded-circle"
          alt="github"
        />
        
      </a>
      <a
        href="https://www.linkedin.com/in/roopa-t-06274575/"
        target="blank"
      >
        <img style={styles.img}
          src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png" 
          alt="linkedin"
        />
        </a>

        <a
        href="https://www.facebook.com/roopa.reddy.3133"
        target="blank"
      >
        <img style={styles.img}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
          alt="linkedin"
        />
        </a>
    </div>
  );
};

export default Footer;

