package com.example.clanity.controller;

import com.example.clanity.domain.dto.ClassEnrollDto;
import com.example.clanity.service.EnrollService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrolls")
@RequiredArgsConstructor
public class EnrollController {

  private final EnrollService enrollService;

  /** 등록 */
  @PostMapping
  public ClassEnrollDto register(
          @RequestParam Long openId,
          @RequestParam Long memberId,
          @RequestParam(defaultValue = "1") Integer parts) {
    return enrollService.register(openId, memberId, parts);
  }

  /** 단일 조회 */
  @GetMapping("/{enrollId}")
  public ClassEnrollDto getDetail(@PathVariable Long enrollId) {
    return enrollService.getDetail(enrollId);
  }

  /** 특정 오픈 전체 조회 */
  @GetMapping("/open/{openId}")
  public List<ClassEnrollDto> getAllByOpen(@PathVariable Long openId) {
    return enrollService.getAllByOpen(openId);
  }

  /** 취소 (status = CANCELED) */
  @PatchMapping("/{enrollId}/cancel")
  public ClassEnrollDto cancel(@PathVariable Long enrollId) {
    return enrollService.cancel(enrollId);
  }

  /** 삭제 */
  @DeleteMapping("/{enrollId}")
  public void delete(@PathVariable Long enrollId) {
    enrollService.delete(enrollId);
  }
}
