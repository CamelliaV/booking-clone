package com.laritte.server.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author laritte
 * @since 2023-04-29
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("booking_hotel.hotel_detail")
@ApiModel(value = "Detail对象", description = "")
public class Detail extends Model<Detail> {

    private static final long serialVersionUID = 1L;
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;
    private String hotelName;
    private String province;
    private String district;
    private String address;
    private Object score;
    private Integer numImages;
    private Integer rating;

    @Override
    public Serializable pkVal() {
        return this.id;
    }
}
