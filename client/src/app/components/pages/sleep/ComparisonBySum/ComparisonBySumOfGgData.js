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

var ggSleepDayInDb;
var ggDeepTotal;
var ggDeepAverage;
var ggDeepDay;
var ggSleepTotal;
var ggSleepAverage;
var ggSleepDay;

class ComparisonBySumOfGgData extends Component {

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
        let gg_day = 0;
        let gg_deep_average = 0;
        let gg_deep_total = 0;
        let gg_deep_day = 0;
        let gg_sleep_average = 0;
        let gg_sleep_total = 0;
        let gg_sleep_day = 0;

        if(data.isSuccess){
            let data_r = data.message;
            gg_day = data_r.gg_day;
            gg_deep_average = data_r.gg_deep_average.toFixed(2);
            gg_deep_total = data_r.gg_deep_total.toFixed(2);
            gg_deep_day = data_r.gg_deep_day.toFixed(2);
            gg_sleep_average = data_r.gg_sleep_average.toFixed(2);
            gg_sleep_total = data_r.gg_sleep_total.toFixed(2);
            gg_sleep_day = data_r.gg_sleep_day.toFixed(2);

            ggSleepDayInDb.innerHTML = gg_day + " days";
            ggDeepTotal.innerHTML = gg_deep_total;
            ggDeepAverage.innerHTML = gg_deep_average;
            ggDeepDay.innerHTML = gg_deep_day;
            ggSleepTotal.innerHTML = gg_sleep_total;
            ggSleepAverage.innerHTML = gg_sleep_average;
            ggSleepDay.innerHTML = gg_sleep_day;
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

        this.post('', this.draw);
    }

    render () {
        return (
            <div style={{padding: '5px'}}>
                <div
                    style={{float:'left'}}
                >
                    <img
                        src="images/gzt_gg.jpg"
                        width="100px"
                        height="25%"
                    />
                </div>
                <div
                    style={{float:'left',verticalAlign:'middle',marginLeft:'5%'}}
                >
                    <p style={{fontSize:25}} ref={(input) => { this.ggSleepDayInDb = input; }}>0 days</p>
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
        )
    }
}

export default withWidth()(ComparisonBySumOfGgData);
