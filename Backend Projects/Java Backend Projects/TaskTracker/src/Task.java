
import java.time.LocalDateTime;

abstract  class Task {
  protected int id;
  protected String description;
  protected String status;
  protected LocalDateTime createdAt;
  protected LocalDateTime updatedAt;

  private static int uniqueId;

  public Task(String description){
    this.id = uniqueId;
    uniqueId++;
    this.status = "todo";
    this.createdAt = LocalDateTime.now();
    this.updatedAt = LocalDateTime.now();
  }

  public void markDone(){
    this.status = "Done";
    this.updatedAt = LocalDateTime.now();
  }

  public void markInProgress(){
    this.status = "In-Progress";
    this.updatedAt = LocalDateTime.now();
  }

  public void updateDescription(String newDesc){
    this.description = newDesc;
    this.updatedAt = LocalDateTime.now();
  }

  public abstract String toJson();
}
