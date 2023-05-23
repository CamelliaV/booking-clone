/**
 * FileName: AuthController
 * Author: Laritte
 * Date: 2023/4/29 14:45:33
 * Description:
 * Version: 1.0.0
 */
package com.laritte.server.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.laritte.server.entity.User;
import com.laritte.server.utils.JWTUtils;
import com.laritte.server.utils.Result;
import com.laritte.server.vo.UserVO;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@PostMapping("/signin")
	@ResponseBody
	public Result<UserVO> signIn(@RequestBody User user, HttpServletResponse response) {
		User userToFind = user.selectOne(new QueryWrapper<User>()
				.eq("username", user.getUsername()));
		Result.ResultBuilder<UserVO> builder = new Result<>().builder();
		if (userToFind == null) {
			System.out.println();
			return builder
					.code(HttpStatus.NOT_FOUND.value())
					.message("Not yet sign up")
					.build();
		}
		if (!BCrypt.checkpw(
				user.getPassword(), userToFind.getPassword())) {
			return builder
					.code(HttpStatus.NOT_FOUND.value())
					.message("Password or username not correct")
					.build();
		}
		Cookie cookie = new Cookie("access_token",
				JWTUtils.generateToken(userToFind.getUid()));
		cookie.setHttpOnly(true);
		cookie.setSecure(true);

		response.addCookie(cookie);

		return builder
				.data(new UserVO(userToFind))
				.message("Sign in successfully")
				.build();
	}
	@PostMapping("/signup")
	@ResponseBody
	public Result<UserVO> signUp(@RequestBody User user, HttpServletResponse response) {
		User userToFind = user.selectOne(new QueryWrapper<User>()
				.eq("username", user.getUsername()));
		Result.ResultBuilder<UserVO> builder = new Result<>().builder();
		if (userToFind != null) {
			return builder
					.code(HttpStatus.CONFLICT.value())
					.message("Username already signed up")
					.build();
		}
		user.setUid(UUID.randomUUID().toString());
		user.setPassword(BCrypt.hashpw(user.getPassword(), BCrypt.gensalt(10)));

		if (!user.insert()) {
			return builder
					.code(HttpStatus.INTERNAL_SERVER_ERROR.value())
					.message("Server failed to process sign up operation")
					.build();
		}

		Cookie cookie = new Cookie("access_token",
				JWTUtils.generateToken(user.getUid()));
		cookie.setHttpOnly(true);
		cookie.setSecure(true);
		response.addCookie(cookie);
		return builder
				.data(new UserVO(user))
				.message("Sign up succeed")
				.build();
	}
	@PutMapping("/logout")
	public Result<UserVO> logout(HttpServletResponse response) {
		Cookie cookie = new Cookie("access_token","");
		cookie.setMaxAge(0);
		cookie.setHttpOnly(true);
		cookie.setSecure(true);
		response.addCookie(cookie);
		Result.ResultBuilder<UserVO> builder = new Result<>().builder();
		return builder
				.message("Log out succeed")
				.build();
	}
}