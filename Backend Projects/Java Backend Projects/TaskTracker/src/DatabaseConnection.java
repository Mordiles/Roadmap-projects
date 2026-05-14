import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
  private static final String URL = "jdbc:mysql://localhost:3306/task_tracker";

  private static final String USER = "root";
  private static final String PASSWORD = "";

  public static Connection connect() throws SQLException {
    return DriverManager.getConnection(
        URL,
        USER,
        PASSWORD);
  }
}
