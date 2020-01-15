import React from "react";
import { Link } from "react-router-dom";

const renderNotfound = () => (
  <div>
    <h2>404 - Not Found</h2>
    <p>Sorry the page you are looking for does not exist</p>
    <p>
      You can always go back to the{" "}
      <Link className="text-warning-m" to="/">
        Homepage
      </Link>
    </p>
  </div>
);

export default renderNotfound;
