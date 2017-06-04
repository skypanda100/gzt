/**
 * Created by Administrator on 2017/6/4.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';


import echarts from "echarts";
import {options} from './options';


class ComparisonByDay extends Component {

    constructor () {
        super();
    }
    //组件加载后调用的hook函数
    componentDidMount() {
        echarts.init(document.getElementById("test")).setOption(options, true);
    }

    render () {
        return (
            <div id='test' style={{width:'600px',height:'600px'}}>
            </div>
        )
    }
}

export default withWidth()(ComparisonByDay);
