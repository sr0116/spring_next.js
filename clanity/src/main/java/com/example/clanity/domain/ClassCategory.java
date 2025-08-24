package com.example.clanity.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "class_category")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor @Builder
public class ClassCategory {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "category_id")
  private Long categoryId;

  @Column(columnDefinition = "char(1)")
  private String type; // 0=클래스, 1=소셜링

  @Column(name = "parent_category")
  private String parentCategory;

  @Column(name = "child_category")
  private String childCategory;

  @Column(name = "parent_id")
  private Long parentId;
}
