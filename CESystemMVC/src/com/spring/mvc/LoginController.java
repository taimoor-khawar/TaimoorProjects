package com.spring.mvc;

import java.sql.SQLException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.spring.beans.AdminDetails;
import com.spring.beans.Login;
import com.spring.beans.UserDetails;
import com.springmvc.dao.LoginDAO;
 
@Controller
public class LoginController {
 
	@Autowired  
    LoginDAO dao;//will inject dao from xml file  
    
	@RequestMapping(value="/login")  
    public ModelAndView loginpage(){ 
		 
		return new ModelAndView("Login");
    }
	
	@RequestMapping(value="/adminhome")  
    public ModelAndView adminhome(){ 
		 
		return new ModelAndView("AdminHome");
    }
	
	@RequestMapping(value="/mainlogin",method = RequestMethod.POST)  
    public ModelAndView showmain(@RequestParam(value="Username",defaultValue="") String Username,
    		@RequestParam(value="Password",defaultValue="")String Password,
    		final HttpServletRequest request) throws SQLException, Exception{ 
		 if(Username==null)Username="";
		 if(Password==null)Password="";
		
		 ModelAndView loginmodelview = null;
		 AdminDetails adminlogin = dao.getLoginByUsernameaDMIN(Username,Password,request);
		 
		 if(adminlogin !=null){
			 loginmodelview = new ModelAndView("./AdminHome","adminlogin",adminlogin);  
			 
 	     }
		 else if(adminlogin == null){
			 UserDetails user = dao.getLoginByUsername(Username, Password, request);
			 
			 if(user != null){
				 loginmodelview =  new ModelAndView("/Login","Message","You entered username and password as a Student");
			 }
			 else{ 
				 loginmodelview =  new ModelAndView("/Login","Message","You entered invalid username and password");
			 }
		 }
		return loginmodelview;
    }
	
	
    /*It displays a form to input data, here "command" is a reserved request attribute 
     *which is used to display object data into form 
     */  
    @RequestMapping("/loginform")  
    public ModelAndView showform(){  
        return new ModelAndView("loginform","command",new Login());  
    }  
    /*It saves object into database. The @ModelAttribute puts request data 
     *  into model object. You need to mention RequestMethod.POST method  
     *  because default request is GET*/  
    @RequestMapping(value="/save",method = RequestMethod.POST)  
    public ModelAndView save(@ModelAttribute("login") Login login){  
        dao.save(login);  
        return new ModelAndView("redirect:/viewlogin");//will redirect to viewemp request mapping  
    }  
    /* It provides list of employees in model object */  
    @RequestMapping("/viewlogin")  
    public ModelAndView viewemp(){  
        List<Login> list=dao.getLogins();  
        return new ModelAndView("viewlogin","list",list);  
    }  
    /* It displays object data into form for the given id.  
     * The @PathVariable puts URL data into variable.*/  
    @RequestMapping(value="/editlogin/{id}")  
    public ModelAndView edit(@PathVariable int id){  
    	Login emp=dao.getLoginById(id);  
        return new ModelAndView("logineditform","command",emp);  
    }  
    /* It updates model object. */  
    @RequestMapping(value="/editsave",method = RequestMethod.POST)  
    public ModelAndView editsave(@ModelAttribute("login") Login login){  
        dao.update(login);  
        return new ModelAndView("redirect:/viewlogin");  
    }  
    /* It deletes record for the given id in URL and redirects to /viewemp */  
    @RequestMapping(value="/deletelogin/{id}",method = RequestMethod.GET)  
    public ModelAndView delete(@PathVariable int id){  
        dao.delete(id);  
        return new ModelAndView("redirect:/viewlogin");  
    }  
}