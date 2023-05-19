
import React from "react";
import "./About.css";
import githubLogo from "../assets/github.png";
import linkedinLogo from "..//assets/linkedin.png";


export default function About( { mode } ) {   // mode because 

    const teamMembers = [
    

        {
            name: "Mark Roberston",
            bio: `I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
            I'm currently learning Express, having already studied React, JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.  When I'm not coding, I enjoy movies, watching Formula 1 racing, music, travel and playing with my German Shepherd.
            
            I would very much enjoy working for a start-up (as I have start-up experience) or even a large financial firm, as my experience up until Pursuit has been in the financial markets.`,
            github: "https://github.com/MarkRobertson67",
            linkedin:"https://www.linkedin.com/in/mark-robertson-ny-uk/",
        },
    ];


    return (
        <div className="about-wrapper" style={{ 
          filter: mode ? "brightness(80%)" : "none",
        }}>
          
                <div className="about"><br />
                  <h1>About my Project</h1>
                  
                  <p>
                  Introducing "LuxuryRides: The Ultimate Destination for High-End and Collectable Cars"

                Welcome to LuxuryRides, the premier platform for enthusiasts and collectors seeking the finest and most sought-after automobiles. Our full-stack application combines cutting-edge technology with a passion for luxury vehicles, providing you with an exceptional user experience. Whether you're a connoisseur, a dreamer, or a discerning buyer, LuxuryRides is your gateway to the world of high-end automotive excellence.
                  </p>
                  <p>
                  With LuxuryRides, we've curated a meticulously crafted selection of iconic and rare automobiles. From elegant convertibles to powerful sports cars, our collection showcases the most coveted brands and models in the industry. Our team of experts scours the market to bring you a wide range of options, ensuring that you can find the car of your dreams.
                  </p>
                  <p>
                  The front-end of our application is built on React, offering a seamless and intuitive interface for browsing, exploring, and interacting with our collection. You can easily perform CRUD operations on each vehicle, from viewing detailed information and images to creating new listings and editing existing ones. Our thoughtfully designed forms make it effortless to add and update listings, ensuring that the process is user-friendly and efficient.
                  </p>
                  <p>
                  On the back-end, our RESTful server powers the entire application, allowing for seamless communication and data management. We've implemented a robust database structure with multiple fields and data types, ensuring the accuracy and integrity of our car listings. You can expect a reliable and secure experience, with routes dedicated to creating, reading, updating, and deleting resources. Additionally, our server provides appropriate responses for unmatched routes, ensuring a smooth browsing experience.
                  </p>
                  <p>
                  But LuxuryRides is more than just a platform for browsing and buying cars. We've added unique features that go beyond the traditional scope. Our innovative sorting and filtering options enable you to discover vehicles based on specific criteria, making it easier to find your perfect match. Additionally, we've incorporated a captivating image carousel and an engaging infinite-scroll functionality, enhancing your overall experience.
                  </p>
                  <p>
                  To bring LuxuryRides to life, we've deployed both the front-end and back-end applications to the web. You can access our platform from anywhere, anytime, using the provided URL. Our GitHub repositories house the source code for both applications, ensuring transparency and collaboration. You'll also find comprehensive setup instructions and documentation in the readme files, allowing you to explore and contribute to the project.
                  </p>
                  <p>
                  Experience the thrill of luxury automotive excellence with LuxuryRides. Start your journey today by visiting our website and discover a world where passion meets craftsmanship. Explore our collection, create your dream car, and immerse yourself in the captivating world of high-end and collectable automobiles. LuxuryRides is here to make your automotive dreams a reality.
                  </p>
                  <em><p>(Please see readme.md for additional information)</p></em>

                </div>
              
                <div className="team">
      <h1>Meet the Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
            <div className="links-container">
              <div className="github-container">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <img src={githubLogo} alt="GitHub Logo" width={30} height={30} />
                </a>
              </div>
              <div className="linkedin-container">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={linkedinLogo} alt="LinkedIn Logo" width={80} height={26} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="trello-board">
          <a href="https://trello.com/b/M5mUJwWm/luxuryrides" target="_blank" rel="noopener noreferrer">
          <h1>Trello Board</h1>
        </a>
      </div>
      {/* <div className="wireframe">
        <a href="https://lucid.app/lucidchart" target="_blank" rel="noopener noreferrer">
          <h1>Wireframe</h1>
        </a>
      </div> */}
    </div>
  </div>
);
    }