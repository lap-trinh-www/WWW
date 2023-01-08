package com.project.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.BillDetail_Entity;

@Repository
public interface BillDetail_Repository extends JpaRepository<BillDetail_Entity, String> {

}
