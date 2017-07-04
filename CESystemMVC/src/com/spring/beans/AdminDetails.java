package com.spring.beans;

public class AdminDetails {
	
	int ADID;
	String AName;
	String Email;
	String Password;
	String Phone;
	int UserType;
	
	
	 public AdminDetails(){
		 
		 this.ADID = 0;
		 this.AName = "";
		 this.Email = "";
		 this.Password ="";
		 this.Phone = "";
		 this.UserType = 0;
		 
	 }
	 
	 
	 public AdminDetails(int ADID,String AName,String Email,String Password,String Phone,int UserType){
		 
		 this.ADID = ADID;
		 
		 if(AName == null)AName="";
		 this.AName = AName;
		 
		 if(Email == null)Email="";
		 this.Email = Email;
		 
		 if(Password == null)Password="";
		 this.Password = Password;
		 
		 if(Phone == null)Phone="";
		 this.Phone = Phone;
		 
		 this.UserType = UserType;
		 
	 }


	public int getADID() {
		return ADID;
	}


	public void setADID(int aDID) {
		ADID = aDID;
	}


	public String getAName() {
		return AName;
	}


	public void setAName(String aName) {
		if(aName == null)aName="";
		AName = aName;
	}


	public String getEmail() {
		return Email;
	}


	public void setEmail(String email) {
		if(email == null)email="";
		Email = email;
	}


	public String getPassword() {
		return Password;
	}


	public void setPassword(String password) {
		if(password == null)password="";
		Password = password;
	}


	public String getPhone() {
		return Phone;
	}


	public void setPhone(String phone) {
		if(phone == null)phone="";
		Phone = phone;
	}


	public int getUserType() {
		return UserType;
	}


	public void setUserType(int userType) {
		UserType = userType;
	}
	 
	 
	 

}
