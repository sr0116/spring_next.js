package com.example.clanity.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "class_open")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassOpen {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "open_id")
  private Long openId;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "master_id", nullable = false) // FK: class_id
  private ClassInfo classInfo;

  @Column(name = "schedule_date")
  private LocalDate scheduleDate;

  @Column(name = "start_time")
  private LocalTime startTime;

  @Column(name = "end_time")
  private LocalTime endTime;

  @Column(name = "min_participants")
  private Integer minParticipants;

  @Column(name = "max_participants")
  private Integer maxParticipants;

  private Integer price;
  @Column(name = "status")
  private Integer status; // 0 = CLOSED, 1 = OPEN
  private String isAvailable; // 예: "Y", "N"
}
