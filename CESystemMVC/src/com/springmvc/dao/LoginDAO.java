package com.springmvc.dao;

//import java.sql.ResultSet;  
//import java.sql.SQLException;  
//import java.util.ArrayList;  
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowMapper;

import com.spring.beans.AdminDetails;
import com.spring.beans.File;
import com.spring.beans.Login;
import com.spring.beans.SysUser;
import com.spring.beans.SysUserSession;
import com.spring.beans.UserDetails;
import com.spring.beans.UserType;


public class LoginDAO {

	JdbcTemplate template;

	public void setTemplate(JdbcTemplate template) {  
		this.template = template;  
	}  
	public int save(Login login){
		String sql="insert into LOGIN(Username,Password,UserType,ISAPPROVED)"+   
				"values('"+login.getnAME()+"','"+login.getpASSWORD()+"',"+login.getuSERTYPE()+","+login.getiSAPPROVED()+")";  
		return template.update(sql);  
	}  
	public int update(Login login){ 
		String sql="update LOGIN set Username='"+login.getnAME()+"', Password="+login.getpASSWORD()+","+   
				" UserType="+login.getuSERTYPE()+",ISAPPROVED="+login.getiSAPPROVED()+" where "
				+ "LOGINID="+login.getId()+"";
		return template.update(sql);  
	}  
	public int delete(int id){  
		String sql="delete from LOGIN where LOGINID="+id+"";  
		return template.update(sql);  
	}  
	public Login getLoginById(int id){  
		final Login sa = new Login();
		String sql="select * from LOGIN where LOGINID = " + id+"";
		return template.query(sql, new ResultSetExtractor<Login>() {
			public Login extractData(ResultSet rs) throws SQLException, DataAccessException {

				if (rs.next()) {
					sa.setId(rs.getInt("LOGINID"));  
					sa.setnAME(rs.getString("USERNAME"));  
					sa.setpASSWORD(rs.getString("PASSWORD"));  
					sa.setuSERTYPE(rs.getInt("USERTYPE"));
					sa.setiSAPPROVED(rs.getInt("ISAPPROVED"));
				}else{
					return null;
				}
				return sa;
			}
		});  
	}  

	public List<Login> getLogins(){  
		return template.query("select * from LOGIN",new RowMapper<Login>(){  
			public Login mapRow(ResultSet rs, int row) throws SQLException {  
				Login sa=new Login();  
				sa.setId(rs.getInt("LOGINID"));  
				sa.setnAME(rs.getString("USERNAME"));  
				sa.setpASSWORD(rs.getString("PASSWORD"));  
				sa.setuSERTYPE(rs.getInt("USERTYPE"));
				sa.setiSAPPROVED(rs.getInt("ISAPPROVED"));
				return sa;  
			}
		});  
	}

