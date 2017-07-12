/**
 * Created by Administrator on 2017/7/12.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';


const mapStyle = {
    height: '100%',
    left: '256px',
    right: '0px',
    position:'absolute'
};

class Riding extends Component {
    componentDidMount () {
        var BMap = window.BMap;//取出window中的BMap对象
        var map = new BMap.Map("allmap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }

    render () {
        return (
                <div
                    id='allmap'
                    style={mapStyle} />
        )
    }
}

export default withWidth()(Riding);
