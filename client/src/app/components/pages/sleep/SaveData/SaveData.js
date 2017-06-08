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
import Divider from 'material-ui/Divider';

const items = [];
items.push(<MenuItem value={0} key={0} primaryText={`GaoGe`} />);
items.push(<MenuItem value={1} key={1} primaryText={`ZhengDongTian`} />);

const paperStyle = {
    height: '100%',
    width: '40%',
    marginLeft: '0%',
    marginRight: '10%',
    padding: 0,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

class SaveData extends Component {

    constructor () {
        super();
    }

    state = {
        personValue: 0,
        message:"",
        messageOpen:false,
    };

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
        if(hhmm.length == 4){
            event.target.value = this.formatDate(sleepDate, hhmm);
        }
        this.calculateTime();
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
        if(hhmm.length == 4){
            event.target.value = this.formatDate(sleepDate, hhmm);
        }
        this.calculateTime();
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
        if(hhmm.length == 4){
            event.target.value = this.formatDate(sleepDate, hhmm);
        }
        this.calculateTime();
    };

    clearHandle = (event) => {
    }

    saveHandle = (event) => {
    }

    calculateTime = () => {
        let sleepLabel = this.sleepLabel;
        let deepSleepLabel = this.deepSleepLabel;
        let awakeLabel = this.awakeLabel;
        let sleepTime = 0;
        let deepSleepTime = 0;
        let awakeTime = 0;

        if(this.sleepStart.getValue() != "" && this.sleepEnd.getValue() != ""){
            let sleepStart = DateTimeUtil.String2Date(this.sleepStart.getValue());
            let sleepEnd = DateTimeUtil.String2Date(this.sleepEnd.getValue());
            sleepTime = parseInt((sleepEnd - sleepStart) / 1000 / 60);
        }

        if(this.deepSleepStart01.getValue() != "" && this.deepSleepEnd01.getValue() != "") {
            let deepSleepStart01 = DateTimeUtil.String2Date(this.deepSleepStart01.getValue());
            let deepSleepEnd01 = DateTimeUtil.String2Date(this.deepSleepEnd01.getValue());
            deepSleepTime += parseInt((deepSleepStart01 - deepSleepEnd01) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart02.getValue() != "" && this.deepSleepEnd02.getValue() != "") {
            let deepSleepStart02 = DateTimeUtil.String2Date(this.deepSleepStart02.getValue());
            let deepSleepEnd02 = DateTimeUtil.String2Date(this.deepSleepEnd02.getValue());
            deepSleepTime += parseInt((deepSleepStart02 - deepSleepEnd02) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart03.getValue() != "" && this.deepSleepEnd03.getValue() != "") {
            let deepSleepStart03 = DateTimeUtil.String2Date(this.deepSleepStart03.getValue());
            let deepSleepEnd03 = DateTimeUtil.String2Date(this.deepSleepEnd03.getValue());
            deepSleepTime += parseInt((deepSleepStart03 - deepSleepEnd03) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart04.getValue() != "" && this.deepSleepEnd04.getValue() != "") {
            let deepSleepStart04 = DateTimeUtil.String2Date(this.deepSleepStart04.getValue());
            let deepSleepEnd04 = DateTimeUtil.String2Date(this.deepSleepEnd04.getValue());
            deepSleepTime += parseInt((deepSleepStart04 - deepSleepEnd04) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart05.getValue() != "" && this.deepSleepEnd05.getValue() != "") {
            let deepSleepStart05 = DateTimeUtil.String2Date(this.deepSleepStart05.getValue());
            let deepSleepEnd05 = DateTimeUtil.String2Date(this.deepSleepEnd05.getValue());
            deepSleepTime += parseInt((deepSleepStart05 - deepSleepEnd05) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart06.getValue() != "" && this.deepSleepEnd06.getValue() != "") {
            let deepSleepStart06 = DateTimeUtil.String2Date(this.deepSleepStart06.getValue());
            let deepSleepEnd06 = DateTimeUtil.String2Date(this.deepSleepEnd06.getValue());
            deepSleepTime += parseInt((deepSleepStart06 - deepSleepEnd06) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart07.getValue() != "" && this.deepSleepEnd07.getValue() != "") {
            let deepSleepStart07 = DateTimeUtil.String2Date(this.deepSleepStart07.getValue());
            let deepSleepEnd07 = DateTimeUtil.String2Date(this.deepSleepEnd07.getValue());
            deepSleepTime += parseInt((deepSleepStart07 - deepSleepEnd07) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart08.getValue() != "" && this.deepSleepEnd08.getValue() != "") {
            let deepSleepStart08 = DateTimeUtil.String2Date(this.deepSleepStart08.getValue());
            let deepSleepEnd08 = DateTimeUtil.String2Date(this.deepSleepEnd08.getValue());
            deepSleepTime += parseInt((deepSleepStart08 - deepSleepEnd08) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart09.getValue() != "" && this.deepSleepEnd09.getValue() != "") {
            let deepSleepStart09 = DateTimeUtil.String2Date(this.deepSleepStart09.getValue());
            let deepSleepEnd09 = DateTimeUtil.String2Date(this.deepSleepEnd09.getValue());
            deepSleepTime += parseInt((deepSleepStart09 - deepSleepEnd09) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart10.getValue() != "" && this.deepSleepEnd10.getValue() != "") {
            let deepSleepStart10 = DateTimeUtil.String2Date(this.deepSleepStart10.getValue());
            let deepSleepEnd10 = DateTimeUtil.String2Date(this.deepSleepEnd10.getValue());
            deepSleepTime += parseInt((deepSleepStart10 - deepSleepEnd10) / 1000 / 60) + 1;
        }

        if(this.awakeStart01.getValue() != "" && this.awakeEnd01.getValue() != "") {
            let awakeStart01 = DateTimeUtil.String2Date(this.awakeStart01.getValue());
            let awakeEnd01 = DateTimeUtil.String2Date(this.awakeEnd01.getValue());
            awakeTime += parseInt((awakeEnd01 - awakeStart01) / 1000 / 60) + 1;
        }

        if(this.awakeStart02.getValue() != "" && this.awakeEnd02.getValue() != "") {
            let awakeStart02 = DateTimeUtil.String2Date(this.awakeStart02.getValue());
            let awakeEnd02 = DateTimeUtil.String2Date(this.awakeEnd02.getValue());
            awakeTime += parseInt((awakeEnd02 - awakeStart02) / 1000 / 60) + 1;
        }

        if(this.awakeStart03.getValue() != "" && this.awakeEnd03.getValue() != "") {
            let awakeStart03 = DateTimeUtil.String2Date(this.awakeStart03.getValue());
            let awakeEnd03 = DateTimeUtil.String2Date(this.awakeEnd03.getValue());
            awakeTime += parseInt((awakeEnd03 - awakeStart03) / 1000 / 60) + 1;
        }

        if(this.awakeStart04.getValue() != "" && this.awakeEnd04.getValue() != "") {
            let awakeStart04 = DateTimeUtil.String2Date(this.awakeStart04.getValue());
            let awakeEnd04 = DateTimeUtil.String2Date(this.awakeEnd04.getValue());
            awakeTime += parseInt((awakeEnd04 - awakeStart04) / 1000 / 60) + 1;
        }

        sleepTime = sleepTime - awakeTime;

        let sleepTimeHour = parseInt(sleepTime / 60);
        let sleepTimeMinute = sleepTime % 60;
        let deepSleepTimeHour = parseInt(deepSleepTime / 60);
        let deepSleepTimeMinute = deepSleepTime % 60;
        let awakeTimeHour = parseInt(awakeTime / 60);
        let awakeTimeMinute = awakeTime % 60;
        sleepLabel.innerHTML = sleepTimeHour + " hours " + sleepTimeMinute + " minutes";
        deepSleepLabel.innerHTML = deepSleepTimeHour + " hours " + deepSleepTimeMinute + " minutes";
        awakeLabel.innerHTML = awakeTimeHour + " hours " + awakeTimeMinute + " minutes";
    }

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

    render () {
        return (
        <div style={{textAlign:'left'}}>
            <h2>Save sleep data into PostgreSQL</h2>
            <br/>
            <Paper style={paperStyle} zDepth={0}>
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
                        <RaisedButton
                            label="Clear"
                            primary={true}
                            style={{width:'46%',margin:'2%'}}
                            onTouchTap={this.clearHandle}
                        />
                        <RaisedButton
                            label="Save"
                            secondary={true}
                            style={{width:'46%',margin:'2%'}}
                            onTouchTap={this.saveHandle}
                        />
                    </div>
                </div>
            </Paper>
            <Paper style={paperStyle} zDepth={0}>
                <div>
                    <h3>Sleep Time</h3>
                    <p style={{fontSize:25}} ref={(input) => { this.sleepLabel = input; }}>0 hours 0 minutes</p>
                    <Divider inset={false} />
                    <br/><br/>
                    <h3>Deep Sleep Time</h3>
                    <p style={{fontSize:25}} ref={(input) => { this.deepSleepLabel = input; }}>0 hours 0 minutes</p>
                    <Divider inset={false} />
                    <br/><br/>
                    <h3>Awake Time</h3>
                    <p style={{fontSize:25}} ref={(input) => { this.awakeLabel = input; }}>0 hours 0 minutes</p>
                    <Divider inset={false} />
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
