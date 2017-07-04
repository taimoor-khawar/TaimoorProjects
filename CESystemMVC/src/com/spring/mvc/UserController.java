package com.spring.mvc;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.spring.beans.UserDetails;
import com.spring.beans.UserType;
import com.springmvc.dao.LoginDAO;

@Controller
public class UserController {
	
	@Autowired  
    LoginDAO dao;
	
	
	@RequestMapping(value="/adduser") 
    public ModelAndView adduser(){ 
		ModelAndView userview = new ModelAndView();
		List<UserType> usertypelist = dao.getUserTypes();
		userview.addObject("usertypelist", usertypelist);
		userview.setViewName("AddUser");
		userview.addObject("command",new UserDetails());
		//return ModelAndView("AddUser","command",new UserDetails());
		return userview;
    }
	
	@RequestMapping(value="/adduserrecord",method = RequestMethod.POST)  
    public ModelAndView adduserrecord(@ModelAttribute("UserDetails") UserDetails userdetail) throws ClassNotFoundException, NullPointerException, SQLException{  
        dao.adduser(userdetail);  
        return new ModelAndView("redirect:/adminhome");
    }
	
	@RequestMapping(value="/userdetails")  
    public ModelAndView showuserrecord() throws ClassNotFoundException, NullPointerException, SQLException{
		List<UserDetails> userlist = dao.getUsers();
		return new ModelAndView("UserDetails","userlist",userlist);  
    }
	
	
	@RequestMapping(value="/edituserrecord/{UserID}")  
    public ModelAndView edituserrecord(@PathVariable int UserID) throws ClassNotFoundException, NullPointerException, SQLException{  
        UserDetails user = dao.getUser(UserID);
        return new ModelAndView("UpdateUser","user",user);
    }
	
	@RequestMapping(value="/updateuserrecord",method = RequestMethod.POST)  
    public ModelAndView updateuserrecord(@ModelAttribute("UserDetails") UserDetails user) throws ClassNotFoundException, NullPointerException, SQLException{  
        int update = dao.updateuser(user);
        return new ModelAndView("redirect:/userdetails");
    }
	
	@RequestMapping(value="/deleteuserrecord/{UserID}")  
    public ModelAndView deleteuserrecord(@PathVariable int UserID) throws ClassNotFoundException, NullPointerException, SQLException{  
        int delete = dao.DeleteUser(UserID);
        return new ModelAndView("redirect:/userdetails");
    }
	
	
	//User Types
	
	
	@RequestMapping(value="/addusertype") 
    public ModelAndView addusertype(){ 
		 return  new ModelAndView("AddUserType","command",new UserType());
    }
	
	@RequestMapping(value="/addusertyperecord",method = RequestMethod.POST)  
    public ModelAndView addusertyperecord(@ModelAttribute("UserType") UserType usertype) throws ClassNotFoundException, NullPointerException, SQLException{  
        dao.addusertype(usertype);  
        return new ModelAndView("redirect:/adminhome");
    }
	
	@RequestMapping(value="/showusertypes")  
    public ModelAndView usertypedetails() throws ClassNotFoundException, NullPointerException, SQLException{
		List<UserType> usertypelist = dao.getUserTypes();
		return new ModelAndView("UserTypes","usertypelist",usertypelist);  
    }
	
	
	@RequestMapping(value="/editusertyperecord/{UserTypeID}")  
    public ModelAndView editfilerecord(@PathVariable int UserTypeID) throws ClassNotFoundException, NullPointerException, SQLException{  
        UserDetails user = dao.getUser(UserTypeID);
        return new ModelAndView("UpdateUser","user",user);
    }
	
	@RequestMapping(value="/updateusertyperecord",method = RequestMethod.POST)  
    public ModelAndView updateusertyperecord(@ModelAttribute("UserDetails") UserDetails user) throws ClassNotFoundException, NullPointerException, SQLException{  
        int update = dao.updateuser(user);
        return new ModelAndView("redirect:/userdetails");
    }
	
	@RequestMapping(value="/deleteusertyperecord/{UserID}")  
    public ModelAndView deleteusertyperecord(@PathVariable int UserID) throws ClassNotFoundException, NullPointerException, SQLException{  
        int delete = dao.DeleteUser(UserID);
        return new ModelAndView("redirect:/userdetails");
    }

}
