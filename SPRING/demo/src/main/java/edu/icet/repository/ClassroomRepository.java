package edu.icet.repository;

import edu.icet.dao.Classroom;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassroomRepository extends CrudRepository<Classroom, String> {
    Classroom findByBatchNumber(String classroom);
}
