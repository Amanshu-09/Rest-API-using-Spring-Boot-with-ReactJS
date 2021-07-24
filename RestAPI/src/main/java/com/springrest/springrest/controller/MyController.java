package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;
import com.springrest.springrest.entities.User;
import com.springrest.springrest.services.CourseService;
import com.springrest.springrest.services.UserService;

@CrossOrigin
@RestController
public class MyController {
	
	@Autowired
	private CourseService courseservice;
	@Autowired
	private UserService userservice;
	@Autowired
	private CourseDao courseDao;
	
	public String uname;
	
///////////////////////////////////////////////////////////////////////////////////////////////
	
//	@GetMapping("/courses")
//	public java.util.List<Course> getCourses()
//	{
//		return this.courseservice.getCourses();
//	}
	
	@GetMapping("/courses")
	public java.util.List<Course> getCourses(){
		return this.courseDao.getcourses(uname);
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseservice.getCourse(Long.parseLong(courseId));
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseservice.addCourse(course);
	}
	
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseservice.updateCourse(course);
	}
	
	@DeleteMapping("/courses/{courseId}")
	public Course deleteCourse(@PathVariable String courseId)
	{
		return this.courseservice.deleteCourse(Long.parseLong(courseId));
	}
	
	
//////////////////////////////	User Controls Starts  /////////////////////////////////////////
	
	@PostMapping("/adduser")
	public User addUser(@RequestBody User user) {
		return this.userservice.addUser(user);
	}
	
	@GetMapping("/getusers")
	public List<User> getUsers() {
		return this.userservice.getUsers();
	}
	
	@GetMapping("/getuser/{username}")
	public User getUser(@PathVariable String username) {
		return this.userservice.getUser(username);
	}
 
	///////////////////////////////////////////////////////////////////////////////////////////
	
	@PostMapping("/setcurrentuser/{name}")
	public String setcuser(@PathVariable String name) {
		uname=name;
		return this.uname;
	}
	
	@GetMapping("/getcurrentuser")
	public String getcuser() {
		return this.uname;
	}
	
	@GetMapping("/getmaxid")
	public Long getmaxid() {
		return this.courseDao.getmaxid();
	}
}