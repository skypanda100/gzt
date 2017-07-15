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
    height: '280px',
    width: '30%',
    marginLeft: '0%',
    marginRight: '1%',
    marginBottom: '1%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const paperStyle02 = {
    height: '280px',
    width: '69%',
    marginLeft: '0%',
    marginRight: '0%',
    marginBottom: '0%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};
var count = 5 * 12 * 60 * 6;
var datetime_r = new Array();
var temp_r = new Array();
var humidity_r = new Array();
var pm25_r = new Array();
var co2_r = new Array();
var hcho_r = new Array();
var thisObj = null;
var temp_realtime_chart = null;
var humidity_realtime_chart = null;
var pm25_realtime_chart = null;
var co2_realtime_chart = null;
var hcho_realtime_chart = null;
var temp_realtime_6hr_chart = null;
var humidity_realtime_6hr_chart = null;
var pm25_realtime_6hr_chart = null;
var co2_realtime_6hr_chart = null;
var hcho_realtime_6hr_chart = null;

class RealTime extends Component {

    constructor () {
        super();
    }

    post(postData, dispatch) {
        fetch('http://192.168.1.3:8765/gzt/server/other/serial/serial_query.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: postData
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    message: json,
                    isSuccess: true
                });
            })
            .catch((err) => {
                dispatch({
                    message: err.message,
                    isSuccess: false
                });
            });
    }

    query(data){
        if(data.isSuccess){
            let data_r = data.message;
            datetime_r = data_r.datetime;
            temp_r = data_r.temp;
            humidity_r = data_r.humidity;
            pm25_r = data_r.pm25;
            co2_r = data_r.co2;
            hcho_r = data_r.hcho;

            thisObj.draw_realtime();
            thisObj.draw_realtime_6hr();
        }else{
            alert(data.message);
        }
    }

    receive(msg){
        let data_r = msg.split(",");
        let datetime = DateTimeUtil.Date2String(new Date(), "yyyy-MM-dd hh:mm:ss");
        let temp = data_r[4];
        let humidity = data_r[5];
        let pm25 = data_r[1];
        let co2 = data_r[0];
        let hcho = data_r[3];
        datetime_r.push(datetime);
        temp_r.push(temp);
        humidity_r.push(humidity);
        pm25_r.push(pm25);
        co2_r.push(co2);
        hcho_r.push(hcho);
        if(datetime_r.length >= count){
            datetime_r.shift();
            temp_r.shift();
            humidity_r.shift();
            pm25_r.shift();
            co2_r.shift();
            hcho_r.shift();
        }
        this.draw_realtime();
        this.draw_realtime_6hr();
    }

    draw_realtime(){
        //温度
        temp_realtime_chart = echarts.init(document.getElementById('temp_realtime'));
        let option = {
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
                    data: [{value: temp_r[temp_r.length - 1], name: ''}]
                }
            ]
        };
        temp_realtime_chart.setOption(option);

        //湿度
        humidity_realtime_chart = echarts.init(document.getElementById('humidity_realtime'));
        option = {
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
                    data: [{value: humidity_r[humidity_r.length - 1], name: ''}]
                }
            ]
        };
        humidity_realtime_chart.setOption(option);

        //PM2.5
        pm25_realtime_chart = echarts.init(document.getElementById('pm25_realtime'));
        option = {
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
                    data: [{value: pm25_r[pm25_r.length - 1], name: ''}]
                }
            ]
        };
        pm25_realtime_chart.setOption(option);

        //co2
        co2_realtime_chart = echarts.init(document.getElementById('co2_realtime'));
        option = {
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
                    name: 'CO2',
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
                    data: [{value: co2_r[co2_r.length - 1], name: ''}]
                }
            ]
        };
        co2_realtime_chart.setOption(option);

        //hcho
        hcho_realtime_chart = echarts.init(document.getElementById('hcho_realtime'));
        option = {
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
                    name: 'HCHO',
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
                    data: [{value: hcho_r[hcho_r.length - 1], name: ''}]
                }
            ]
        };
        hcho_realtime_chart.setOption(option);
    }

    draw_realtime_6hr(){
        //温度
        temp_realtime_6hr_chart = echarts.init(document.getElementById('temp_realtime_6hr'));
        let option = {
            title : {
                text: 'temperature'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['temperature']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : datetime_r
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}°C'
                    }
                }
            ],
            series : [
                {
                    name:'temperature',
                    type:'line',
                    data:temp_r,
                    markPoint : {
                        data : [
                            {type : 'max', name: 'max'},
                            {type : 'min', name: 'min'}
                        ]
                    },
                    /*markLine : {
                        data : [
                            {type : 'average', name: 'average'}
                        ]
                    }*/
                }
            ]
        };
        temp_realtime_6hr_chart.setOption(option);

        //湿度
        humidity_realtime_6hr_chart = echarts.init(document.getElementById('humidity_realtime_6hr'));
        option = {
            title : {
                text: 'humidity'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['humidity']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : datetime_r
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}%'
                    }
                }
            ],
            series : [
                {
                    name:'humidity',
                    type:'line',
                    data:humidity_r,
                    markPoint : {
                        data : [
                            {type : 'max', name: 'max'},
                            {type : 'min', name: 'min'}
                        ]
                    },
                    /*markLine : {
                     data : [
                     {type : 'average', name: 'average'}
                     ]
                     }*/
                }
            ]
        };
        humidity_realtime_6hr_chart.setOption(option);

        //pm2.5
        pm25_realtime_6hr_chart = echarts.init(document.getElementById('pm25_realtime_6hr'));
        option = {
            title : {
                text: 'pm2.5'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['pm2.5']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : datetime_r
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}'
                    }
                }
            ],
            series : [
                {
                    name:'pm2.5',
                    type:'line',
                    data:pm25_r,
                    markPoint : {
                        data : [
                            {type : 'max', name: 'max'},
                            {type : 'min', name: 'min'}
                        ]
                    },
                    /*markLine : {
                     data : [
                     {type : 'average', name: 'average'}
                     ]
                     }*/
                }
            ]
        };
        pm25_realtime_6hr_chart.setOption(option);

        //co2
        co2_realtime_6hr_chart = echarts.init(document.getElementById('co2_realtime_6hr'));
        option = {
            title : {
                text: 'co2'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['co2']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : datetime_r
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}'
                    }
                }
            ],
            series : [
                {
                    name:'co2',
                    type:'line',
                    data:co2_r,
                    smooth:true,
                    markPoint : {
                        data : [
                            {type : 'max', name: 'max'},
                            {type : 'min', name: 'min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {name: 'standard', xAxis: 1, yAxis: 1000}
                        ]
                    }
                }
            ]
        };
        co2_realtime_6hr_chart.setOption(option);

        //hcho
        hcho_realtime_6hr_chart = echarts.init(document.getElementById('hcho_realtime_6hr'));
        option = {
            title : {
                text: 'hcho'
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['hcho']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : datetime_r
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}'
                    }
                }
            ],
            series : [
                {
                    name:'hcho',
                    type:'line',
                    data:hcho_r,
                    smooth:true,
                    markPoint : {
                        data : [
                            {type : 'max', name: 'max'},
                            {type : 'min', name: 'min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {name: 'standard', xAxis: 1, yAxis: 0.08}
                        ]
                    }
                }
            ]
        };
        hcho_realtime_6hr_chart.setOption(option);
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
        this.post('', this.query);
    }

    render () {
        return (
            <div>
                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="temp_realtime" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>
                <Paper
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div id="temp_realtime_6hr" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="humidity_realtime" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>
                <Paper
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div id="humidity_realtime_6hr" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>

                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div id="pm25_realtime" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>
                <Paper
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div id="pm25_realtime_6hr" style={{width:'100%',height:'100%'}}>

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
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div id="co2_realtime_6hr" style={{width:'100%',height:'100%'}}>

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
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div id="hcho_realtime_6hr" style={{width:'100%',height:'100%'}}>

                    </div>
                </Paper>
            </div>
        )
    }
}

export default withWidth()(RealTime);
