package com.project.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.RoomType_Entity;

@Repository
public interface RoomType_Repository extends JpaRepository<RoomType_Entity, String> {

}
