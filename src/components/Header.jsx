import PortfolioContainer from "./PortfolioContainer";
//import NavTabs from "./NavTabs";

const styles = {
    headerStyle: {
      color:"white",
      fontSize: '20px',
      backgroundColor:'#193367'
    }
  };

const Header=()=>{
return(<div style={styles.headerStyle}>

     <PortfolioContainer/>
    </div>)
}   

export default Header;