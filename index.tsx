import React from 'react'

export default function Home() {
    return (
        <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Jason Page</title>
      {/* Favicon */}
      <link rel="icon" href="https://favicon-generator.org/favicon-generator/htdocs/favicons/2015-01-22/0d950fb0ad4f33707d8ec598296c264a.ico" />
      {/* Font Awesome Social Media Icons */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
      {/* CSS Styling */}
      <link rel="stylesheet" href="style.css" />
      {/* Stars Background Animation */}
      <section className="animated-background">
        <div id="stars1" />
        <div id="stars2" />
        <div id="stars3" />
      </section>
      {/* Main Content */}
      <a id="profilePicture">
        <img src="https://avatars.githubusercontent.com/u/72579902?v=4" alt="Profile Picture" /> 
      </a>
      <div id="userName"> Jason Page </div>
      {/* Social Media Links */}
      <div id="links">
        <a className="link" href="https://youtube.com" target="_blank">
          <i className="fab fa-youtube">&nbsp;</i> YouTube
        </a>
        <a className="link" href="https://github.com/jasonepage" target="_blank">
          <i className="fab fa-github" /> Github
        </a>
        <a className="link" href="https://www.linkedin.com/in/jason-page-b244b9233/" target="_blank">
          <i className="fab fa-linkedin" /> Linkedin
        </a>
        <a className="link" href="https://discord.com/users/1047757914816913428" target="_blank">
          <i className="fab fa-discord">&nbsp;</i> Discord
        </a>
      </div>
      <div id="footer"> Contact • jasonepage@gmail.com </div>
    </div>
    
      );
    };

