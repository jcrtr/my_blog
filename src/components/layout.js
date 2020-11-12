import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import "prismjs/themes/prism-okaidia.css";

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
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <Navigation />
        </header>
        {children}
      </div>
      <footer className="site-footer">
        <div className="content-footer">
          <p>
            &copy; {new Date().getFullYear()}&bull;{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" "}
            likiblack
          </p>
        </div>
      </footer>
    </div>
  );
};
