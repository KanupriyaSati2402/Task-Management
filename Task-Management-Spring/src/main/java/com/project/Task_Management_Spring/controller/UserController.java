package com.project.Task_Management_Spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.Task_Management_Spring.model.User;
import com.project.Task_Management_Spring.service.UserService;
import com.project.Task_Management_Spring.util.ResponseStructure;

@RestController
@RequestMapping("/app")
@CrossOrigin
public class UserController {

	@Autowired
	UserService userSer;
	
	@PostMapping("save")
	public User saveUser(@RequestBody  User u) {
		return userSer.saveUser(u);
	}
	
	@DeleteMapping("delete")
	public User deleteUser(@RequestParam int id) {
		return userSer.deleteUser(id);
	}
	
	@PutMapping("/update")
	   public User updateUserById( @RequestBody User user ) {
		System.out.println(user);
		   User updateUser = userSer.updateByid(user);
	       return updateUser;	   
	   }
	
	@GetMapping("find/{id}")
	public User findUser(@RequestBody User user,@PathVariable  int id) {
		return userSer.findById(user,id);
	}
	
	@GetMapping("login/{email}/{password}")
	   public ResponseStructure<User> ValidateUser(@PathVariable String email , @PathVariable String password) {
		  return userSer.findEmailAndPassword(email,password);
		   
	   }
	
	@GetMapping("/allusers")
	public ResponseStructure<List<User>> ViewAllUser(){
		return userSer.Viewallusers();
	}
}
