package com.project.Task_Management_Spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Task_Management_Spring.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{


	public User findByEmailAndPassword(String email, String password);

	public List<User> findByEmail(String email);



}
