package com.spring.beans;

 

public class SysUser {
    int sysUserID;
    String sysPassword;
    String email;
    int usertypeid;
    
    
   public SysUser(){
	   
	sysUserID=0;
	sysPassword="";
    email="";
    usertypeid = 0;
   	   
   }
    
public SysUser(int sysUserID,String sysPassword,String email,int UserTypeID) {

		this.sysUserID=sysUserID;
		this.sysPassword=sysPassword;
    	if(email==null)email="";
    	this.email=email;
    	this.usertypeid = UserTypeID;
   }

	public int getSysUserID() {
		return sysUserID;
	}
	
	public void setSysUserID(int sysUserID) {
		this.sysUserID = sysUserID;
	}
	
	public String getSysPassword() {
		return sysPassword;
	}
	
	public void setSysPassword(String sysPassword) {
		this.sysPassword = sysPassword;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public int getUsertypeid() {
		return usertypeid;
	}

	public void setUsertypeid(int usertypeid) {
		this.usertypeid = usertypeid;
	}
    
	

}
