/**
 * Created by Administrator on 2017/6/4.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import echarts from "echarts";
import 'whatwg-fetch';

class ComparisonByMonthOfTemperature extends Component {

    constructor () {
        super();
    }

    post(postData, dispatch) {
        fetch('http://' + g_hostname + '/server/sleep/comparison_by_month/comparison_by_month_of_temperature.php', {
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

    draw(data){
        var date;
        var gg_deep;
        var gg_shallow;
        var zdt_deep;
        var zdt_shallow;
        if(data.isSuccess){
            var data_r = data.message;
            date = data_r.date_month[data_r.date_month.length - 1];
            gg_deep = data_r.gg_deep_month[data_r.gg_deep_month.length - 1];
            gg_shallow = data_r.gg_shallow_month[data_r.gg_shallow_month.length - 1];
            zdt_deep = data_r.zdt_deep_month[data_r.zdt_deep_month.length - 1];
            zdt_shallow = data_r.zdt_shallow_month[data_r.zdt_shallow_month.length - 1];
        }

        var chart = echarts.init(document.getElementById('temperature'));

        var option = {
            title : {
                text: '',
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                },
                formatter: function (params){
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + (params[1].value + params[0].value).toFixed(2) + '<br/>'
                        + params[1].seriesName + ' : ' + (params[1].value).toFixed(2);
                }
            },
            legend: {
                x: 'right',
                data:['sum', 'shallow']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['GG','ZDT']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    boundaryGap: [0, 0.05]
                }
            ],
            series : [
                {
                    name:'sum',
                    type:'bar',
                    stack: 'sum',
                    barCategoryGap: '60%',
                    itemStyle: {
                        normal: {
                            color: '#D32F2F',
                            barBorderColor: '#D32F2F',
                            barBorderWidth: 2,
                            barBorderRadius:0,
                            label : {
                                show: true, position: 'insideTop',
                                formatter: function (params) {
                                    for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                                        if (option.xAxis[0].data[i] == params.name) {
                                            return (option.series[0].data[i]).toFixed(2);
                                        }
                                    }
                                },
                            }
                        }
                    },
                    data:[gg_deep, zdt_deep]
                },
                {
                    name:'shallow',
                    type:'bar',
                    stack: 'sum',
                    itemStyle: {
                        normal: {
                            color: '#EF9A9A',
                            barBorderColor: '#D32F2F',
                            barBorderWidth: 6,
                            barBorderRadius:0,
                            label : {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: 'tomato'
                                },
                                formatter: function (params) {
                                    for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                                        if (option.xAxis[0].data[i] == params.name) {
                                            return (option.series[0].data[i] + params.value).toFixed(2);
                                        }
                                    }
                                },
                            }
                        }
                    },
                    data:[gg_shallow, zdt_shallow]
                }
            ]
        };

        chart.setOption(option);
    }

    componentDidMount() {
        this.post('', this.draw);
    }

    render () {
        return (
            <div id='temperature' style={{width:'100%',height:'300px'}}>
            </div>
        )
    }
}

export default withWidth()(ComparisonByMonthOfTemperature);
