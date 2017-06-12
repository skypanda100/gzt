/**
 * Created by Administrator on 2017/6/4.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import echarts from "echarts";
import 'whatwg-fetch';

class ComparisonByMonthOfPie extends Component {

    constructor () {
        super();
    }

    post(postData, dispatch) {
        fetch('http://192.168.1.3:8765/gzt/server/sleep/comparison_by_month/comparison_by_month_of_pie.php', {
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

        var chart = echarts.init(document.getElementById('pie'));

        var option = {
            title : {
                text: '',
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : ({d}%)",
            },
            legend: {
                x: 'right',
                data:['gg shallow', 'gg deep', 'zdt deep', 'zdt shallow']
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                }
            },
            calculable : true,
            series : [
                {
                    name:'',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:gg_shallow, name:'gg shallow'},
                        {value:gg_deep, name:'gg deep'},
                        {value:zdt_deep, name:'zdt deep'},
                        {value:zdt_shallow, name:'zdt shallow'},
                    ]
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
            <div id='pie' style={{width:'100%',height:'300px'}}>
            </div>
        )
    }
}

export default withWidth()(ComparisonByMonthOfPie);
