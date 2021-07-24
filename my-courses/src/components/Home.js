import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

function Home() {
  useEffect(function () {
    document.title = "Home || Amanshu Taklikar";
  }, []);

  return (
    <div>
      <Jumbotron
        style={{ background: "lightgray", paddingTop: 50, paddingBottom: 20 }}
        className="text-center"
      >
        <h1>My Courses</h1>
        <p>By Amanshu</p>
        <Link to="#!" className="btn btn-primary">Get Started</Link>
      </Jumbotron>
    </div>
  );
}

export default Home;
