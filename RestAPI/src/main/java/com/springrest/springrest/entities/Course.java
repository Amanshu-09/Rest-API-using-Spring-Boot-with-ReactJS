package com.springrest.springrest.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {
	
	@Id
	private long id;
	private String title;
	private String description;
	private String username;
	
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Course(long id, String title, String description, String username) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.username = username;
		
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", description=" + description + ", username=" + username
				+ "]";
	}
	
}
