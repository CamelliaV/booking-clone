/**
 * FileName: WebConfigurer
 * Author: Laritte
 * Date: 2023/4/29 18:43:41
 * Description:
 * Version: 1.0.0
 */
package com.laritte.server.config;

import interceptor.AuthInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfigurer implements WebMvcConfigurer {
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new AuthInterceptor())
				.addPathPatterns("/test/**");
	}
}