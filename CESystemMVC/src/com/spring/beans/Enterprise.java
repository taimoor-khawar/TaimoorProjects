package com.spring.beans;

public class Enterprise {
	
	int enterprisedid;
	int usertype;
	
	public Enterprise(){
		this.enterprisedid = 0;
		this.usertype = 0;
	}
	
	public Enterprise(int enterprisedid,int usertype ){
		this.enterprisedid = enterprisedid;
		this.usertype = usertype;
	}

	public int getEnterprisedid() {
		return enterprisedid;
	}

	public void setEnterprisedid(int enterprisedid) {
		this.enterprisedid = enterprisedid;
	}

	public int getUsertype() {
		return usertype;
	}

	public void setUsertype(int usertype) {
		this.usertype = usertype;
	}
	
	

}
