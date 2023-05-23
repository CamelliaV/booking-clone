package com.laritte.server.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.laritte.server.service.DetailimageService;
import com.laritte.server.entity.DetailImage;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author laritte
 * @since 2023-04-29
 */
@Controller
@RequestMapping("/detail-image")
public class DetailimageController {


    @Autowired
    private DetailimageService detailimageService;

    @GetMapping(value = "/")
    public ResponseEntity<Page<DetailImage>> list(@RequestParam(required = false) Integer current, @RequestParam(required = false) Integer pageSize) {
        if (current == null) {
            current = 1;
        }
        if (pageSize == null) {
            pageSize = 10;
        }
        Page<DetailImage> aPage = detailimageService.page(new Page<>(current, pageSize));
        return new ResponseEntity<>(aPage, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<DetailImage> getById(@PathVariable("id") String id) {
        return new ResponseEntity<>(detailimageService.getById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<Object> create(@RequestBody DetailImage params) {
        detailimageService.save(params);
        return new ResponseEntity<>("created successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        detailimageService.removeById(id);
        return new ResponseEntity<>("deleted successfully", HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<Object> update(@RequestBody DetailImage params) {
        detailimageService.updateById(params);
        return new ResponseEntity<>("updated successfully", HttpStatus.OK);
    }
}
