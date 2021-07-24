import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../Api/service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AddCourse() {
  useEffect(function () {
    document.title = "Add Courses || Amanshu Taklikar";
  }, []);

  axios.get(`${base_url}/getcurrentuser`).then(
    (response) => {
      course.username = response.data;
    }
  );

  const [course, setCourse] = useState({});

  //Hiding form
  axios.get(`${base_url}/getcurrentuser`).then((response) => {
    if (response.data != null) {
      document.getElementById("acpage").style.display = "block";
    }
  });

  //auto genration of id
  axios.get(`${base_url}/getmaxid`).then(
    (response) => {
      if (response.data )
      course.id = response.data+1;
    }
  );

  //form handler function
  function handleForm(e) {
    console.log(course);
    postDatatoServer(course);
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    <Link to="/add-course"></Link>;
    e.preventDefault();
  }

  //Creating fuction to post dat on server
  function postDatatoServer(data) {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Added Successfuly !");
      },
      (error) => {
        console.log(error);
        toast.error("Something went Wrong !");
      }
    );
  }

  return (
    <Fragment>
      <Form onSubmit={handleForm} id="acpage" style={{display:"none"}}>
        <h1 className="text-center my-5">Fill Course Details</h1>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter Title here"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter Description here"
            id="description"
            style={{ height: 150 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>
        <br />
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Course
          </Button>
          <Button color="danger mx-2" type="reset">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
}

export default AddCourse;
