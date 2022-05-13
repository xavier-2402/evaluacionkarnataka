package karnataka.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
	
	public static Connection connect(){
    	String host= "192.168.43.173";
        int port = 1521;
        String user = "web_usr";
    	String pwd = "EBRUC8102%";
    	String database = "dbttik";
		String connectionUrl="jdbc:oracle:thin:@"+host+":"+port
				+"/"+database;
		Connection con = null;
		
		try {
			con=DriverManager.getConnection(connectionUrl,user,pwd);
    
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return con;
	}

}
