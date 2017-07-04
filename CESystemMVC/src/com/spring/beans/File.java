package com.spring.beans;

public class File {
	
	int fileID;
	int userid;
	int usertypeid;
	String fileNo;
	String fileName;
	String initialReceiving;
	String insertionDate;
	String departmentName;
	String departmentType;
	String organizationName;
	String organizationType;
	String subject;
	int fileStatus;
	
	
	 public File(){
		 
		 this.fileID = 0;
		 this.usertypeid = 0;
		 this.userid = 0;
		 this.fileNo = "";
		 this.fileName = "";
		 this.initialReceiving ="";
		 this.insertionDate = "";
		 this.departmentName = "";
		 this.departmentType = "";
		 this.organizationName = "";
		 this.organizationType = "";
		 this.subject = "";
		 this.fileStatus = 0;
		 
	 }
	 
	 
	 public File(int FileID,int UserId,int UserTypeID,String FileNo,String FileName,String InitialReceiving,String InsertionDate,String DepartmentName,
		String DepartmentType,String OrganizationName,String OrganizationType,String Subject,int FileStatus){
		 
		 this.fileID = FileID;
		 
		 this.userid = UserId;
		 
		 this.usertypeid = UserTypeID;
		 
		 if(FileNo == null)FileNo="";
		 this.fileNo = FileNo;
		 
		 if(FileName == null)FileName="";
		 this.fileName = FileName;
		 
		 if(InitialReceiving == null)InitialReceiving="";
		 this.initialReceiving =InitialReceiving;
		 
		 if(InsertionDate == null)InsertionDate="";
		 this.insertionDate = InsertionDate;
		 
		 if(DepartmentName == null)DepartmentName="";
		 this.departmentName = DepartmentName;
		 
		 if(DepartmentType == null)DepartmentType="";
		 this.departmentType = DepartmentType;
		 
		 if(OrganizationName == null)OrganizationName="";
		 this.organizationName = OrganizationName;
		 
		 if(OrganizationType == null)OrganizationType="";
		 this.organizationType = OrganizationType;
		 
		 if(Subject == null)Subject="";
		 this.subject = Subject;
		 
		 this.fileStatus = FileStatus;
		 
	 }


	public int getFileID() {
		return fileID;
	}


	public void setFileID(int fileID) {
		this.fileID = fileID;
	}


	public String getFileNo() {
		return fileNo;
	}


	public void setFileNo(String fileNo) {
		if(fileNo == null)fileNo="";
		this.fileNo = fileNo;
	}


	public String getFileName() {
		return fileName;
	}


	public void setFileName(String fileName) {
		if(fileName == null)fileName="";
		this.fileName = fileName;
	}


	public String getInitialReceiving() {
		return initialReceiving;
	}


	public void setInitialReceiving(String initialReceiving) {
		if(initialReceiving == null)initialReceiving="";
		this.initialReceiving = initialReceiving;
	}


	public String getInsertionDate() {
		return insertionDate;
	}


	public void setInsertionDate(String insertionDate) {
		if(insertionDate == null)insertionDate="";
		this.insertionDate = insertionDate;
	}


	public String getDepartmentName() {
		return departmentName;
	}


	public void setDepartmentName(String departmentName) {
		if(departmentName == null)departmentName="";
		this.departmentName = departmentName;
	}


	public String getDepartmentType() {
		return departmentType;
	}


	public void setDepartmentType(String departmentType) {
		if(departmentType == null)departmentType="";
		this.departmentType = departmentType;
	}


	public String getOrganizationName() {
		return organizationName;
	}


	public void setOrganizationName(String organizationName) {
		if(organizationName == null)organizationName="";
		this.organizationName = organizationName;
	}


	public String getOrganizationType() {
		return organizationType;
	}


	public void setOrganizationType(String organizationType) {
		if(organizationType == null)organizationType="";
		this.organizationType = organizationType;
	}


	public String getSubject() {
		return subject;
	}


	public void setSubject(String subject) {
		if(subject == null)subject="";
		this.subject = subject;
	}


	public int getFileStatus() {
		return fileStatus;
	}


	public void setFileStatus(int fileStatus) {
		this.fileStatus = fileStatus;
	}


	public int getUserID() {
		return userid;
	}


	public void setUserID(int userID) {
		userid = userID;
	}


	public int getUserTypeID() {
		return usertypeid;
	}


	public void setUserTypeID(int userTypeID) {
		usertypeid = userTypeID;
	}
	
	

}
