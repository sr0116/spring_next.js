package com.example.clanity.repository;

import com.example.clanity.domain.entity.ClassEnroll;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClassEnrollRepository extends JpaRepository<ClassEnroll, Long> {
  List<ClassEnroll> findByClassOpen_OpenId(Long openId);
}
