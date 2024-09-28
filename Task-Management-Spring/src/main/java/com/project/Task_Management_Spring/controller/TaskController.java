package com.project.Task_Management_Spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Task_Management_Spring.model.Task;
import com.project.Task_Management_Spring.service.TaskService;

@RestController
@RequestMapping("task")
@CrossOrigin
public class TaskController {

	@Autowired
	TaskService taskser;

	@PostMapping("save/{id}")
	public Task saveTask(@RequestBody Task T, @PathVariable int id) {
		return taskser.saveTask(T, id);
	}
}