package com.example.clanity.controller;

import com.example.clanity.domain.dto.ClassOpenDto;
import com.example.clanity.service.ClassOpenService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/class-opens")
@RequiredArgsConstructor
public class ClassOpenController {

  private final ClassOpenService openService;

  /** 오픈 등록 */
  @PostMapping("/{classId}")
  public ClassOpenDto register(@PathVariable Long classId, @RequestBody ClassOpenDto dto) {
    return openService.register(classId, dto);
  }

  /** 단일 조회 */
  @GetMapping("/{openId}")
  public ClassOpenDto getDetail(@PathVariable Long openId) {
    return openService.getDetail(openId);
  }

  /** 특정 클래스의 오픈 전체 조회 */
  @GetMapping("/class/{classId}")
  public List<ClassOpenDto> getAllByClass(@PathVariable Long classId) {
    return openService.getAllByClass(classId);
  }

  /** 수정 */
  @PutMapping("/{openId}")
  public ClassOpenDto update(@PathVariable Long openId, @RequestBody ClassOpenDto dto) {
    return openService.update(openId, dto);
  }

  /** 삭제 */
  @DeleteMapping("/{openId}")
  public void delete(@PathVariable Long openId) {
    openService.delete(openId);
  }
}
