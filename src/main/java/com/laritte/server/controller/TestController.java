/**
 * FileName: TestController
 * Author: Laritte
 * Date: 2023/4/29 13:38:11
 * Description: Test
 * Version: 1.0.0
 */
package com.laritte.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

	@GetMapping
	public String test() {
		return "Test";
	}
}