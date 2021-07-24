package com.springrest.springrest.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.UserDao;
import com.springrest.springrest.entities.User;

@Service
public class UserServiceimpl implements UserService{
	@Autowired
	private UserDao userDao;
	
	public UserServiceimpl() {
		
	}

	@Override
	public User addUser(User user) {
		userDao.save(user);
		return user;
	}

	@Override
	public List<User> getUsers() {
		return userDao.findAll();
	}

	@Override
	public User getUser(String username) {
		
		return userDao.findById(username).get();
	}
}
