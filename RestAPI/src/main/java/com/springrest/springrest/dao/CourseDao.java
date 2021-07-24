package com.springrest.springrest.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.springrest.springrest.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long> {
	
	public static final String mid = "Select max(id) From Course";
	@Query(value=mid, nativeQuery=true)
	public Long getmaxid();
	
	public static final String gc = "Select * From Course where username=:uname";
	@Query(value=gc, nativeQuery=true)
	public List<Course> getcourses(@Param("uname") String uname);
}
