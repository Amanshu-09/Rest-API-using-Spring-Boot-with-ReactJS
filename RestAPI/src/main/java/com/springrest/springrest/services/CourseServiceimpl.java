package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceimpl implements CourseService {
	
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceimpl() {

	}
	
	@Override
	public List<Course> getCourses() {
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId) {
		return courseDao.findById(courseId).get();
	}

	@Override
	public Course addCourse(Course course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public Course updateCourse(Course course) {
		courseDao.save(course);
		return course;
	}

	@Override
	public Course deleteCourse(long courseId) {
		courseDao.deleteById(courseId);
		return null;
	}
	
}
