import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function Menus() {
  return (
    <ListGroup>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/home"
        action
      >
        Home
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/add-course"
        action
      >
        Add Course
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="/view-courses"
        action
      >
        View Courses
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="#!"
        action
      >
        About
      </Link>
      <Link
        className="list-group-item list-group-item-action"
        tag="a"
        to="#!"
        action
      >
        Contact us
      </Link>
    </ListGroup>
  );
}

export default Menus;