package com.omnischool.repository;

import com.omnischool.entity.DemoRequest;
import com.omnischool.enums.DemoStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface DemoRequestRepository extends JpaRepository<DemoRequest, Long> {

    List<DemoRequest> findByStatus(DemoStatus status);

    List<DemoRequest> findByCreatedAtBetween(LocalDateTime start, LocalDateTime end);

    long countByStatus(DemoStatus status);

    @Query("""
            select d from DemoRequest d
            where (:status is null or d.status = :status)
              and (
                  :search is null
                  or lower(d.fullName) like lower(concat('%', :search, '%'))
                  or lower(d.email) like lower(concat('%', :search, '%'))
                  or lower(d.schoolName) like lower(concat('%', :search, '%'))
              )
            """)
    Page<DemoRequest> search(@Param("status") DemoStatus status,
                            @Param("search") String search,
                            Pageable pageable);
}
