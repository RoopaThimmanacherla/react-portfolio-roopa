import { useState } from "react";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavTabs from './NavTabs';


export default function PortfolioContainer(){
    const[currentPage,setCurrenetPage]=useState('AboutMe');
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component  to render.

    const renderPage=()=>{
        if(currentPage==='AboutMe'){
            return <AboutMe/>
        }
        if(currentPage==='Contact'){
            return <Contact/>
        }
        if(currentPage==='Portfolio'){
            return <Portfolio/>
        }
        if(currentPage==='Resume'){
            return<Resume/>
        }
    };

    const handlePageChange=(page)=>setCurrenetPage(page);
    
    return(
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>

      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
        </div>
    )


}