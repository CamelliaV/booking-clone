package com.laritte.server.service.impl;

import com.laritte.server.entity.Info;
import com.laritte.server.mapper.InfoMapper;
import com.laritte.server.service.InfoService;
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
public class InfoServiceImpl extends ServiceImpl<InfoMapper, Info> implements InfoService {

}
