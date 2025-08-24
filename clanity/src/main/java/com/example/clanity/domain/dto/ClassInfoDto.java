package com.example.clanity.domain.dto;

import com.example.clanity.domain.entity.ClassInfo;
import lombok.*;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassInfoDto {

  private Long classId;
  private String title;
  private String description;
  private Integer price;
  private String instructorName;
  private String difficulty;


  /** Entity → DTO */
  public static ClassInfoDto fromEntity(ClassInfo entity) {
    return ClassInfoDto.builder()
            .classId(entity.getClassId())
            .title(entity.getTitle())
            .description(entity.getDescription())
            .price(entity.getPrice())
            .instructorName(entity.getInstructorName())
            .difficulty(entity.getDifficulty())
            .build();
  }

  /** DTO → Entity */
  public ClassInfo toEntity() {
    return ClassInfo.builder()
            .classId(this.classId)
            .title(this.title)
            .description(this.description)
            .price(this.price)
            .instructorName(this.instructorName)
            .difficulty(this.difficulty)
            .build();
  }
}
