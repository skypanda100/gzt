/**
 * Created by Administrator on 2017/6/4.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const paperStyle01 = {
    height: '100%',
    width: '49%',
    marginLeft: '0%',
    marginRight: '1%',
    marginBottom: '0%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const paperStyle02 = {
    height: '100%',
    width: '49%',
    marginLeft: '1%',
    marginRight: '0%',
    marginBottom: '0%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

class ComparisonBySumOfData extends Component {

    constructor () {
        super();
    }

    post(postData, dispatch) {
        fetch('http://192.168.1.3:8765/gzt/server/sleep/comparison_by_week/comparison_by_week_of_bar.php', {
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
            date = data_r.date_week[data_r.date_week.length - 1];
            gg_deep = data_r.gg_deep_week[data_r.gg_deep_week.length - 1];
            gg_shallow = data_r.gg_shallow_week[data_r.gg_shallow_week.length - 1];
            zdt_deep = data_r.zdt_deep_week[data_r.zdt_deep_week.length - 1];
            zdt_shallow = data_r.zdt_shallow_week[data_r.zdt_shallow_week.length - 1];
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
            <div
                style={{textAlign:'center'}}
            >
                <Paper
                    style={paperStyle01}
                    zDepth={1}
                >
                    <div>
                        <img
                            src="images/gzt_calendar.jpg"
                            width="150px"
                            height="150px"
                        />
                        <div
                            style={{marginLeft: '1%',display: 'inline-block'}}
                        >
                            <p style={{fontSize:25}} ref={(input) => { this.ggSleepLabel = input; }}>gg's sleep days in db:20</p>
                        </div>
                        <Table>
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                            >
                                <TableRow>
                                    <TableHeaderColumn>Type</TableHeaderColumn>
                                    <TableHeaderColumn>Total</TableHeaderColumn>
                                    <TableHeaderColumn>Average</TableHeaderColumn>
                                    <TableHeaderColumn>Number of days</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={false}
                            >
                                <TableRow>
                                    <TableRowColumn>Deep Sleep</TableRowColumn>
                                    <TableRowColumn>5</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>2.5</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Sleep</TableRowColumn>
                                    <TableRowColumn>5</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>2.5</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Paper>
                <Paper
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div>
                        <img
                            src="images/gzt_calendar.jpg"
                            width="150px"
                            height="150px"
                        />
                        <div
                            style={{marginLeft: '1%',display: 'inline-block'}}
                        >
                            <p style={{fontSize:25}} ref={(input) => { this.zdtSleepLabel = input; }}>zdt's sleep days in db:20</p>
                        </div>
                        <Table>
                            <TableHeader
                                displaySelectAll={false}
                                adjustForCheckbox={false}
                            >
                                <TableRow>
                                    <TableHeaderColumn>Type</TableHeaderColumn>
                                    <TableHeaderColumn>Total</TableHeaderColumn>
                                    <TableHeaderColumn>Average</TableHeaderColumn>
                                    <TableHeaderColumn>Number of days</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={false}
                            >
                                <TableRow>
                                    <TableRowColumn>Deep Sleep</TableRowColumn>
                                    <TableRowColumn>5</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>2.5</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>Sleep</TableRowColumn>
                                    <TableRowColumn>5</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>2.5</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Paper>

            </div>
        )
    }
}

export default withWidth()(ComparisonBySumOfData);
