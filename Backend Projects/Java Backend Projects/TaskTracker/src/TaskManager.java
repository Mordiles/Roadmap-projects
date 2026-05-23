
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDateTime;

public class TaskManager {
  public void addTask(String description) {
    String sql = """
        INSERT INTO task
        (description, status, createdAt, updatedAt)
        VALUES(?, ?, ?, ?)
        """;

    try (
        Connection conn = DatabaseConnection.connect();
        PreparedStatement ps = conn.prepareStatement(sql);) {
      LocalDateTime now = LocalDateTime.now();
      ps.setString(1, description);
      ps.setString(2, Status.TODO.name());
      ps.setObject(3, now);
      ps.setObject(4, now);

      ps.executeUpdate();

      System.out.println("Task Added Successfully!");
    } catch (SQLException e) {
      System.out.println("Error Adding Task:");
      e.printStackTrace();
    }

  }

  public void updateTask(int id, String desc) {
    String sql = """
        UPDATE task
        SET description = ?, updated_at = ?
        WHERE task_id = ?
        """;

    try (
        Connection conn = DatabaseConnection.connect();
        PreparedStatement ps = conn.prepareStatement(sql);) {
      LocalDateTime now = LocalDateTime.now();
      ps.setString(1, desc);
      ps.setObject(2, now);
      ps.setInt(3, id);

      int affected = ps.executeUpdate();

      if (affected > 0) {

        System.out.println("Task Updated Successfully!");
      } else {
        System.out.println("Task Not Found!");
      }
    } catch (SQLException e) {
      System.out.println("Error Updating Task:");
      e.printStackTrace();
    }
  }

  public void deleteTask(int id) {
    String sql = """
        DELETE FROM task
        WHERE task_id = ?
        """;

    try (
        Connection conn = DatabaseConnection.connect();
        PreparedStatement ps = conn.prepareStatement(sql);) {
      ps.setInt(1, id);
      int affected = ps.executeUpdate();

      if (affected > 0) {

        System.out.println("Task Deleted Successfully!");
      } else {
        System.out.println("Task Not Found!");
      }
    } catch (SQLException e) {
      System.out.println("Error Deleting Task:");
      e.printStackTrace();
    }
  }

  public void markInProgress(int id) {
    String sql = """
        UPDATE task
        SET status = ?
        WHERE task_id = ?
        """;

    try (
        Connection conn = DatabaseConnection.connect();
        PreparedStatement ps = conn.prepareStatement(sql);) {
      ps.setString(1, Status.IN_PROGRESS.name());
      ps.setInt(2, id);

      int affected = ps.executeUpdate();

      if (affected > 0) {

        System.out.println("Task Marked in Progress!");
      } else {
        System.out.println("Task Not Found!");
      }
    } catch (SQLException e) {
      System.out.println("Error Marking In Progress a Task");
    }
  }

  public void markDone(int id) {
    String sql = """
        UPDATE task
        SET status = ?
        WHERE task_id = ?
        """;

    try (
        Connection conn = DatabaseConnection.connect();
        PreparedStatement ps = conn.prepareStatement(sql);) {
      ps.setString(1, Status.DONE.name());
      ps.setInt(2, id);

      int affected = ps.executeUpdate();

      if (affected > 0) {

        System.out.println("Task Marked as Done!");
      } else {
        System.out.println("Task Not Found!");
      }
    } catch (SQLException e) {
      System.out.println("Error Marking Task as Done");
    }
  }

  

  public static void main(String[] args) {

  }
}
