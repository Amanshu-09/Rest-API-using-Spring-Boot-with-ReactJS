import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "./../Api/service";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(function () {
    document.title = "All Courses || Amanshu Taklikar";
  }, []);

  useEffect(function () {
    getAllCoursesFromServer();
  }, []);

  //Hiding form
  axios.get(`${base_url}/getcurrentuser`).then((response) => {
    if (response.data != null) {
      document.getElementById("vcpage").style.display = "block";
    }
  });

  //function to call server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        console.log(response.data);
        setCourses(response.data);
        axios.get(`${base_url}/getcurrentuser`).then((response) => {
          if (response.data != null) {
            toast.success("Loaded Successfuly");
          }
        });
      },
      (error) => {
        console.log(error);
        toast.error("Something Went Wrong");
      }
    );
  };

  const [courses, setCourses] = useState([]);

  function updateCourses(id) {
    setCourses(courses.filter((c) => c.id !== id));
  }

  return (
    <div id="vcpage" style={{ display: "none" }}>
      <h1 className="text-center">All Courses</h1>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={updateCourses} />
          ))
        : "No Courses Available !"}
    </div>
  );
};

export default AllCourses;
