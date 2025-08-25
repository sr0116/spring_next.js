package com.example.clanity.domain.dto;

import com.example.clanity.domain.entity.ClassOpen;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassOpenDto {

  private Long openId;
  private Long classId; // FK: master_id
  private LocalDate scheduleDate;
  private LocalTime startTime;
  private LocalTime endTime;
  private Integer minParticipants;
  private Integer maxParticipants;
  private Integer price;
  private Integer status;      // 0=CLOSED, 1=OPEN
  private String isAvailable;  // Y / N

  /** Entity → DTO */
  public static ClassOpenDto fromEntity(ClassOpen entity) {
    return ClassOpenDto.builder()
      .openId(entity.getOpenId())
      .classId(entity.getClassInfo().getClassId())
      .scheduleDate(entity.getScheduleDate())
      .startTime(entity.getStartTime())
      .endTime(entity.getEndTime())
      .minParticipants(entity.getMinParticipants())
      .maxParticipants(entity.getMaxParticipants())
      .price(entity.getPrice())
      .status(entity.getStatus())
      .isAvailable(entity.getIsAvailable())
      .build();
  }

  /** DTO → Entity (Service에서 ClassInfo 주입) */
  public ClassOpen toEntity() {
    return ClassOpen.builder()
      .openId(this.openId)
      .scheduleDate(this.scheduleDate)
      .startTime(this.startTime)
      .endTime(this.endTime)
      .minParticipants(this.minParticipants)
      .maxParticipants(this.maxParticipants)
      .price(this.price)
      .status(this.status)
      .isAvailable(this.isAvailable)
      .build();
  }
}


