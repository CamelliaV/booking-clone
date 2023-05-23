/**
 * FileName: MyBatisPlusConfig
 * Author: Laritte
 * Date: 2023/4/29 18:02:07
 * Description:
 * Version: 1.0.0
 */
package com.laritte.server.config;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyBatisPlusConfig {
	@Bean
	public MybatisPlusInterceptor paginationInterceptor() {
		MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
		PaginationInnerInterceptor paginationInnerInterceptor =
				new PaginationInnerInterceptor(DbType.MYSQL);
		interceptor.addInnerInterceptor(paginationInnerInterceptor);
		return interceptor;
	}
}