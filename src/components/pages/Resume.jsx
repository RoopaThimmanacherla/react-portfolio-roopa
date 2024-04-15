import resume from "../../assets/Resume.pdf"
export default function Resume(){
    return(
        <div style={{"margin-left": "80px","margin-top":"50px"}}>
            <h1>Resume</h1>
            <a href={resume} target="blank" download>Download my Resume</a>

            <h2>
                Front-end Proficiencies
            </h2>
            <ul>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li><li>
                    JavaScript
                </li>
                <li>
                    JQuery
                </li>
                <li>
                    HandleBars
                </li>
                <li>
                    React
                </li>
                <li>
                    Bootstrap
                </li>
                <li>
                    GraphQL
                </li>
            </ul>

            <div>
                <h2>
                    Back-end Proficiencies
                </h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL,Sequelize
                    </li>
                    <li>
                        MongoDB,Mongoose
                    </li>
                    <li>
                        REST APIs
                    </li>
                    <li>
                        GraphQl
                    </li>
                </ul>
            </div>
        </div>
    )
}