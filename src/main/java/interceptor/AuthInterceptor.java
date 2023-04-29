/**
 * FileName: AuthInterceptor
 * Author: Laritte
 * Date: 2023/4/29 18:05:58
 * Description:
 * Version: 1.0.0
 */
package interceptor;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.laritte.server.utils.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class AuthInterceptor implements HandlerInterceptor {
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		Cookie[] cookies = request.getCookies();
		HashMap<String, Object> map = new HashMap<>();
		map.put("data", null);
		map.put("code", HttpStatus.UNAUTHORIZED.value());
		if (cookies == null) {
			map.put("message", "No cookie");
			returnJson(response, map);
			return false;
		}
		Stream<Cookie> stream = Arrays.stream(cookies);
		List<Cookie> accessToken = stream.filter(cookie -> cookie.getName().equals("access_token")).collect(Collectors.toList());

		if (accessToken.size() == 0) {
			map.put("message", "No access token");
			returnJson(response, map);
			return false;
		}
		String username = JWTUtils.getClaimsByToken(accessToken.get(0).getValue()).getSubject();
		if (username == null) {
			map.put("message", "Invalid token");
			returnJson(response, map);
			return false;
		}
		returnJson(response, map);
		request.setAttribute("username", username);
		return true;
	}

	@SuppressWarnings("unused")
	private void returnJson(HttpServletResponse response, HashMap<String, Object> map) throws Exception{
		ServletOutputStream writer = null;
		response.setContentType("application/json;charset=utf-8");
		String resultJson = new ObjectMapper().writeValueAsString(map);
		writer = response.getOutputStream();
		writer.print(resultJson);
		writer.close();
	}
}

