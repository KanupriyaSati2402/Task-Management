package com.project.Task_Management_Spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.Task_Management_Spring.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {

}
