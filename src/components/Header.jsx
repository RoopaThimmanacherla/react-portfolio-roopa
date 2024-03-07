import PortfolioContainer from "./PortfolioContainer";
//import NavTabs from "./NavTabs";

const styles = {
    headerStyle: {
      background: ' #003366',
      color:"white",
      fontSize: '20px',
      backgroundImage:`url("https://wallpaperboat.com/wp-content/uploads/2019/10/free-website-background-07.jpg")`
    }
  };

const Header=()=>{
return(<div style={styles.headerStyle}>

     <PortfolioContainer/>;
    </div>)
}   

export default Header;