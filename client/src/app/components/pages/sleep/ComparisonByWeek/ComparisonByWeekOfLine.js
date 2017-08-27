/**
 * Created by Administrator on 2017/6/4.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import echarts from "echarts";
import 'whatwg-fetch';

class ComparisonByWeekOfLine extends Component {

    constructor () {
        super();
    }

    post(postData, dispatch) {
        fetch('http://' + g_hostname + '/sleep/comparison_by_week/comparison_by_week_of_line.php', {
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
        var date_r;
        var gg_deep_r;
        var gg_shallow_r;
        var zdt_deep_r;
        var zdt_shallow_r;
        if(data.isSuccess){
            var data_r_r = data.message;
            date_r = data_r_r.date_week;
            gg_deep_r = data_r_r.gg_deep_week;
            gg_shallow_r = data_r_r.gg_shallow_week;
            zdt_deep_r = data_r_r.zdt_deep_week;
            zdt_shallow_r = data_r_r.zdt_shallow_week;
        }

        var chart = echarts.init(document.getElementById('line'));

        var option = {
            title : {
                text: '',
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params){
                    return params[0].name + '<br/>'
                        + params[0].seriesName + ' : ' + (params[0].value).toFixed(2) + '<br/>'
                        + params[1].seriesName + ' : ' + (params[1].value).toFixed(2) + '<br/>'
                        + params[2].seriesName + ' : ' + (params[2].value).toFixed(2) + '<br/>'
                        + params[3].seriesName + ' : ' + (params[3].value).toFixed(2);
                }
            },
            legend: {
                x: 'right',
                data:['gg deep','gg shallow','zdt deep','zdt shallow']
            },
            dataZoom : {
                show : true,
                realtime : true,
                start : 40,
                end : 100
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : date_r
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'gg deep',
                    type:'bar',
                    stack: 'gg',
                    data:gg_deep_r
                },
                {
                    name:'gg shallow',
                    type:'bar',
                    stack: 'gg',
                    data:gg_shallow_r
                },
                {
                    name:'zdt deep',
                    type:'bar',
                    stack: 'zdt',
                    data:zdt_deep_r
                },
                {
                    name:'zdt shallow',
                    type:'bar',
                    stack: 'zdt',
                    data:zdt_shallow_r
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
            <div id='line' style={{width:'100%',height:'300px'}}>
            </div>
        )
    }
}

export default withWidth()(ComparisonByWeekOfLine);
