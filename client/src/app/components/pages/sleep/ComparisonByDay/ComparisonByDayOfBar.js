/**
 * Created by Administrator on 2017/6/4.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import echarts from "echarts";
import 'whatwg-fetch';

class ComparisonByDayOfBar extends Component {

    constructor () {
        super();
    }

    post(postData, dispatch) {
        fetch('http://' + g_hostname + '/sleep/comparison_by_day/comparison_by_day_of_bar.php', {
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
        /*fetch('/day.json')
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
            });*/
    }

    draw(data){
        var date;
        var gg_deep;
        var gg_shallow;
        var zdt_deep;
        var zdt_shallow;
        if(data.isSuccess){
            var data_r = data.message;
            date = data_r.date_day[data_r.date_day.length - 1];
            gg_deep = data_r.gg_deep_day[data_r.gg_deep_day.length - 1];
            gg_shallow = data_r.gg_shallow_day[data_r.gg_shallow_day.length - 1];
            zdt_deep = data_r.zdt_deep_day[data_r.zdt_deep_day.length - 1];
            zdt_shallow = data_r.zdt_shallow_day[data_r.zdt_shallow_day.length - 1];
        }

        var chart = echarts.init(document.getElementById('bar'));

        var option = {
            title: {
                text: '',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    // for text color
                    var res = '<strong>' + params[0].name + '</strong>'
                    for (var i = 0, l = params.length; i < l; i++) {
                        res += '<br/>' + params[i].seriesName + ' : ' + params[i].value.toFixed(2)
                    }
                    res += '</div>';
                    return res;
                }
            },
            legend: {
                x: 'right',
                data:['GG','ZDT']
            },
            toolbox: {
                show: false,
                orient: 'vertical',
                y: 'center',
                feature: {
                    mark: {show: true},
                }
            },
            calculable: true,
            grid: {
                y: 50,
                y2: 25,
                x2: 6
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['SUM', 'DEEP']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'GG',
                    type: 'bar',
                    data: [gg_deep + gg_shallow, gg_deep]
                },
                {
                    name: 'ZDT',
                    type: 'bar',
                    data: [zdt_deep + zdt_shallow, zdt_deep]
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
            <div id='bar' style={{width:'100%',height:'300px'}}>
            </div>
        )
    }
}

export default withWidth()(ComparisonByDayOfBar);
