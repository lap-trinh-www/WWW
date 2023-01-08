package com.project.reponsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.User_Entity;

@Repository
public interface User_Repository extends JpaRepository<User_Entity, Long> {
	
}
