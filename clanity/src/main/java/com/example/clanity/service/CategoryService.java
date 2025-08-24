package com.example.clanity.service;

import com.example.clanity.domain.ClassCategory;
import com.example.clanity.repository.ClassCategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class CategoryService {

  private final ClassCategoryRepository categoryRepository;

  public List<ClassCategory> listCategory() {
    List<ClassCategory> categories = categoryRepository.findAll();
    log.info("조회된 카테고리 수: {}", categories.size());
    return categories;
  }
}
