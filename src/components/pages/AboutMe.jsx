import photo from '../../assets/images/ProfilePic.png'
export default function AboutMe(){
    return(
        <div>
      <h1>About Page</h1>
      <img style={{height:"10%",width:"10%",borderRadius: "50%"}} src={photo} alt='profilepic'/>
      <p style={{margin:"0px"}}>
    Dedicated Full Stack Web Developer with a prestigious bootcamp certification from UCSD and a solid
foundation acquired through 3 years of hands-on experience in Salesforce development and administration.
Proficient in the use of front-end & back-end technologies – committed to delivering high-quality
solutions that meet and exceed client expectations.Skilled in designing, developing, and deploying web applications with a keen focus on user experience
and functionality.Adept at integrating third-party APIs and implementing responsive design principles to optimize performance
across various devices.Proven track record in Salesforce customization, configuration, and workflow automation, leveraging Apex
and Visualforce to streamline business processes and drive operational efficiency.  
      </p>
    </div>
    )

}