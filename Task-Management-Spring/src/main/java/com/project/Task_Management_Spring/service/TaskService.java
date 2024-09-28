package com.project.Task_Management_Spring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.project.Task_Management_Spring.model.Task;
import com.project.Task_Management_Spring.model.User;
import com.project.Task_Management_Spring.repository.TaskRepository;
import com.project.Task_Management_Spring.repository.UserRepository;

@Service
public class TaskService {

	@Autowired
	TaskRepository taskRes;
	
	@Autowired
	UserRepository userRes;
	
	public Task saveTask( Task t ,int id) {
		
		Optional<User> user = userRes.findById(id);
		if(user.isPresent()) {
			User u=user.get();
			t.setUser(u);
			return taskRes.save(t);
		}
		return null;
	}

}
