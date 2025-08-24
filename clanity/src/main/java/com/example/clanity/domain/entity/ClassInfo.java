package com.example.clanity.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "`class`") // 예약어 주의!
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClassInfo {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "class_id")
  private Long classId;

  @Column(name = "business_id")
  private Long businessId;

  @Column(name = "category_id")
  private Long categoryId;

  private String title;
  private String description;

  @Column(name = "description2")
  private String description2;

  private String duration;

  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @Column(name = "instructor_name")
  private String instructorName;

  private String difficulty;

  @Column(name = "detail_images")
  private String detailImages;

  @Column(name = "thumbnail_image")
  private String thumbnailImage;

  private String address;
  private String region;
  private Integer price;
  private String url;

  @Column(name = "class_type")
  private String classType;

  private Integer discount;

  @Column(name = "discount_price")
  private Integer discountPrice;

  private String curriculum;

  @Column(name = "host_introduction")
  private String hostIntroduction;

  @Column(name = "instructor_image_url")
  private String instructorImageUrl;

  @Column(name = "origin_code")
  private String originCode;

  @OneToMany(mappedBy = "classInfo", cascade = CascadeType.ALL)
  private List<ClassOpen> opens = new ArrayList<>();
}
