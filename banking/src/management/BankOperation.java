package management;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Scanner;

abstract class BankOperation {


    abstract public void createAccount(Scanner scanner,Connection con) throws SQLException, InterruptedException;

    abstract public void update(int limit,Scanner scanner ,Connection con) throws SQLException, InterruptedException;

    abstract public void update(Scanner scanner ,Connection con) throws SQLException, InterruptedException;

    abstract public void checkBalance(Scanner scanner ,Connection con) throws SQLException, InterruptedException;

    abstract public void details(Scanner scanner ,Connection con) throws SQLException, InterruptedException;

}
