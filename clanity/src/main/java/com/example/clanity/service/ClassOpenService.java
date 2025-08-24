package com.example.clanity.service;

import com.example.clanity.domain.dto.ClassOpenDto;
import com.example.clanity.domain.entity.ClassInfo;
import com.example.clanity.domain.entity.ClassOpen;
import com.example.clanity.repository.ClassInfoRepository;
import com.example.clanity.repository.ClassOpenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ClassOpenService {

  private final ClassOpenRepository openRepository;
  private final ClassInfoRepository infoRepository;

  /** 오픈 등록 */
  public ClassOpenDto register(Long classId, ClassOpenDto dto) {
    ClassInfo classInfo = infoRepository.findById(classId)
            .orElseThrow(() -> new IllegalArgumentException("해당 클래스 없음: " + classId));

    ClassOpen open = dto.toEntity();
    open.setClassInfo(classInfo); // FK 주입

    return ClassOpenDto.fromEntity(openRepository.save(open));
  }

  /** 단일 조회 */
  @Transactional(readOnly = true)
  public ClassOpenDto getDetail(Long openId) {
    return openRepository.findById(openId)
            .map(ClassOpenDto::fromEntity)
            .orElseThrow(() -> new IllegalArgumentException("해당 오픈 없음: " + openId));
  }

  /** 전체 조회 (특정 클래스 기준) */
  @Transactional(readOnly = true)
  public List<ClassOpenDto> getAllByClass(Long classId) {
    return openRepository.findByClassInfo_ClassId(classId).stream()
            .map(ClassOpenDto::fromEntity)
            .collect(Collectors.toList());
  }

  /** 수정 */
  public ClassOpenDto update(Long openId, ClassOpenDto dto) {
    return openRepository.findById(openId)
            .map(open -> {
              open.setScheduleDate(dto.getScheduleDate());
              open.setStartTime(dto.getStartTime());
              open.setEndTime(dto.getEndTime());
              open.setMinParticipants(dto.getMinParticipants());
              open.setMaxParticipants(dto.getMaxParticipants());
              open.setPrice(dto.getPrice());
              open.setStatus(dto.getStatus());
              open.setIsAvailable(dto.getIsAvailable());
              return ClassOpenDto.fromEntity(open);
            })
            .orElseThrow(() -> new IllegalArgumentException("해당 오픈 없음: " + openId));
  }

  /** 삭제 */
  public void delete(Long openId) {
    openRepository.deleteById(openId);
  }
}
