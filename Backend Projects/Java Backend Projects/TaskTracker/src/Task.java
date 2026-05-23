
import java.time.LocalDateTime;

public class Task {
  private int task_id;
  private String description;
  private Status status;
  private LocalDateTime createdAt;
  private LocalDateTime updatedAt;
  
  public Task(int id, String desc, Status status, LocalDateTime createdAt,LocalDateTime updatedAt){
    this.task_id = id;
    this.description = desc;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public int getTaskId(){
    return task_id;
  }

  public String getTaskDesc(){
    return description;
  }

  public Status getTaskStatus(){
    return status;
  }

  public LocalDateTime getTaskCreatedAt(){
    return createdAt;
  }
  public LocalDateTime getTaskUpdatedAt(){
    return updatedAt;
  }

}