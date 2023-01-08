package com.project.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Bill_Entity;

@Repository
public interface Bill_Repository extends JpaRepository<Bill_Entity, String> {

}
