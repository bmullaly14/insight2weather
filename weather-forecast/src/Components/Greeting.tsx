import React from "react";
import PropTypes from "prop-types";
import { GreetingProps } from "../model";

const Greeting: React.FC<GreetingProps> = ({ isRegistered, outUser }) => {
  if (isRegistered) {
    return (
      <div>
        <h3 className="welcome" id="welcome-message">
          Welcome {outUser}
        </h3>
        <h4 className="welcome" id="welcome-instruction">
          Head to the Login page to log in to INSIGHT2WEATHER
        </h4>
      </div>
    );
  } else {
    return <div></div>;
  }
};
Greeting.defaultProps = {
  isRegistered: false,
  outUser: "",
};

export default Greeting;
