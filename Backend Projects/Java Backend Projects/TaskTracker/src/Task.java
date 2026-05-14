public class Task {
  private int task_id;
  private String description;
  private Status status;
  private String createdAt;
  private String updatedAt;
  
  public Task(int id, String desc, Status status, String createdAt,String updatedAt){
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

  public String getTaskCreatedAt(){
    return createdAt;
  }
  public String getTaskUpdatedAt(){
    return updatedAt;
  }

}