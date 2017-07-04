package com.spring.beans;


public class UserDetails {
	
	int userID;
	String uName;
	String fName;
	String email;
	String uPassword;
	String phone;
	int userTypeID;
	String accessCode;
	String registrationDate;
	String modificationDate;
	
	
	
	 public UserDetails(){
		 
		 this.userID = 0;
		 this.uName = "";
		 this.fName = "";
		 this.email = "";
		 this.uPassword ="";
		 this.phone = "";
		 this.userTypeID = 0;
		 this.accessCode = "";
		 this.registrationDate = "";
		 this.modificationDate = "";
	 }
	 
	 
	 public UserDetails(int UserID,String UName,String FName,String Email,String UPassword,String Phone,int UserTypeID,
			 String AccessCode,String RegistrationDate, String ModificationDate ){
		 
		 this.userID = UserID;
		 
		 if(UName == null)UName="";
		 this.uName = UName;
		 
		 if(FName == null)FName="";
		 this.fName = FName;
		 
		 if(Email == null)Email="";
		 this.email = Email;
		 
		 if(UPassword == null)UPassword="";
		 this.uPassword =UPassword;
		 
		 if(Phone == null)Phone="";
		 this.phone = Phone;
		 
		 this.userTypeID = UserTypeID;
		 
		 if(AccessCode == null)AccessCode="";
		 this.accessCode = AccessCode;
		 
		 if(RegistrationDate == null)RegistrationDate="";
		 if(RegistrationDate.length() > 9)RegistrationDate = RegistrationDate.substring(0, 10);
		 this.registrationDate = RegistrationDate;
		 
		 if(ModificationDate == null)ModificationDate="";
		 if(ModificationDate.length() > 9)ModificationDate = ModificationDate.substring(0, 10);
		 this.modificationDate = ModificationDate;
		 
	 }


	public int getUserID() {
		return userID;
	}


	public void setUserID(int userID) {
		this.userID = userID;
	}


	public String getUName() {
		return uName;
	}


	public void setUName(String uName) {
		if(uName == null)uName="";
		this.uName = uName;
	}
	
	

	public String getFName() {
		return fName;
	}


	public void setFName(String fName) {
		if(fName == null)fName="";
		this.fName = fName;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		if(email == null)email="";
		this.email = email;
	}


	public String getUPassword() {
		return uPassword;
	}


	public void setUPassword(String uPassword) {
		if(uPassword == null)uPassword="";
		this.uPassword = uPassword;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		if(phone == null)phone="";
		this.phone = phone;
	}


	public int getUserTypeID() {
		return userTypeID;
	}


	public void setUserTypeID(int userTypeID) {
		this.userTypeID = userTypeID;
	}

	
	
	public String getAccessCode() {
		return accessCode;
	}


	public void setAccessCode(String accessCode) {
		if(accessCode == null)accessCode="";
		this.accessCode = accessCode;
	}


	public String getRegistrationDate() {
		return registrationDate;
	}


	public void setRegistrationDate(String registrationDate) {
		if(registrationDate == null)registrationDate="";
		this.registrationDate = registrationDate;
	}


	public String getModificationDate() {
		return modificationDate;
	}


	public void setModificationDate(String modificationDate) {
		if(modificationDate == null)modificationDate="";
		this.modificationDate = modificationDate;
	}
	 
	 
	 
}
