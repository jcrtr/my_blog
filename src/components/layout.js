import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

// import Back from "./path/assets/wave_back.svg";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="content">
      <div className="site-wrapper">
        <header className="site-header">
          <div className="site-title">
            <Link to="/">
              <div className="logo">
                <img src="/assets/img/logo.png" alt={data.site.siteMetadata.title}></img>
                <div className="blink"></div>
              </div>
            </Link>
          </div>
          <Navigation />
        </header>
        {children}
      </div>
      <div id="banner-wave" className="footer-banner">
        {/* <Back /> */}
        <img src="/assets/img/footer_img.png" alt="footer-img"></img>
      </div>
      <footer className="footer">
        <div className="content-footer">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            {data.site.siteMetadata.title}
          </p>
        </div>
      </footer>
    </div>
  );
};
