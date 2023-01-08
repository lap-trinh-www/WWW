package com.project.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Room_Entity;

@Repository
public interface Room_Repository extends JpaRepository<Room_Entity, String> {

}
