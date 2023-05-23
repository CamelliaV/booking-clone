/**
 * FileName: UserVO
 * Author: Laritte
 * Date: 2023/4/29 17:53:37
 * Description:
 * Version: 1.0.0
 */
package com.laritte.server.vo;

import com.laritte.server.entity.User;
import io.swagger.annotations.ApiModel;
import lombok.Data;

import java.io.Serializable;
@Data
@ApiModel(value = "UserVO对象", description = "")
public class UserVO {
	private static final long serialVersionUID = 1L;
	private String username;
	private String uid;
	public UserVO(User user) {
		this.username = user.getUsername();
		this.uid = user.getUid();
	}
	public Serializable pkVal() {
		return this.uid;
	}
}
