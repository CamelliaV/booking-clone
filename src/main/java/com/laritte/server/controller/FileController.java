/**
 * FileName: FileController
 * Author: Laritte
 * Date: 2023/4/29 12:24:07
 * Description: Handling file uploading
 * Version: 1.0.0
 */
package com.laritte.server.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/file")
public class FileController {

	@PostMapping
	public String uploadFile(String nickname, MultipartFile file, HttpServletRequest request) throws IOException {
		System.out.println("FileController: File Size: " + file.getSize());
		System.out.println("FileController: File Content Type: " + file.getContentType());
		System.out.println("FileController: File Original Name: " + file.getOriginalFilename());
		String path = System.getProperty("user.dir") + "/upload/";
		// for deployment
		// String path = request.getServletContext().getRealPath("/upload/");
		System.out.println("FileController: File Save Dir: " + path);

		File upDir = new File(path);
		if (!upDir.exists()) {
			upDir.mkdirs();
		}

		File fileToSave = new File(path + file.getOriginalFilename());
		file.transferTo(fileToSave);

		return "Uploading Successfully with " + file.getOriginalFilename();
	}
}