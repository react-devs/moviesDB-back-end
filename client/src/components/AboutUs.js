import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import NavBar from '../components/NavBar'
import '../style/aboutUs.css';
import pic1 from '../img/1.jpg';
import pic2 from '../img/2.jpg';
import pic3 from '../img/3.jpg';
import pic4 from '../img/4.jpg';
import pic5 from '../img/5.jpg';
// import { Link } from "react-router-dom";

class AboutUs extends Component {


  render() {
    const info = [
      {
        "name": "Ahmad Ammura",
        "img": pic4,
        "githup": `https://github.com/ahmadammmoura`,
        "portfolio": ''
      },
      {
        "name": "Sufian Hamdan",
        "img": pic5,
        "githup": `https://github.com/SufianHamdan`,
        "portfolio": 'https://silly-kilby-e3c68d.netlify.app/'
      }

      ,
      {
        "name": "Abdalrahman AbuGhniem",
        "img": pic2,
        "githup": `https://github.com/Abdulrahman-19`,
        "portfolio": 'https://drive.google.com/file/d/1FSLcD1T_8nqnsvTIkj0fWJjiKbXTPjH2/view'
      },
      {
        "name": "Abeer AlRafati",
        "img": pic3,
        "githup": `https://github.com/AbeerAl-Rafati`,
        "portfolio": 'https://gallant-mirzakhani-57a870.netlify.app/profile-page'
      },
      {
        "name": "Sukina Hammand",
        "img": pic1,
        "githup": `https://github.com/Sukina12`,
        "portfolio": 'https://sukinaportfolio.netlify.app/'
      }

    ]


    const card = info.map((item) => {
      return (
        <>
          <div className="card-container">
            {/* <span className="pro">PRO</span> */}
            <img className="round" src={item.img} alt="user" style={{ width: '10rem', height: '10rem' }} />
            {/* <h3></h3> */}
            <h6>{item.name}</h6>
            <p>Full-Stack Developer</p>
            <div className="buttons">

              <button className="primary ">
                <a href={item.githup}>GitHub</a>
              </button>
              <button className="primary ghost">
                <a href={item.portfolio}>Portfolio</a>

              </button>
            </div>
            <div className="skills">
              <h6>Skills</h6>
              <ul>
                <li>FrontEnd and BackEnd Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
              </ul>
            </div>
          </div>



        </>);
    });

    return (
      <>
        <NavBar />
        <div className='aboutTeamMembers'><h1 className="TeamMembers">Meet Our Team</h1></div>
        <div className="all-cards">

          {card}


        </div>

      </>
    );
  }

}

export default withAuth0(AboutUs);