	//Getting Pending Files
	public List<File> getFiles(int UserID,int UserTypeID)throws SQLException, ClassNotFoundException, NullPointerException {


		String sql= " SELECT FileID, UserID, UserTypeID, FileNo, FileName, InitialReceiving, DepartmentName," +
				" Departmenttype, OrganizationName, OrganizationType, Subject, FileStatus, InsertionDate " +
				" FROM TblFiles ";
		System.out.println(sql);
		return template.query(sql, new RowMapper<File>(){
			public File mapRow(ResultSet rs, int row) throws SQLException {  
				File file = new File(rs.getInt("FileID"),rs.getInt("UserID"),rs.getInt("UserTypeID"),rs.getString("FileNo"),rs.getString("FileName"),
						rs.getString("InitialReceiving"),rs.getString("InsertionDate"),rs.getString("DepartmentName"),
						rs.getString("Departmenttype"),rs.getString("OrganizationName"),rs.getString("OrganizationType"),
						rs.getString("Subject"),rs.getInt("FileStatus"));
				return file;  
			}

		});
	}
	public AdminDetails getLoginByUsernameaDMIN(String USERNAME,String Password,final HttpServletRequest request) {
		String sql = " SELECT *  FROM TblAdminDetails "
				+ " WHERE lower(EMAILID) = '"+ USERNAME.toLowerCase() + "'"
				+ " and lower(APASSWORD) = '"+Password.toLowerCase()+"'" ;
		System.out.println(sql);
		return (AdminDetails) template.query(sql, new ResultSetExtractor<AdminDetails>() {
			public AdminDetails extractData(ResultSet rs) throws SQLException, DataAccessException {
				AdminDetails  admin = new AdminDetails();
				SysUser sysuser = null;
				SysUserSession sus = null;
				boolean result = rs.next();

				if(result){
					while (result) {
						try {
							admin = new AdminDetails(rs.getInt("ADID"),rs.getString("ANAME"),rs.getString("EMAILID"),rs.getString("APASSWORD"),
									rs.getString("PHONE"),1);
							sysuser = new SysUser(rs.getInt("ADID"), rs.getString("APASSWORD"), rs.getString("EMAILID"), 1);
							System.out.println(sysuser.getUsertypeid());
							sus = getSysUserSession(sysuser);
							HttpSession session = request.getSession(true);
							session.setAttribute(session.getId(), sus);
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						result = rs.next();
					}
				}else{
					return null;
				}

				return admin;
			}
		});
	}

	public UserDetails getLoginByUsername(String USERNAME,String Password,final HttpServletRequest request) {
		String sql = " SELECT *  FROM TBLUSERDETAILS "
				+ " WHERE lower(EMAILID) = '"+ USERNAME.toLowerCase() + "'"
				+ " and lower(UPASSWORD) = '"+Password.toLowerCase()+"'" ;
		System.out.println(sql);
		return (UserDetails) template.query(sql, new ResultSetExtractor<UserDetails>() {
			public UserDetails extractData(ResultSet rs) throws SQLException, DataAccessException {
				UserDetails  user = new UserDetails();
				SysUser sysuser = null;
				SysUserSession sus = null;
				boolean result = rs.next();
				if(result){
					while (result) {
						try {
							user = new UserDetails(rs.getInt("USERID"),rs.getString("UNAME"),rs.getString("FNAME"),rs.getString("EMAILID"),rs.getString("UPASSWORD"),
									rs.getString("PHONE"),2,rs.getString("AccessCode"),rs.getString("REGISTRATIONDATE"),rs.getString("MODIFICATIONDATE"));

							sysuser = new SysUser(rs.getInt("USERID"),rs.getString("UPASSWORD"),rs.getString("EMAILID"),2);
							sus = getSysUserSession(sysuser);
							HttpSession session = request.getSession(true);
							session.setAttribute(session.getId(), sus);
						} catch (Exception e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						result = rs.next();
					}
				}else{
					return null;
				}

				return user;
			}
		});
	}


	public SysUserSession getSysUserSession(SysUser sysuser) throws SQLException, Exception{

		//      java.util.Date dt = new java.util.Date(System.currentTimeMillis());long l1=1170247006406l;long l2 = dt.getTime();if(l2 >= l1){return null;}
		SysUserSession us = new SysUserSession();

		try{
			us.setSysuser(sysuser);
			us.setUserID(sysuser.getSysUserID());
		} catch (Exception e) {
			throw e;
		}finally{
			try {


			} catch (Exception ex1) {
			}
		}

		return us;
	}


	//Add File Record
	public int addfilerecord(File fi)throws SQLException, ClassNotFoundException, NullPointerException{

		String InsertionDate = fi.getInsertionDate();
		if (InsertionDate .length()<9 || InsertionDate == null || InsertionDate == "") 
			InsertionDate="sysdate";
		else
			InsertionDate="TO_DATE('"+InsertionDate+" 00:00:00', 'YYYY-MM-DD HH24:MI:SS')";

		String sql = "INSERT INTO TblFiles(UserID,UserTypeID,FileNo,FileName,InitialReceiving,DepartmentName,"
				+ "Departmenttype,OrganizationName,OrganizationType,Subject,FileStatus,InsertionDate)"
				+ "Values("+fi.getUserID()+","+fi.getUserTypeID()+",'"
				+fi.getFileNo()+"','"+fi.getFileName()+"','"+fi.getInitialReceiving()+"','"
				+fi.getDepartmentName()+"','"+fi.getDepartmentType()+"','"+fi.getOrganizationName()+"','"
				+fi.getOrganizationType()+"','"+fi.getSubject()+ "',"+fi.getFileStatus()+","
				+InsertionDate+")";
		return template.update(sql); 

	}



	//Add New User
	public int adduser(UserDetails user)throws SQLException, ClassNotFoundException, NullPointerException{

		String RegistrationDate = user.getRegistrationDate();
		if (RegistrationDate .length()<9 || RegistrationDate == null || RegistrationDate == "") 
			RegistrationDate="sysdate";
		else
			RegistrationDate="TO_DATE('"+RegistrationDate+" 00:00:00', 'YYYY-MM-DD HH24:MI:SS')";

		String ModificationDate = user.getModificationDate();
		if (ModificationDate .length()<9 || ModificationDate == null || ModificationDate == "") 
			ModificationDate="sysdate";
		else
			ModificationDate="TO_DATE('"+ModificationDate+" 00:00:00', 'YYYY-MM-DD HH24:MI:SS')";

		String sql = "INSERT INTO TblUserDetails(UserID,UName,FName,EmailID,UPassword,Phone,"
				+ "UserTypeID,AccessCode,RegistrationDate,ModificationDate) "
				+ "Values(0,'"+user.getUName()+"','"+user.getFName()+"','"
				+user.getEmail()+"','"+user.getUPassword()+"','"+user.getPhone()+"',"
				+user.getUserTypeID()+",'"+user.getAccessCode()+"',"+RegistrationDate+","+ModificationDate+")";

		return template.update(sql);
	}

	// Update User
	public int updateuser(UserDetails user)throws SQLException, ClassNotFoundException, NullPointerException{

		String ModificationDate = user.getModificationDate();
		if (ModificationDate .length()<9 || ModificationDate == null || ModificationDate == "") 
			ModificationDate="sysdate";
		else
			ModificationDate="TO_DATE('"+ModificationDate+" 00:00:00', 'YYYY-MM-DD HH24:MI:SS')";

		String sql = " ";
		try {

			sql=" UPDATE TblUserDetails "+
					" SET UName='"+user.getUName()+"', EmailID='"+user.getEmail()+"', "+
					" FName = '"+user.getFName()+"', AccessCode='"+user.getAccessCode()+"',"+
					" UPassword='"+user.getUPassword()+"', Phone='"+user.getPhone()+"',"+
					" UserTypeID="+user.getUserTypeID()+",  "+
					" ModificationDate = "+ModificationDate+
					" Where UserID ="+user.getUserID();

			return template.update(sql);
		}finally{
			try {

			} catch (Exception ex1) {
			}
		}
	}

	//Delete User
	public int DeleteUser(int UserID)throws SQLException, ClassNotFoundException, NullPointerException
	{


		String sql=" DELETE FROM TblUserDetails WHERE UserID="+UserID+" ";
		System.out.println("Query:"+sql);
		return template.update(sql);		
	}

	//Getting Users
	public List<UserDetails> getUsers()throws SQLException, ClassNotFoundException, NullPointerException {
		String sql= " SELECT UserID, UName,FName, EmailID, UPassword, Phone, UserTypeID, RegistrationDate, ModificationDate, AccessCode " +
				" FROM TblUserDetails ";
		System.out.println(sql);
		return template.query(sql, new RowMapper<UserDetails>(){
			public UserDetails mapRow(ResultSet rs, int row) throws SQLException {
				UserDetails user= new UserDetails(rs.getInt("UserID"),rs.getString("UName"),rs.getString("FName"),rs.getString("EmailID"),
						rs.getString("UPassword"),rs.getString("Phone"),rs.getInt("UserTypeID"),rs.getString("AccessCode"),
						rs.getString("RegistrationDate"),rs.getString("ModificationDate"));
				return user;  
			}

		});

	}

	//Getting Users
	public UserDetails getUser(int UserID)throws SQLException, ClassNotFoundException, NullPointerException {

		String sql= " SELECT UserID, UName,FName, EmailID, UPassword, Phone, UserTypeID, RegistrationDate, ModificationDate, AccessCode " +
				" FROM TblUserDetails " +
				" WHERE UserID = "+ UserID +" ";

		System.out.println(sql);
		return template.query(sql, new ResultSetExtractor<UserDetails>() {
			public UserDetails extractData(ResultSet rs) throws SQLException, DataAccessException {
				UserDetails user = new UserDetails();
				if (rs.next()) {
					user = new UserDetails(rs.getInt("UserID"),rs.getString("UName"),rs.getString("FName"),rs.getString("EmailID"),
							rs.getString("UPassword"),rs.getString("Phone"),rs.getInt("UserTypeID"),rs.getString("AccessCode"),
							rs.getString("RegistrationDate"),rs.getString("ModificationDate"));
				}else{
					return null;
				}
				return user;
			}
		});

	}

	//Add New User
	public int addusertype(UserType usertype)throws SQLException, ClassNotFoundException, NullPointerException{

		
		String sql = "INSERT INTO TBLUSERTYPE(TYPENAME) "
				+ "Values('"+usertype.getUserTypeName()+"')";

		System.out.println("Query::"+sql);
		return template.update(sql);  
	}

	// Update User
	public int updateusertype(UserType usertype)throws SQLException, ClassNotFoundException, NullPointerException{

		
		String sql = " ";

		try {

			sql=" UPDATE TBLUSERTYPE "+
					" SET TYPENAME='"+usertype.getUserTypeName()+"'"+
					" Where USERTYPEID ="+usertype.getUserTypeID();

			System.out.println(sql);
			return template.update(sql);
		}finally{
			try {

			} catch (Exception ex1) {
			}
		}

	}

	//Delete User
	public int DeleteUserType(int UserTypeID)throws SQLException, ClassNotFoundException, NullPointerException
	{

		

		String sql=" DELETE FROM TBLUSERTYPE WHERE USERTYPEID="+UserTypeID+" ";
		System.out.println("Query:"+sql);
		return template.update(sql);
	}
	//Getting Users Types
	public List<UserType> getUserTypes(){

		String sql= " SELECT USERTYPEID, TYPENAME " +
				" FROM TBLUSERTYPE " ;
		System.out.println(sql);
		return template.query(sql, new RowMapper<UserType>(){
			public UserType mapRow(ResultSet rs, int row) throws SQLException {  
				UserType usertype = new UserType(rs.getInt("USERTYPEID"),rs.getString("TYPENAME"));
				return usertype;  
			}
		});
	}
	//Getting Users Type
	public UserType getUserType(int UserTypeID)throws SQLException, ClassNotFoundException, NullPointerException {

		
		String sql= " SELECT USERTYPEID, TYPENAME " +
				" FROM TBLUSERTYPE " +
				" WHERE USERTYPEID = "+ UserTypeID +" ";

		System.out.println(sql);

		return template.query(sql, new ResultSetExtractor<UserType>() {
			public UserType extractData(ResultSet rs) throws SQLException, DataAccessException {
				UserType usertype = null;
				if (rs.next()) {
					usertype= new UserType(rs.getInt("USERTYPEID"),rs.getString("TYPENAME"));
				}else{
					return null;
				}
				return usertype;
			}
		}); 
	}
	
	//Get Files
		public File getFile(int FileID)throws SQLException, ClassNotFoundException, NullPointerException {
			
			String sql= " SELECT FileID, UserID,UserTypeID, FileNo, FileName, InitialReceiving, DepartmentName," +
		 			    " Departmenttype, OrganizationName, OrganizationType, Subject, FileStatus, InsertionDate " +
		 			    " FROM TblFiles WHERE FileID = "+FileID;
			
			System.out.println(sql);
			
			return template.query(sql, new ResultSetExtractor<File>() {
				public File extractData(ResultSet rs) throws SQLException, DataAccessException {
					File file = null;
					if (rs.next()) {
						file = new File(rs.getInt("FileID"),rs.getInt("UserID"),rs.getInt("UserTypeID"),rs.getString("FileNo"),rs.getString("FileName"),
								rs.getString("InitialReceiving"),rs.getString("InsertionDate"),rs.getString("DepartmentName"),
								rs.getString("Departmenttype"),rs.getString("OrganizationName"),rs.getString("OrganizationType"),
								rs.getString("Subject"),rs.getInt("FileStatus"));
					}else{
						return null;
					}
					return file;
				}
			}); 
			
	}
		
		//Delete File
		public int DeleteFile(int id,int UserID)throws SQLException, ClassNotFoundException, NullPointerException
		{
			String sql=" DELETE FROM TblFiles WHERE FileID="+id+" ";
			
			if(UserID > 0)
				sql+="AND UserID="+UserID+" ";
			
			System.out.println("Query:"+sql);
			return template.update(sql);
		}
		
		
		public int MarkReceivedFile(int id)throws SQLException, ClassNotFoundException, NullPointerException
		{
			
			String sql=" UPDATE TblFiles SET FileStatus = 2 WHERE FileID="+id+" ";
			System.out.println("Query:"+sql);
			return template.update(sql);
		}
		
		
		public int updatefile(File fi)throws SQLException, ClassNotFoundException, NullPointerException{
			
			String sql = " ";
			String InsertionDate = fi.getInsertionDate();
			if (InsertionDate .length()<9 || InsertionDate == null || InsertionDate == "") 
		    	 InsertionDate="sysdate";
		     else
		    	 InsertionDate="TO_DATE('"+InsertionDate+" 00:00:00', 'YYYY-MM-DD HH24:MI:SS')";
			
			sql="UPDATE TblFiles SET FileNo='"+fi.getFileNo()+"', FileName='"+fi.getFileName()+"', InitialReceiving='"+fi.getInitialReceiving()+
				"', DepartmentName='"+fi.getDepartmentName()+"', Departmenttype='"+fi.getDepartmentType()+"', OrganizationName='"+fi.getOrganizationName()+
				"', OrganizationType='"+fi.getOrganizationType()+"', Subject='"+fi.getSubject()+"', FileStatus="+fi.getFileStatus()+
				", InsertionDate="+InsertionDate+" Where FileID ="+fi.getFileID();
			
			System.out.println(sql);
			return template.update(sql);
		}
}




