import photo from '../../assets/images/ProfilePic.png'
export default function AboutMe(){
    return(
        <div>
      <h1>About Page</h1>
      <img style={{height:"10%",width:"10%",borderRadius: "50%"}} src={photo} alt='profilepic'/>
      <p style={{margin:"0px"}}>
      Hey Roopa here having 3 years of experience in salesforce with
          capgemini and took a career gap of 8 years to give time to
          famliy.Mostly worked with client coca-cola for almost two years to
          enhance the already developed applicatuions.Worked with clients
          Philips health care and cycle30 for almost 1year to test the already
          developed application in salesforce.

        
      </p>
    </div>
    )

}