package com.example.clanity.controller;

import com.example.clanity.domain.dto.ClassEnrollDto;
import com.example.clanity.service.EnrollService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/enrolls")
@RequiredArgsConstructor
@Validated
public class EnrollController {

  private final EnrollService enrollService;

  /** 신청 등록 (query param) */
  @PostMapping
  public ClassEnrollDto register(
    @RequestParam Long openId,
    @RequestParam Long memberId,
    @RequestParam(required = false, defaultValue = "1") Integer parts
  ) {
    return enrollService.register(openId, memberId, parts);
  }

  /** 신청 단일 조회 */
  @GetMapping("/{enrollId}")
  public ClassEnrollDto getDetail(@PathVariable Long enrollId) {
    return enrollService.getDetail(enrollId);
  }

  /** 특정 오픈에 대한 전체 신청 조회 */
  @GetMapping("/open/{openId}")
  public List<ClassEnrollDto> getAllByOpen(@PathVariable Long openId) {
    return enrollService.getAllByOpen(openId);
  }

  /** 신청 취소 (status = 1) */
  @PatchMapping("/{enrollId}/cancel")
  public ClassEnrollDto cancel(@PathVariable Long enrollId) {
    return enrollService.cancel(enrollId);
  }

  /** 신청 삭제 */
  @DeleteMapping("/{enrollId}")
  public void delete(@PathVariable Long enrollId) {
    enrollService.delete(enrollId);
  }
}
