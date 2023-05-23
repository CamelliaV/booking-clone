/**
 * FileName: Result
 * Author: Laritte
 * Date: 2023/4/29 17:21:25
 * Description:
 * Version: 1.0.0
 */
package com.laritte.server.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Result<T> {
	@Builder.Default
	private T data = null;
	@Builder.Default
	private int code = HttpStatus.OK.value();
	@Builder.Default
	private String message = "";

}