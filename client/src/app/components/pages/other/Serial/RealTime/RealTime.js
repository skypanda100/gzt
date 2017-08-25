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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import SvgIcon from 'material-ui/SvgIcon';
import ActionGrade from 'material-ui/svg-icons/action/grade';

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

const paperStyle02 = {
    height: '80%',
    width: '350px',
    padding: 0,
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign:'top',
};

const floatingButtonStyle = {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
};

const StarIcon = (props) => (
    <SvgIcon {...props}>
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
    </SvgIcon>
);

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

class ChartRealTime extends Component {
    static propTypes = {
        visible: false,
    };

    constructor () {
        super();
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

    render () {
        return (
            <div style={{display:(this.props.visible ? 'block' : 'none')}}>
                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="pm25_realtime" style={{width:paperStyle01.width,height:paperStyle01.height}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="co2_realtime" style={{width:paperStyle01.width,height:paperStyle01.height}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="hcho_realtime" style={{width:paperStyle01.width,height:paperStyle01.height}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="temp_realtime" style={{width:paperStyle01.width,height:paperStyle01.height}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="humidity_realtime" style={{width:paperStyle01.width,height:paperStyle01.height}}>

                    </div>
                </Paper>
            </div>
        )
    }
}

class TextRealTime extends Component {
    static propTypes = {
        visible: true,
    };

    state = {
        tempGrade: 0,
        humidityGrade: 0,
        pm25Grade: 0,
        co2Grade: 0,
        hchoGrade: 0,
    };

    constructor () {
        super();
    }

    draw_realtime(){
        if(temp < 10 || temp > 30){
            this.setState({
               tempGrade: 0,
            });
        }else if(temp < 12 || temp > 29){
            this.setState({
                tempGrade: 1,
            });
        }else if(temp < 14 || temp > 28){
            this.setState({
                tempGrade: 2,
            });
        }else if(temp < 16 || temp > 26){
            this.setState({
                tempGrade: 3,
            });
        }else if(temp < 18 || temp > 25){
            this.setState({
                tempGrade: 4,
            });
        }else{
            this.setState({
                tempGrade: 5,
            });
        }

        if(humidity < 10 || humidity > 75){
            this.setState({
                humidityGrade: 0,
            });
        }else if(humidity < 20 || humidity > 72){
            this.setState({
                humidityGrade: 1,
            });
        }else if(humidity < 30 || humidity > 69){
            this.setState({
                humidityGrade: 2,
            });
        }else if(humidity < 35 || humidity > 66){
            this.setState({
                humidityGrade: 3,
            });
        }else if(humidity < 40 || humidity > 63){
            this.setState({
                humidityGrade: 4,
            });
        }else{
            this.setState({
                humidityGrade: 5,
            });
        }

        if(co2 < 250 || co2 >= 2000){
            this.setState({
                co2Grade: 0,
            });
        }else if(co2 >= 1500 && co2 < 2000){
            this.setState({
                co2Grade: 1,
            });
        }else if(co2 >= 1300 && co2 < 1500){
            this.setState({
                co2Grade: 2,
            });
        }else if(co2 >= 1000 && co2 < 1300){
            this.setState({
                co2Grade: 3,
            });
        }else if(co2 >= 350 && co2 < 1000){
            this.setState({
                co2Grade: 4,
            });
        }else{
            this.setState({
                co2Grade: 5,
            });
        }

        if(pm25 >= 250){
            this.setState({
                pm25Grade: 0,
            });
        }else if(pm25 >= 150 && pm25 < 250){
            this.setState({
                pm25Grade: 1,
            });
        }else if(pm25 >= 115 && pm25 < 150){
            this.setState({
                pm25Grade: 2,
            });
        }else if(pm25 >= 75 && pm25 < 115){
            this.setState({
                pm25Grade: 3,
            });
        }else if(pm25 >= 35 && pm25 < 75){
            this.setState({
                pm25Grade: 4,
            });
        }else{
            this.setState({
                pm25Grade: 5,
            });
        }

        if(hcho >= 0.08){
            this.setState({
                hchoGrade: 0,
            });
        }else if(hcho >= 0.07){
            this.setState({
                hchoGrade: 1,
            });
        }else if(hcho >= 0.06){
            this.setState({
                hchoGrade: 2,
            });
        }else if(hcho >= 0.05){
            this.setState({
                hchoGrade: 3,
            });
        }else if(hcho >= 0.04){
            this.setState({
                hchoGrade: 4,
            });
        }else{
            this.setState({
                hchoGrade: 5,
            });
        }

        this.temperatureLabel.innerHTML = temp;
        this.humidityLabel.innerHTML = humidity;
        this.pm25Label.innerHTML = pm25;
        this.co2Label.innerHTML = co2;
        this.hchoLabel.innerHTML = hcho;
    }

    render () {
        return (
            <div style={{display:(this.props.visible ? 'block' : 'none'),textAlign: 'center'}}>
                <Paper
                    style={paperStyle02}
                    zDepth={0}
                >
                    <div id="text_realtime" style={{width:'100%',height:'100%'}}>
                        <h2 style={{textAlign:'center'}}>Indoor Air Quality</h2>
                        <table border="0" width="100%">
                            <col align="left" width="40%"/>
                            <col align="left"  width="20%"/>
                            <col align="left"  width="40%"/>
                            <tr height="70px">
                                <td>
                                    <p style={{textAlign:'left',fontSize:18}} >
                                        temp(℃)
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:'left',fontSize:25}} ref={(input) => { this.temperatureLabel = input; }}>
                                    </p>
                                </td>
                                <td>
                                    <ActionGrade color={1 <= this.state.tempGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={2 <= this.state.tempGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={3 <= this.state.tempGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={4 <= this.state.tempGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={5 <= this.state.tempGrade ? '#B82525' : ''}/>
                                </td>
                            </tr>
                            <tr height="70px">
                                <td>
                                    <p style={{textAlign:'left',fontSize:18}} >
                                        humidity(%)
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:'left',fontSize:25}} ref={(input) => { this.humidityLabel = input; }}>
                                    </p>
                                </td>
                                <td>
                                    <ActionGrade color={1 <= this.state.humidityGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={2 <= this.state.humidityGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={3 <= this.state.humidityGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={4 <= this.state.humidityGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={5 <= this.state.humidityGrade ? '#B82525' : ''}/>
                                </td>
                            </tr>
                            <tr height="70px">
                                <td>
                                    <p style={{textAlign:'left',fontSize:18}} >
                                        pm2.5(AQI)
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:'left',fontSize:25}} ref={(input) => { this.pm25Label = input; }}>
                                    </p>
                                </td>
                                <td>
                                    <ActionGrade color={1 <= this.state.pm25Grade ? '#B82525' : ''}/>
                                    <ActionGrade color={2 <= this.state.pm25Grade ? '#B82525' : ''}/>
                                    <ActionGrade color={3 <= this.state.pm25Grade ? '#B82525' : ''}/>
                                    <ActionGrade color={4 <= this.state.pm25Grade ? '#B82525' : ''}/>
                                    <ActionGrade color={5 <= this.state.pm25Grade ? '#B82525' : ''}/>
                                </td>
                            </tr>
                            <tr height="70px">
                                <td>
                                    <p style={{textAlign:'left',fontSize:18}} >
                                        co2(PPM)
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:'left',fontSize:25}} ref={(input) => { this.co2Label = input; }}>
                                    </p>
                                </td>
                                <td>
                                    <ActionGrade color={1 <= this.state.co2Grade ? '#B82525' : ''}/>
                                    <ActionGrade color={2 <= this.state.co2Grade ? '#B82525' : ''}/>
                                    <ActionGrade color={3 <= this.state.co2Grade ? '#B82525' : ''}/>
                                    <ActionGrade color={4 <= this.state.co2Grade ? '#B82525' : ''}/>
                                    <ActionGrade color={5 <= this.state.co2Grade ? '#B82525' : ''}/>
                                </td>
                            </tr>
                            <tr height="70px">
                                <td>
                                    <p style={{textAlign:'left',fontSize:18}} >
                                        hcho(mg/m3)
                                    </p>
                                </td>
                                <td>
                                    <p style={{textAlign:'left',fontSize:25}} ref={(input) => { this.hchoLabel = input; }}>
                                    </p>
                                </td>
                                <td>
                                    <ActionGrade color={1 <= this.state.hchoGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={2 <= this.state.hchoGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={3 <= this.state.hchoGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={4 <= this.state.hchoGrade ? '#B82525' : ''}/>
                                    <ActionGrade color={5 <= this.state.hchoGrade ? '#B82525' : ''}/>
                                </td>
                            </tr>
                        </table>
                        <br/>
                    </div>
                </Paper>
            </div>
        )
    }
}

class RealTime extends Component {

    constructor () {
        super();
    }

    state = {
        isText: true,
    };

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
        thisObj.textRealTime.draw_realtime();
        thisObj.chartRealTime.draw_realtime();
    }

    connect(){
        //uid
        let uid = Date.parse(new Date());
        // 连接服务端
        let socket = io('http://' + g_domain + ':6003');
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

    redoHandler = (event) => {
        this.setState({
            isText: !this.state.isText,
        });
    }

    render () {
        return (
            <div>
                <TextRealTime
                    ref={(input) => { this.textRealTime = input; }}
                    visible={this.state.isText}/>
                <ChartRealTime
                    ref={(input) => { this.chartRealTime = input; }}
                    visible={!this.state.isText}/>
                <FloatingActionButton
                    style={floatingButtonStyle}
                    onTouchTap={this.redoHandler}
                >
                    <ContentRedo/>
                </FloatingActionButton>
            </div>
        )
    }
}

export default withWidth()(RealTime);
