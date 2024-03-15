//import PortfolioContainer from "./PortfolioContainer";
//import NavTabs from "./NavTabs";

const styles = {
  footerstyle: {
    backgroundColor:'#28587B',
    display:"flex",
    flexDirection:"row",
    position:"fixed",
    bottom:0,
    justifyContent: 'center',
    padding: '10px 0', // Add padding top and bottom
    width: '100%', // Take up full width of the viewport



 },
  img :{
    width: "30px",
    height: "30px",
  }
};

const Footer = () => {
  return (
    <div className="justify-content-center" style={styles.footerstyle} >
      <a
         style={{padding:"10px"}} href="https://github.com/RoopaThimmanacherla?tab=repositories"
        target="blank"
      >
        <img style={styles.img}
          src="https://www.kindpng.com/picc/m/128-1280330_github-logo-png-github-icon-blue-png-transparent.png" className="rounded-circle"
          alt="github"
        />
        
      </a>
      <a style={{padding:"10px"}}
        href="https://www.linkedin.com/in/roopa-t-06274575/"
        target="blank"
      >
        <img style={styles.img}
          src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG7.png" 
          alt="linkedin"
        />
        </a>

        <a style={{padding:"10px"}}
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

