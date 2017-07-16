/**
 * Created by Administrator on 2017/7/12.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import echarts from "echarts";
import 'whatwg-fetch';
import io from 'socket.io-client';
import Paper from 'material-ui/Paper';
import DateTimeUtil from '../../../../utils/DateTimeUtil';

const paperStyle01 = {
    height: '300px',
    width: '300px',
    marginLeft: '0%',
    marginRight: '1%',
    marginBottom: '1%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

var datetime = null;
var temp = null;
var humidity = null;
var pm25 = null;
var co2 = null;
var hcho = null;
var thisObj = null;
var temp_realtime_chart = null;
var humidity_realtime_chart = null;
var pm25_realtime_chart = null;
var co2_realtime_chart = null;
var hcho_realtime_chart = null;

class RealTime extends Component {

    constructor () {
        super();
    }

    receive(msg){
        let data_r = msg.split(",");
        datetime = DateTimeUtil.Date2String(new Date(), "yyyy-MM-dd hh:mm:ss");
        temp = data_r[4];
        humidity = data_r[5];
        pm25 = data_r[1];
        co2 = data_r[0];
        hcho = data_r[3];
        this.draw_realtime();
    }

    draw_realtime(){
        //PM2.5
        if(pm25_realtime_chart == null){
            pm25_realtime_chart = echarts.init(document.getElementById('pm25_realtime'));
        }
        option = {
            title : {
                text: 'pm2.5'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            toolbox: {
                show: false,
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'pm2.5',
                    type: 'gauge',
                    startAngle: 140,
                    endAngle : -140,
                    min: 0,                     // 最小值
                    max: 500,                   // 最大值
                    axisLine: {            // 坐标轴线
                        show: true,        // 默认显示，属性show控制显示与否
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#89D6EF'],[0.6, '#00BCD4'],[0.8, '#EFD689'],[1, '#ff4500']],
                            width: 30
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show: true,
                        formatter: function(v){
                            switch (v+''){
                                case '0': return '0';
                                case '100': return '100';
                                case '200': return '200';
                                case '300': return '300';
                                case '400': return '400';
                                case '500': return '500';
                                default: return '';
                            }
                        },
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#333'
                        }
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :30,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: '#eee',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    /*title : {
                        show : true,
                        offsetCenter: ['-60%', -15],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#333',
                            fontSize : 15
                        }
                    },*/
                    detail : {
                        show : true,
                        offsetCenter: ['-60%', 0],
                        formatter:'{value}',
                        textStyle: {
                            color: 'auto',
                            fontSize : 30
                        }
                    },
                    data: [{value: pm25, name: ''}]
                }
            ]
        };
        pm25_realtime_chart.setOption(option);

        //co2
        if(co2_realtime_chart == null){
            co2_realtime_chart = echarts.init(document.getElementById('co2_realtime'));
        }
        option = {
            title : {
                text: 'co2'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            toolbox: {
                show: false,
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'co2',
                    type: 'gauge',
                    startAngle: 140,
                    endAngle : -140,
                    min: 0,                     // 最小值
                    max: 2000,                   // 最大值
                    axisLine: {            // 坐标轴线
                        show: true,        // 默认显示，属性show控制显示与否
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#89D6EF'],[0.6, '#00BCD4'],[0.8, '#EFD689'],[1, '#ff4500']],
                            width: 30
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show: true,
                        formatter: function(v){
                            switch (v+''){
                                case '0': return '0';
                                case '400': return '400';
                                case '800': return '800';
                                case '1200': return '1200';
                                case '1600': return '1600';
                                case '2000': return '2000';
                                default: return '';
                            }
                        },
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#333'
                        }
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :30,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: '#eee',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    /*title : {
                        show : true,
                        offsetCenter: ['-60%', -15],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#333',
                            fontSize : 15
                        }
                    },*/
                    detail : {
                        show : true,
                        offsetCenter: ['-60%', 0],
                        formatter:'{value}',
                        textStyle: {
                            color: 'auto',
                            fontSize : 30
                        }
                    },
                    data: [{value: co2, name: ''}]
                }
            ]
        };
        co2_realtime_chart.setOption(option);

        //hcho
        if(hcho_realtime_chart == null){
            hcho_realtime_chart = echarts.init(document.getElementById('hcho_realtime'));
        }
        option = {
            title : {
                text: 'hcho'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            toolbox: {
                show: false,
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'hcho',
                    type: 'gauge',
                    startAngle: 140,
                    endAngle : -140,
                    min: 0,                     // 最小值
                    max: 1,                   // 最大值
                    axisLine: {            // 坐标轴线
                        show: true,        // 默认显示，属性show控制显示与否
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#89D6EF'],[0.6, '#00BCD4'],[0.8, '#EFD689'],[1, '#ff4500']],
                            width: 30
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show: true,
                        formatter: function(v){
                            switch (v+''){
                                case '0': return '0';
                                case '0.2': return '0.2';
                                case '0.4': return '0.4';
                                case '0.6': return '0.6';
                                case '0.8': return '0.8';
                                case '1': return '1.0';
                                default: return '';
                            }
                        },
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#333'
                        }
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :30,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: '#eee',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    /*title : {
                        show : true,
                        offsetCenter: ['-60%', -15],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#333',
                            fontSize : 15
                        }
                    },*/
                    detail : {
                        show : true,
                        offsetCenter: ['-60%', 0],
                        formatter:'{value}',
                        textStyle: {
                            color: 'auto',
                            fontSize : 30
                        }
                    },
                    data: [{value: hcho, name: ''}]
                }
            ]
        };
        hcho_realtime_chart.setOption(option);

        //温度
        if(temp_realtime_chart == null){
            temp_realtime_chart = echarts.init(document.getElementById('temp_realtime'));
        }
        let option = {
            title : {
                text: 'temperature'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            toolbox: {
                show: false,
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'temperature',
                    type: 'gauge',
                    startAngle: 140,
                    endAngle : -140,
                    min: -10,                     // 最小值
                    max: 40,                   // 最大值
                    axisLine: {            // 坐标轴线
                        show: true,        // 默认显示，属性show控制显示与否
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#89D6EF'],[0.6, '#00BCD4'],[0.8, '#EFD689'],[1, '#ff4500']],
                            width: 30
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show: true,
                        formatter: function(v){
                            switch (v+''){
                                case '-10': return '-10';
                                case '0': return '0';
                                case '10': return '10';
                                case '20': return '20';
                                case '30': return '30';
                                case '40': return '40';
                                default: return '';
                            }
                        },
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#333'
                        }
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :30,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: '#eee',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    /*title : {
                     show : true,
                     offsetCenter: ['-60%', -15],       // x, y，单位px
                     textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                     color: '#333',
                     fontSize : 15
                     }
                     },*/
                    detail : {
                        show : true,
                        offsetCenter: ['-60%', 0],       // x, y，单位px
                        formatter:'{value}℃',
                        textStyle: {
                            color: 'auto',
                            fontSize : 30
                        }
                    },
                    data: [{value: temp, name: ''}]
                }
            ]
        };
        temp_realtime_chart.setOption(option);

        //湿度
        if(humidity_realtime_chart == null){
            humidity_realtime_chart = echarts.init(document.getElementById('humidity_realtime'));
        }
        option = {
            title : {
                text: 'humidity'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}"
            },
            toolbox: {
                show: false,
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: 'humidity',
                    type: 'gauge',
                    startAngle: 140,
                    endAngle : -140,
                    min: 0,                     // 最小值
                    max: 100,                   // 最大值
                    axisLine: {            // 坐标轴线
                        show: true,        // 默认显示，属性show控制显示与否
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, '#89D6EF'],[0.6, '#00BCD4'],[0.8, '#EFD689'],[1, '#ff4500']],
                            width: 30
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show: true,
                        formatter: function(v){
                            switch (v+''){
                                case '0': return '0';
                                case '20': return '20';
                                case '40': return '40';
                                case '60': return '60';
                                case '80': return '80';
                                case '100': return '100';
                                default: return '';
                            }
                        },
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: '#333'
                        }
                    },
                    splitLine: {           // 分隔线
                        show: true,        // 默认显示，属性show控制显示与否
                        length :30,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: '#eee',
                            width: 2,
                            type: 'solid'
                        }
                    },
                    /*title : {
                     show : true,
                     offsetCenter: ['-60%', -15],       // x, y，单位px
                     textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                     color: '#333',
                     fontSize : 15
                     }
                     },*/
                    detail : {
                        show : true,
                        offsetCenter: ['-60%', 0],       // x, y，单位px
                        formatter:'{value}%',
                        textStyle: {
                            color: 'auto',
                            fontSize : 30
                        }
                    },
                    data: [{value: humidity, name: ''}]
                }
            ]
        };
        humidity_realtime_chart.setOption(option);

    }

    connect(){
        //uid
        let uid = Date.parse(new Date());
        // 连接服务端
        let socket = io('http://192.168.1.3:2120');
        // 连接后登录
        socket.on('connect', function(){
            socket.emit('login', uid);
        });
        // 后端推送来消息时
        socket.on('new_msg', function(msg){
            thisObj.receive(msg);
        });
    }

    componentDidMount() {
        thisObj = this;
        this.connect();
    }

    componentWillUnmount() {
        datetime = null;
        temp = null;
        humidity = null;
        pm25 = null;
        co2 = null;
        hcho = null;
        thisObj = null;
        temp_realtime_chart = null;
        humidity_realtime_chart = null;
        pm25_realtime_chart = null;
        co2_realtime_chart = null;
        hcho_realtime_chart = null;
    }

    render () {
        return (
            <div>
                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="pm25_realtime" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="co2_realtime" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="hcho_realtime" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="temp_realtime" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="humidity_realtime" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>

            </div>
        )
    }
}

export default withWidth()(RealTime);
