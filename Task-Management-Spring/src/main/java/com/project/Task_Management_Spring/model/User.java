package com.project.Task_Management_Spring.model;

import java.util.List;

import org.springframework.stereotype.Component;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Component
@Table(name="UserDetails")
@Setter
@Getter
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name ;
	private String email;
	private String password;
	private Role role;
	private Priority priority;
	
	@OneToMany(cascade = CascadeType.ALL)  // dono table mai ek sathh data daal leneg
	private List<Task> tasks;
}
