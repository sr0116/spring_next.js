package com.example.clanity.controller;

import com.example.clanity.domain.ClassCategory;
import com.example.clanity.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

  private final CategoryService categoryService;

  // 카테고리 전체 조회
  @GetMapping
  public List<ClassCategory> listCategories() {
    return categoryService.listCategory();
  }
}
