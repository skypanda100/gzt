/**
 * Created by Administrator on 2017/6/4.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

var zdtSleepDayInDb;
var zdtDeepTotal;
var zdtDeepAverage;
var zdtDeepDay;
var zdtSleepTotal;
var zdtSleepAverage;
var zdtSleepDay;

class ComparisonBySumOfZdtData extends Component {

    constructor () {
        super();
    }

    post(postData, dispatch) {
        fetch('http://' + g_hostname + '/sleep/comparison_by_sum/comparison_by_sum.php', {
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
        let zdt_day = 0;
        let zdt_deep_average = 0;
        let zdt_deep_total = 0;
        let zdt_deep_day = 0;
        let zdt_sleep_average = 0;
        let zdt_sleep_total = 0;
        let zdt_sleep_day = 0;

        if(data.isSuccess){
            let data_r = data.message;
            zdt_day = data_r.zdt_day;
            zdt_deep_average = data_r.zdt_deep_average.toFixed(2);
            zdt_deep_total = data_r.zdt_deep_total.toFixed(2);
            zdt_deep_day = data_r.zdt_deep_day.toFixed(2);
            zdt_sleep_average = data_r.zdt_sleep_average.toFixed(2);
            zdt_sleep_total = data_r.zdt_sleep_total.toFixed(2);
            zdt_sleep_day = data_r.zdt_sleep_day.toFixed(2);

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
            <div style={{padding: '5px'}}>
                <div
                    style={{float:'left'}}
                >
                    <img
                        src="images/gzt_zdt.jpg"
                        width="100px"
                        height="25%"
                    />
                </div>
                <div
                    style={{float:'left',verticalAlign:'middle',marginLeft:'5%'}}
                >
                    <p style={{fontSize:25}} ref={(input) => { this.zdtSleepDayInDb = input; }}>0 days</p>
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
                                <TableHeaderColumn>Total</TableHeaderColumn>
                                <TableHeaderColumn>Average</TableHeaderColumn>
                                <TableHeaderColumn>Days</TableHeaderColumn>
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
        )
    }
}

export default withWidth()(ComparisonBySumOfZdtData);
