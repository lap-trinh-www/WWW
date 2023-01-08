package com.project.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Account_Entity;

@Repository
public interface Account_Repository extends JpaRepository<Account_Entity, String> {

}
