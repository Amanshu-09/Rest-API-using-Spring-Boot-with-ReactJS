import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Input,
  Form,
} from "reactstrap";
import base_url from "../Api/service";
import { Collapse } from "reactstrap";

function Course({ course, update }) {
  function deleteCourse(id) {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Deleted Successfully !");
        update(id);
      },
      (error) => {
        toast.success("Server Problem !");
      }
    );
  }

  const [course1, setCourse] = useState({});

  function handleform(e){
    course.title = course1.title
    course.description = course1.description
    console.log(course)
    updateCourse(course);
    e.preventDefault();
    window.location.reload();
  }

  function updateCourse(data) {
    axios.put(`${base_url}/courses`,data).then(
      (response) => {
        console.log(response);
        toast.success("Updated Successfully !");
      },
      (error) => {
        console.log(error);
        toast.error("Update Failed !");
      }
    );
  }

  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle>{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container>
          <Button color="primary" onClick={toggle}>
            Edit
          </Button>
          <Button
            color="danger mx-2"
            onClick={() => {
              deleteCourse(course.id);
            }}
          >
            Delete
          </Button>
          <Collapse isOpen={isOpen}>
            <br />
            <Form onSubmit={handleform}>
              <div>
                <h4>Update Course here to make changes.</h4>
                <br />
                <Input
                  type="text"
                  placeholder="Course Id"
                  value={course.id}
                  onChange={(e) => {
                    setCourse({...course1, id: e.target.value });
                  }}
                ></Input>
                <br />
                <Input
                  type="text"
                  placeholder="Course Title"
                  onChange={(e) => {
                    setCourse({...course1, title: e.target.value });
                  }}
                ></Input>
                <br />
                <Input
                  type="textarea"
                  placeholder="Course Description"
                  onChange={(e) => {
                    setCourse({...course1, description: e.target.value });
                  }}
                ></Input>
                <br />
                <Button type="submit" color="primary" outline>
                  Update
                </Button>
              </div>
            </Form>
          </Collapse>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
