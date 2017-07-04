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

import com.spring.beans.File;
import com.springmvc.dao.LoginDAO;

@Controller
public class FileController {
	
	@Autowired  
    LoginDAO dao;
	
	@RequestMapping(value="/filerecord") 
    public ModelAndView addfilerecord(){ 
		 return new ModelAndView("AddFileRecord","command",new File());
    }
	
	@RequestMapping(value="/addfilerecord",method = RequestMethod.POST)  
    public ModelAndView savefilerecord(@ModelAttribute("file") File file) throws ClassNotFoundException, NullPointerException, SQLException{  
        dao.addfilerecord(file);  
        return new ModelAndView("redirect:/adminhome");
    }
	
	@RequestMapping(value="/editfilerecord/{FileID}")  
    public ModelAndView editfilerecord(@PathVariable int FileID) throws ClassNotFoundException, NullPointerException, SQLException{  
        File file = dao.getFile(FileID);
        return new ModelAndView("EditFileRecord","file",file);
    }
	
	@RequestMapping(value="/updatefilerecord",method = RequestMethod.POST)  
    public ModelAndView updatefilerecord(@ModelAttribute("file") File file) throws ClassNotFoundException, NullPointerException, SQLException{  
        int update = dao.updatefile(file);
        return new ModelAndView("redirect:/showfilerecord");
    }
	
	@RequestMapping(value="/showfilerecord")  
    public ModelAndView showfilerecord() throws ClassNotFoundException, NullPointerException, SQLException{
		List<File> filelist = dao.getFiles(0, 0);
		return new ModelAndView("ShowFileRecord","filelist",filelist);  
    }
	
	@RequestMapping(value="/deletefilerecord/{id}/{UserID}")  
    public ModelAndView deletefilerecord(@PathVariable int FileID,@PathVariable int UserID) throws ClassNotFoundException, NullPointerException, SQLException{  
        int delete = dao.DeleteFile(FileID, UserID);
        return new ModelAndView("redirect:/adminhome");
    }

}
