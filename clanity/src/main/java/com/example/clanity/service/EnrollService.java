package com.example.clanity.service;

import com.example.clanity.domain.EnrollStatus;
import com.example.clanity.domain.dto.ClassEnrollDto;
import com.example.clanity.domain.entity.ClassEnroll;
import com.example.clanity.domain.entity.ClassOpen;
import com.example.clanity.repository.ClassEnrollRepository;
import com.example.clanity.repository.ClassOpenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class EnrollService {

  private final ClassEnrollRepository enrollRepository;
  private final ClassOpenRepository openRepository;

  public ClassEnrollDto register(Long openId, Long memberId, Integer parts) {
    ClassOpen open = openRepository.findById(openId)
            .orElseThrow(() -> new IllegalArgumentException("해당 오픈 없음: " + openId));

    ClassEnroll enroll = ClassEnroll.builder()
            .classOpen(open)
            .memberId(memberId)
            .enrolledAt(LocalDateTime.now())
            .status(1) // 👉 신청 상태 (0=신청됨)
            .parts(parts)
            .build();

    return ClassEnrollDto.fromEntity(enrollRepository.save(enroll));
  }

  /** 단일 조회 */
  @Transactional(readOnly = true)
  public ClassEnrollDto getDetail(Long enrollId) {
    return enrollRepository.findById(enrollId)
            .map(ClassEnrollDto::fromEntity)
            .orElseThrow(() -> new IllegalArgumentException("해당 신청 없음: " + enrollId));
  }

  /** 전체 조회 (openId 기준) */
  @Transactional(readOnly = true)
  public List<ClassEnrollDto> getAllByOpen(Long openId) {
    return enrollRepository.findByClassOpen_OpenId(openId).stream()
            .map(ClassEnrollDto::fromEntity)
            .collect(Collectors.toList());
  }

  /** 신청 취소 (status 변경) */
  public ClassEnrollDto cancel(Long enrollId) {
    ClassEnroll enroll = enrollRepository.findById(enrollId)
            .orElseThrow(() -> new IllegalArgumentException("해당 신청 없음: " + enrollId));
    enroll.setStatus(1); // 👉 취소 상태 (1=취소됨)
    return ClassEnrollDto.fromEntity(enroll);
  }


  /** 신청 삭제 */
  public void delete(Long enrollId) {
    enrollRepository.deleteById(enrollId);
  }
}
