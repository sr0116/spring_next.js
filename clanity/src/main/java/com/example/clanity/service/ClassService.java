package com.example.clanity.service;

import com.example.clanity.domain.dto.ClassInfoDto;
import com.example.clanity.domain.entity.ClassInfo;
import com.example.clanity.repository.ClassInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ClassService {

  private final ClassInfoRepository classInfoRepository;

  /** 클래스 등록 */
  public ClassInfoDto register(ClassInfoDto dto) {
    ClassInfo entity = dto.toEntity();
    ClassInfo saved = classInfoRepository.save(entity);
    return ClassInfoDto.fromEntity(saved);
  }

  /** 클래스 단일 조회 */
  @Transactional(readOnly = true)
  public ClassInfoDto getDetail(Long id) {
    return classInfoRepository.findById(id)
            .map(ClassInfoDto::fromEntity)
            .orElse(null);
  }

  /** 전체 클래스 목록 */
  @Transactional(readOnly = true)
  public List<ClassInfoDto> getAll() {
    return classInfoRepository.findAll()
            .stream()
            .map(ClassInfoDto::fromEntity)
            .collect(Collectors.toList());
  }

  /** 클래스 수정 */
  public ClassInfoDto update(Long id, ClassInfoDto dto) {
    return classInfoRepository.findById(id)
            .map(entity -> {
              entity.setTitle(dto.getTitle());
              entity.setDescription(dto.getDescription());
              entity.setPrice(dto.getPrice());
              entity.setInstructorName(dto.getInstructorName());
              entity.setDifficulty(dto.getDifficulty());
              return ClassInfoDto.fromEntity(entity);
            })
            .orElse(null);
  }

  /** 클래스 삭제 */
  public void delete(Long id) {
    classInfoRepository.deleteById(id);
  }
}
