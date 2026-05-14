import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DatabaseConnection {
  private static String URL;
  private static String USER;
  private static String PASSWORD;

  static {
    try {
      Properties props = new Properties();
      props.load(new FileInputStream("Backend Projects\\Java Backend Projects\\TaskTracker\\config.properties"));
      URL = props.getProperty("db.url");
      USER = props.getProperty("db.user");
      PASSWORD = props.getProperty("db.password");

    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public static Connection connect() throws SQLException {
    return DriverManager.getConnection(
        URL,
        USER,
        PASSWORD);
  }

  public static void main(String[] args) {

    try {
      Connection conn = DatabaseConnection.connect();

      System.out.println("Database connected successfully!");

      conn.close();

    } catch (SQLException e) {

      System.out.println("Database connection failed!");

      e.printStackTrace();
    }
  }

}
