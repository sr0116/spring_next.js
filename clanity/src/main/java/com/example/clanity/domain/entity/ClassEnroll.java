package com.example.clanity.domain.entity;

import com.example.clanity.domain.EnrollStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "class_enroll")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassEnroll {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "enroll_id")
  private Long enrollId;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "open_id", nullable = false) // FK: ClassOpen
  private ClassOpen classOpen;

  @Column(name = "member_id", nullable = false)
  private Long memberId;

  @Column(name = "enrolled_at")
  private LocalDateTime enrolledAt;

   // APPROVED, CANCELED
  private Integer status;

  private Integer parts;
}
