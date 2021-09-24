package com.smart.project.web.home.act;

import com.smart.project.common.vo.MemberVO;
import com.smart.project.component.CommonCodeComponent;
import com.smart.project.proc.Test;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Slf4j
@Controller
public class HomeAct {

	@Autowired
	CommonCodeComponent commonCodeComponent;

	@Autowired
	Test test;

	@RequestMapping("/")
	public String home(Model model){
		log.error("{}",commonCodeComponent.getCodeList("style_f"));

		List<MemberVO> list = test.sqlMember();
		log.error("{}", list);
		model.addAttribute("tests", list);

		return "index";
	}

	@RequestMapping("/join")
	public String join(){
		log.error("{}",commonCodeComponent.getCodeList("style_f"));
		return "join";
	}

	@RequestMapping("/data")
	@ResponseBody
	public String homeData(){
		return "index";
	}
}
