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

const paperStyle02 = {
    height: '280px',
    width: '100%',
    marginLeft: '0%',
    marginRight: '0%',
    marginBottom: '1%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};
var count = 5 * 12 * 60 * 3;
var datetime_r = new Array();
var temp_r = new Array();
var humidity_r = new Array();
var pm25_r = new Array();
var co2_r = new Array();
var hcho_r = new Array();
var thisObj = null;
var temp_realtime_6hr_chart = null;
var humidity_realtime_6hr_chart = null;
var pm25_realtime_6hr_chart = null;
var co2_realtime_6hr_chart = null;
var hcho_realtime_6hr_chart = null;

class History extends Component {

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
        this.draw_realtime_6hr();
    }

    draw_realtime_6hr(){
        //温度
        if(temp_realtime_6hr_chart == null){
            temp_realtime_6hr_chart = echarts.init(document.getElementById('temp_realtime_6hr'));
        }
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
        if(humidity_realtime_6hr_chart == null){
            humidity_realtime_6hr_chart = echarts.init(document.getElementById('humidity_realtime_6hr'));
        }
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
        if(pm25_realtime_6hr_chart == null){
            pm25_realtime_6hr_chart = echarts.init(document.getElementById('pm25_realtime_6hr'));
        }
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
        if(co2_realtime_6hr_chart == null){
            co2_realtime_6hr_chart = echarts.init(document.getElementById('co2_realtime_6hr'));
        }
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
        if(hcho_realtime_6hr_chart == null){
            hcho_realtime_6hr_chart = echarts.init(document.getElementById('hcho_realtime_6hr'));
        }
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

    componentWillUnmount() {
        datetime_r = new Array();
        temp_r = new Array();
        humidity_r = new Array();
        pm25_r = new Array();
        co2_r = new Array();
        hcho_r = new Array();
        thisObj = null;
        temp_realtime_6hr_chart = null;
        humidity_realtime_6hr_chart = null;
        pm25_realtime_6hr_chart = null;
        co2_realtime_6hr_chart = null;
        hcho_realtime_6hr_chart = null;
    }

    render () {
        return (
            <div>
                <Paper
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div id="temp_realtime_6hr" style={{width:'100%',height:'100%'}}>

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
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div id="pm25_realtime_6hr" style={{width:'100%',height:'100%'}}>

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

export default withWidth()(History);
