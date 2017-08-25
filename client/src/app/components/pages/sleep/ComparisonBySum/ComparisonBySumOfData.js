/**
 * Created by Administrator on 2017/6/4.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import Paper from 'material-ui/Paper';
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

var ggSleepDayInDb;
var ggDeepTotal;
var ggDeepAverage;
var ggDeepDay;
var ggSleepTotal;
var ggSleepAverage;
var ggSleepDay;
var zdtSleepDayInDb;
var zdtDeepTotal;
var zdtDeepAverage;
var zdtDeepDay;
var zdtSleepTotal;
var zdtSleepAverage;
var zdtSleepDay;

class ComparisonBySumOfData extends Component {

    constructor () {
        super();
    }

    post(postData, dispatch) {
        fetch('http://' + g_hostname + '/server/sleep/comparison_by_sum/comparison_by_sum.php', {
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
        let gg_day = 0;
        let gg_deep_average = 0;
        let gg_deep_total = 0;
        let gg_deep_day = 0;
        let gg_sleep_average = 0;
        let gg_sleep_total = 0;
        let gg_sleep_day = 0;
        let zdt_day = 0;
        let zdt_deep_average = 0;
        let zdt_deep_total = 0;
        let zdt_deep_day = 0;
        let zdt_sleep_average = 0;
        let zdt_sleep_total = 0;
        let zdt_sleep_day = 0;

        if(data.isSuccess){
            let data_r = data.message;
            gg_day = data_r.gg_day;
            gg_deep_average = data_r.gg_deep_average.toFixed(2);
            gg_deep_total = data_r.gg_deep_total.toFixed(2);
            gg_deep_day = data_r.gg_deep_day.toFixed(2);
            gg_sleep_average = data_r.gg_sleep_average.toFixed(2);
            gg_sleep_total = data_r.gg_sleep_total.toFixed(2);
            gg_sleep_day = data_r.gg_sleep_day.toFixed(2);
            zdt_day = data_r.zdt_day;
            zdt_deep_average = data_r.zdt_deep_average.toFixed(2);
            zdt_deep_total = data_r.zdt_deep_total.toFixed(2);
            zdt_deep_day = data_r.zdt_deep_day.toFixed(2);
            zdt_sleep_average = data_r.zdt_sleep_average.toFixed(2);
            zdt_sleep_total = data_r.zdt_sleep_total.toFixed(2);
            zdt_sleep_day = data_r.zdt_sleep_day.toFixed(2);

            ggSleepDayInDb.innerHTML = gg_day + " days";
            ggDeepTotal.innerHTML = gg_deep_total;
            ggDeepAverage.innerHTML = gg_deep_average;
            ggDeepDay.innerHTML = gg_deep_day;
            ggSleepTotal.innerHTML = gg_sleep_total;
            ggSleepAverage.innerHTML = gg_sleep_average;
            ggSleepDay.innerHTML = gg_sleep_day;
            zdtSleepDayInDb.innerHTML = zdt_day + " days";
            zdtDeepTotal.innerHTML = zdt_deep_total;
            zdtDeepAverage.innerHTML = zdt_deep_average;
            zdtDeepDay.innerHTML = zdt_deep_day;
            zdtSleepTotal.innerHTML = zdt_sleep_total;
            zdtSleepAverage.innerHTML = zdt_sleep_average;
            zdtSleepDay.innerHTML = zdt_sleep_day;
        }
    }

    componentDidMount() {
        ggSleepDayInDb = this.ggSleepDayInDb;
        ggDeepTotal = this.ggDeepTotal;
        ggDeepAverage = this.ggDeepAverage;
        ggDeepDay = this.ggDeepDay;
        ggSleepTotal = this.ggSleepTotal;
        ggSleepAverage = this.ggSleepAverage;
        ggSleepDay = this.ggSleepDay;
        zdtSleepDayInDb = this.zdtSleepDayInDb;
        zdtDeepTotal = this.zdtDeepTotal;
        zdtDeepAverage = this.zdtDeepAverage;
        zdtDeepDay = this.zdtDeepDay;
        zdtSleepTotal = this.zdtSleepTotal;
        zdtSleepAverage = this.zdtSleepAverage;
        zdtSleepDay = this.zdtSleepDay;

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
                        <div
                            style={{display: 'inline-block',float:'left'}}
                        >
                            <img
                                src="images/gzt_gg.jpg"
                                width="150px"
                                height="150px"
                            />
                        </div>
                        <div
                            style={{display: 'inline-block',float:'left',verticalAlign:'middle',marginLeft:'5%'}}
                        >
                            <p style={{fontSize:45}} ref={(input) => { this.ggSleepDayInDb = input; }}>0 days</p>
                        </div>
                        <div
                            style={{display: 'inline-block'}}
                        >
                            <Table>
                                <TableHeader
                                    displaySelectAll={false}
                                    adjustForCheckbox={false}
                                >
                                    <TableRow>
                                        <TableHeaderColumn>Type</TableHeaderColumn>
                                        <TableHeaderColumn>Total(hour)</TableHeaderColumn>
                                        <TableHeaderColumn>Average(hour)</TableHeaderColumn>
                                        <TableHeaderColumn>Days(day)</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={false}
                                >
                                    <TableRow>
                                        <TableRowColumn>Deep Sleep</TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.ggDeepTotal = input; }}></div>
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.ggDeepAverage = input; }}></div>
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.ggDeepDay = input; }}></div>
                                        </TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Sleep</TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.ggSleepTotal = input; }}></div>
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.ggSleepAverage = input; }}></div>
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.ggSleepDay = input; }}></div>
                                        </TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </Paper>
                <Paper
                    style={paperStyle02}
                    zDepth={1}
                >
                    <div>
                        <div
                            style={{display: 'inline-block',float:'left'}}
                        >
                            <img
                                src="images/gzt_zdt.jpg"
                                width="150px"
                                height="150px"
                            />
                        </div>
                        <div
                            style={{display: 'inline-block',float:'left',verticalAlign:'middle',marginLeft:'5%'}}
                        >
                            <p style={{fontSize:45}} ref={(input) => { this.zdtSleepDayInDb = input; }}>0 days</p>
                        </div>
                        <div
                            style={{display: 'inline-block'}}
                        >
                            <Table>
                                <TableHeader
                                    displaySelectAll={false}
                                    adjustForCheckbox={false}
                                >
                                    <TableRow>
                                        <TableHeaderColumn>Type</TableHeaderColumn>
                                        <TableHeaderColumn>Total(hour)</TableHeaderColumn>
                                        <TableHeaderColumn>Average(hour)</TableHeaderColumn>
                                        <TableHeaderColumn>Days(day)</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody
                                    displayRowCheckbox={false}
                                >
                                    <TableRow>
                                        <TableRowColumn>Deep Sleep</TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.zdtDeepTotal = input; }}></div>
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.zdtDeepAverage = input; }}></div>
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.zdtDeepDay = input; }}></div>
                                        </TableRowColumn>
                                    </TableRow>
                                    <TableRow>
                                        <TableRowColumn>Sleep</TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.zdtSleepTotal = input; }}></div>
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.zdtSleepAverage = input; }}></div>
                                        </TableRowColumn>
                                        <TableRowColumn>
                                            <div ref={(input) => { this.zdtSleepDay = input; }}></div>
                                        </TableRowColumn>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </Paper>

            </div>
        )
    }
}

export default withWidth()(ComparisonBySumOfData);
