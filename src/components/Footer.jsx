import React from "react";
import "./Footer.scss";

const Footer = () => {

    return (
        <div className="footer text-center">
        <p> 
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="https://dev-sk01.github.io/portfolio" target="_blank">
            {" "}
            Srikanth
          </a>
          ❤️
        </p>
        <p className="pink-text-gradient">No. of Visitors | <img className="visitcounter" src="https://hitwebcounter.com/counter/counter.php?page=17642981&style=0038&nbdigits=5&type=page&initCount=0" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></p>

      </div>
    );
  };
  
  export default Footer;