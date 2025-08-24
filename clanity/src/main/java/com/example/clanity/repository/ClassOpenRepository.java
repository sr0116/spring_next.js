package com.example.clanity.repository;

import com.example.clanity.domain.entity.ClassOpen;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClassOpenRepository extends JpaRepository<ClassOpen, Long> {
  List<ClassOpen> findByClassInfo_ClassId(Long classId);
}
