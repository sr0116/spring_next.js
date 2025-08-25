package com.example.clanity.domain.dto;

import com.example.clanity.domain.entity.ClassEnroll;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassEnrollDto {

  private Long enrollId;
  private Long openId;
  private Long memberId;
  private LocalDateTime enrolledAt;
  private Integer status; // 0=신청, 1=취소
  private Integer parts;

  /** Entity → DTO */
  public static ClassEnrollDto fromEntity(ClassEnroll entity) {
    return ClassEnrollDto.builder()
      .enrollId(entity.getEnrollId())
      .openId(entity.getClassOpen().getOpenId())
      .memberId(entity.getMemberId())
      .enrolledAt(entity.getEnrolledAt())
      .status(entity.getStatus())
      .parts(entity.getParts())
      .build();
  }
}
