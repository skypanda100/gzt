/**
 * Created by Administrator on 2017/6/5.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import Snackbar from 'material-ui/Snackbar';
import DateTimeUtil from '../../../utils/DateTimeUtil';

const items = [];
items.push(<MenuItem value={0} key={0} primaryText={`GaoGe`} />);
items.push(<MenuItem value={1} key={1} primaryText={`ZhengDongTian`} />);

const paperStyle = {
    height: '100%',
    width: '40%',
    marginLeft: '30%',
    marginRight: '30%',
    padding: 20,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

class SaveData extends Component {

    constructor () {
        super();
    }

    handleTouchTap = (msg) => {
        this.setState({
            messageOpen: true,
            message: msg,
        });
    };

    handleRequestClose = () => {
        this.setState({
            messageOpen: false,
        });
    };

    handleChange = (event, index, value) => {
        this.setState({value});
    };

    sleepHandleBlur = (event) => {
        let sleepDate = this.sleepDate.getDate();
        let hhmm = event.target.value;
        if(typeof(hhmm) == "undefined" || hhmm == ""){
            return;
        }
        if(typeof(sleepDate) == "undefined"){
            this.handleTouchTap("please set value into SleepDate");
            return;
        }
        event.target.value = this.formatDate(sleepDate, hhmm);
    };

    deepSleepHandleBlur = (event) => {
        let sleepDate = this.sleepDate.getDate();
        let hhmm = event.target.value;
        if(typeof(hhmm) == "undefined" || hhmm == ""){
            return;
        }
        if(typeof(sleepDate) == "undefined"){
            this.handleTouchTap("please set value into SleepDate");
            return;
        }
        event.target.value = this.formatDate(sleepDate, hhmm);
    };

    awakeHandleBlur = (event) => {
        let sleepDate = this.sleepDate.getDate();
        let hhmm = event.target.value;
        if(typeof(hhmm) == "undefined" || hhmm == ""){
            return;
        }
        if(typeof(sleepDate) == "undefined"){
            this.handleTouchTap("please set value into SleepDate");
            return;
        }
        event.target.value = this.formatDate(sleepDate, hhmm);
    };

    formatDate = (sleepDate, hhmm) => {
        let sleepDateStr = DateTimeUtil.Date2String(sleepDate, "yyyy-MM-dd 00:00:00");
        sleepDate = DateTimeUtil.String2Date(sleepDateStr);

        let minutesFull = 24 * 60;
        let minutesStd = 18 * 60;
        let hour = parseInt(hhmm.substr(0, 2));
        let minute = parseInt(hhmm.substr(2, 2));
        let minutes = hour * 60 + minute;
        if(minutes >= minutesStd){
            sleepDate = DateTimeUtil.AddSeconds(sleepDate, -(minutesFull - minutes) * 60);
        }else{
            sleepDate = DateTimeUtil.AddSeconds(sleepDate, minutes * 60);
        }
        sleepDateStr = DateTimeUtil.Date2String(sleepDate, "yyyy-MM-dd hh:mm");

        return sleepDateStr;
    }

    state = {
        personValue: 0,
        message:"",
        messageOpen:false,
    };

    render () {
        return (
        <div style={{textAlign:'center'}}>
            <h2>Save sleep data into PostgreSQL</h2>
            <br/>
            <Paper style={paperStyle} zDepth={1}>
                <div >
                    <SelectField
                        ref={(input) => { this.person = input; }}
                        value={this.state.personValue}
                        onChange={this.handleChange}
                        floatingLabelText="Person"
                        floatingLabelFixed={true}
                    >
                        {items}
                    </SelectField>
                    <DatePicker
                        ref={(input) => { this.sleepDate = input; }}
                        container="inline"
                        mode="landscape"
                        floatingLabelText="SleepDate"
                        floatingLabelFixed={true}
                        hintText="yyyy-MM-dd"
                        autoOk={true}
                    />
                    <div>
                        <TextField
                            ref={(input) => { this.sleepStart = input; }}
                            floatingLabelText="Sleep Start"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.sleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.sleepEnd = input; }}
                            floatingLabelText="Sleep End"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.sleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart01 = input; }}
                            floatingLabelText="Deep Sleep Start"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd01 = input; }}
                            floatingLabelText="Deep Sleep End"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart02 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd02 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart03 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd03 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart04 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd04 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart05 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd05 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart06 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd06 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart07 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd07 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart08 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd08 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart09 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd09 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.deepSleepStart10 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.deepSleepEnd10 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.awakeStart01 = input; }}
                            floatingLabelText="Awake Start"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.awakeEnd01 = input; }}
                            floatingLabelText="Awake End"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.awakeStart02 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.awakeEnd02 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.awakeStart03 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.awakeEnd03 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                        />
                    </div>
                    <div>
                        <TextField
                            ref={(input) => { this.awakeStart04 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            ref={(input) => { this.awakeEnd04 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                        />
                    </div>
                    <div>
                        <RaisedButton label="Clear" primary={true} style={{width:'46%',margin:'2%'}}/>
                        <RaisedButton label="Save" secondary={true}  style={{width:'46%',margin:'2%'}} />
                    </div>
                </div>
            </Paper>
            <Snackbar
                ref={(input) => { this.message = input; }}
                open={this.state.messageOpen}
                message={this.state.message}
                autoHideDuration={3000}
                onRequestClose={this.handleRequestClose}
            />
        </div>
        )
    }
}

export default withWidth()(SaveData);
