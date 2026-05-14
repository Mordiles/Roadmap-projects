import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
  private static final String URL = "jdbc:mysql://localhost:3306/java_task_tracker";

  private static final String USER = "";
  private static final String PASSWORD = "";

  public static Connection connect() throws SQLException {
    return DriverManager.getConnection(
        URL,
        USER,
        PASSWORD);
  }

  /* public static void main(String[] args) {

    try {
      Connection conn = DatabaseConnection.connect();

      System.out.println("Database connected successfully!");

      conn.close();

    } catch (SQLException e) {

      System.out.println("Database connection failed!");

      e.printStackTrace();
    }
  } */
}
