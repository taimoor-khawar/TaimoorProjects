package com.spring.beans;

public class UserType {
	
	int userTypeID;
	String userTypeName;
	
	
	
	 public UserType(){
		 
		 this.userTypeID = 0;
		 this.userTypeName = "";
		 
		 
	 }
	 
	 
	 public UserType(int UserTypeID,String UserTypeName ){
		 
		 this.userTypeID = UserTypeID;
		 
		 if(UserTypeName == null)UserTypeName="";
		 this.userTypeName = UserTypeName;
		 
	 }


	public int getUserTypeID() {
		return userTypeID;
	}


	public void setUserTypeID(int userTypeID) {
		this.userTypeID = userTypeID;
	}


	public String getUserTypeName() {
		return userTypeName;
	}


	public void setUserTypeName(String userTypeName) {
		if(userTypeName == null)userTypeName="";
		this.userTypeName = userTypeName;
	}
	 
	 


	}
