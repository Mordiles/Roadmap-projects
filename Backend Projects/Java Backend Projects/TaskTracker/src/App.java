import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner input = new Scanner(System.in);
        int timerUI = 0;

        TaskManager manager = new TaskManager();

        while (true) {
            Thread.sleep(timerUI);

            System.out.println("=".repeat(6) + " Task Tracker 1.0 " + "=".repeat(6));
            System.out.println("1. Add New Task");
            System.out.println("2. Update Task");
            System.out.println("3. Delete Task");
            System.out.println("4. Show All Tasks");
            System.out.println("5. Show Finished Tasks");
            System.out.println("6. Show Unfinished Tasks");
            System.out.println("7. Show In Progress Tasks");
            System.out.println("8. Exit");

            System.out.print("Choose An Action: ");
            timerUI = 2000;
            try {

                int taskChoice = Integer.parseInt(input.nextLine());

                switch (taskChoice) {
                    case 1:
                        System.out.println("=".repeat(4)+" New Task "+"-".repeat(4));
                        System.out.println("Enter New Task Description:");
                        String desc = input.nextLine();
                        manager.addTask(desc);
                        break;
                    case 2:
                        System.out.println("Enter Task ID: ");
                        int updateID = input.nextInt();
                        break;
                    case 3:
                        System.out.println("Case 3");

                        break;
                    case 4:
                        System.out.println("Case 4");

                        break;
                    case 5:
                        System.out.println("Case 5");

                        break;
                    case 6:
                        System.out.println("Case 6");

                        break;
                    case 7:
                        System.out.println("Case 7");

                        break;
                    case 8:
                        System.out.println("Case 8");

                        return;

                    default:
                        System.out.println("\n" + "=".repeat(30));
                        System.out.println("Please enter a number from 1-7.");
                        System.out.println("=".repeat(30) + "\n");

                }
            } catch (NumberFormatException e) {

                System.out.println("\n" + "=".repeat(30));
                System.out.println("Input must be a number!");
                System.out.println("=".repeat(30) + "\n");
            }
        }
    }
}
