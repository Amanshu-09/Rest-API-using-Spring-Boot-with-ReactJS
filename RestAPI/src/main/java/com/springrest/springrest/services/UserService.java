package com.springrest.springrest.services;

import java.util.List;

import com.springrest.springrest.entities.User;

public interface UserService {
	public User addUser(User user);
	
	public List<User> getUsers();
	
	public User getUser(String username);
	
}
