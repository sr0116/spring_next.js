package com.example.clanity.controller;

import com.example.clanity.domain.dto.ClassInfoDto;
import com.example.clanity.service.ClassService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
@RequiredArgsConstructor
public class ClassController {

  private final ClassService classService;

  /** 등록 */
  @PostMapping
  public ClassInfoDto register(@RequestBody ClassInfoDto dto) {
    return classService.register(dto);
  }

  /** 단일 조회 */
  @GetMapping("/{id}")
  public ClassInfoDto getDetail(@PathVariable Long id) {
    return classService.getDetail(id);
  }

  /** 전체 조회 */
  @GetMapping
  public List<ClassInfoDto> getAll() {
    return classService.getAll();
  }

  /** 수정 */
  @PutMapping("/{id}")
  public ClassInfoDto update(@PathVariable Long id, @RequestBody ClassInfoDto dto) {
    return classService.update(id, dto);
  }


  /** 삭제 */
  @DeleteMapping("/{id}")
  public void delete(@PathVariable Long id) {
    classService.delete(id);
  }
}
