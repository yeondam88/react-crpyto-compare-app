import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>This site made with ❤</strong> by{" "}
            <a href="https://github.com/yeondam88">Lloyd Park</a>. The source
            code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
            The website content is licensed{" "}
          </p>
          <p>
            <a
              className="icon"
              href="https://github.com/yeondam88/react-crpyto-compare-app"
            >
              <i className="fa fa-github" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
