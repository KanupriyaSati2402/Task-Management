package com.project.Task_Management_Spring.util;

import org.springframework.web.bind.annotation.RestControllerAdvice;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ResponseStructure<T> {

	private int status_code;
	private String message;
	private T data;
	
}
