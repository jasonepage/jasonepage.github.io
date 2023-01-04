import React from "react";

export default function Home() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Jason Page</title>
      {/* Favicon */}
      <link
        rel="icon"
        href="https://favicon-generator.org/favicon-generator/htdocs/favicons/2015-01-22/0d950fb0ad4f33707d8ec598296c264a.ico"
      />
      {/* Font Awesome Social Media Icons */}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />
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
        <img
          src="https://avatars.githubusercontent.com/u/72579902?v=4"
          alt="Profile Picture"
        />
      </a>
      <div id="userName"> Jason Page </div>
      {/* Social Media Links */}
      <div id="links">
        <a
          className="link"
          href="https://github.com/jasonepage"
          target="_blank"
        >
          <i className="fab fa-github" /> Github
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/jason-page-b244b9233/"
          target="_blank"
        >
          <i className="fab fa-linkedin" /> Linkedin
        </a>
        <a
          className="link"
          href="https://s3.amazonaws.com/handshake.production/documents/documents/035/201/055/original/JasonPage_Resume.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HSNSGACXF6KKT2H%2F20230104%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230104T054043Z&X-Amz-Expires=10&X-Amz-SignedHeaders=host&X-Amz-Signature=e5d0093841714a69426b2f44ca6b04b9ea8db6ab01f9fbe3ed2001c006016b3f"
          target="_blank"
        >
          <i className="fas fa-file" /> Resume
        </a>
      </div>
      <div id="footer"> Contact • jasonepage@gmail.com </div>
    </div>
  );
}
