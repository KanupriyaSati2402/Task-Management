package com.project.Task_Management_Spring.service;
import com.project.Task_Management_Spring.util.ResponseStructure;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.Task_Management_Spring.model.User;
import com.project.Task_Management_Spring.repository.UserRepository;


@Service
public class UserService {

	@Autowired
	UserRepository userRes;
	
	public User saveUser(@RequestBody  User u) {
		return userRes.save(u);
	}

	public User deleteUser(@RequestParam  int id) {
		Optional<User> u = userRes.findById(id);
		if(u.isPresent()) {
			User user = u.get();
			userRes.delete(user);
		}
		return null;
	
	}

	public User findById(User user , int id) {
		Optional<User> u = userRes.findById(id);
		if(u.isPresent()) {
			User us = u.get();
			userRes.delete(us);
		}
		return null;
	}

public User updateByid(User user) {
		return userRes.save(user);
}

	public ResponseStructure<User> findEmailAndPassword(String email, String password){
		User u = userRes.findByEmailAndPassword(email,password);
	    ResponseStructure<User> structure = new ResponseStructure<User>();
	    if (u != null) {
	      structure.setStatus_code(HttpStatus.OK.value());
	      structure.setMessage("User logged in Successfully");
	      structure.setData(u);
	        if (u.getPassword().equals(password)) {
	            structure.setStatus_code(HttpStatus.OK.value());
	            structure.setMessage("User authenticated successfully");
	            structure.setData(u);
	        } else {
	            structure.setStatus_code(HttpStatus.UNAUTHORIZED.value());
	            structure.setMessage("Invalid password");
	            structure.setData(null);
	        }
	    } else {
	        structure.setStatus_code(HttpStatus.NOT_FOUND.value());
	        structure.setMessage("User not found");
	        structure.setData(null);	       
	    }
		return structure;
	}

	public ResponseStructure<List<User>> Viewallusers() {
		        List<User> users = userRes.findAll(); // Fetch all users
		        
		        ResponseStructure<List<User>> responseStructure = new ResponseStructure<>();
		        responseStructure.setStatus_code(HttpStatus.OK.value());
		        responseStructure.setData(users);
		        responseStructure.setMessage("Fetched all users successfully");
		        return responseStructure;

	}


}
