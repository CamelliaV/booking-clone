package com.laritte.server.service.impl;

import com.laritte.server.entity.User;
import com.laritte.server.mapper.UserMapper;
import com.laritte.server.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author laritte
 * @since 2023-04-29
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
