package com.example.clanity.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "class_enroll")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassEnroll {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "enroll_id")
  private Long enrollId;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "open_id", nullable = false) // FK → class_open.open_id
  private ClassOpen classOpen;

  @Column(name = "member_id", nullable = false)
  private Long memberId;

  @Column(name = "enrolled_at", nullable = false)
  private LocalDateTime enrolledAt;

  /**
   * 신청 상태
   * 0 = 신청(기본값)
   * 1 = 취소
   */
  @Column(name = "status", nullable = false, columnDefinition = "TINYINT DEFAULT 0")
  private Integer status;

  /**
   * 신청 파트 (회차/구간)
   * 기본값 = 1
   */
  @Column(name = "parts", nullable = false, columnDefinition = "INT DEFAULT 1")
  private Integer parts;
}
