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
import Snackbar from 'material-ui/Snackbar';
import DateTimeUtil from '../../../utils/DateTimeUtil';
import CommonUtil from '../../../utils/CommonUtil';
import Divider from 'material-ui/Divider';
import 'whatwg-fetch';

const items = [];
items.push(<MenuItem value={0} key={0} primaryText={`GaoGe`} />);
items.push(<MenuItem value={1} key={1} primaryText={`ZhengDongTian`} />);

const paperStyle01 = {
    height: '100%',
    width: '55%',
    marginLeft: '0%',
    marginRight: '2%',
    padding: 0,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const paperStyle02 = {
    height: '100%',
    width: '43%',
    marginLeft: '0%',
    marginRight: '0%',
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
        message:"",
        messageOpen:false,
        personValue: 0,
        sleepDate: new Date(),
        sleepStart:"",
        sleepEnd:"",
        deepSleepStart01:"",
        deepSleepEnd01:"",
        deepSleepStart02:"",
        deepSleepEnd02:"",
        deepSleepStart03:"",
        deepSleepEnd03:"",
        deepSleepStart04:"",
        deepSleepEnd04:"",
        deepSleepStart05:"",
        deepSleepEnd05:"",
        deepSleepStart06:"",
        deepSleepEnd06:"",
        deepSleepStart07:"",
        deepSleepEnd07:"",
        deepSleepStart08:"",
        deepSleepEnd08:"",
        deepSleepStart09:"",
        deepSleepEnd09:"",
        deepSleepStart10:"",
        deepSleepEnd10:"",
        awakeStart01:"",
        awakeEnd01:"",
        awakeStart02:"",
        awakeEnd02:"",
        awakeStart03:"",
        awakeEnd03:"",
        awakeStart04:"",
        awakeEnd04:"",
    };

    tfHandleChange = (event) => {
        let value = event.target.value;
        if (event.target.id == "sleepStart") {
            this.setState({
                sleepStart: value,
            });
        } else if (event.target.id == "sleepEnd") {
            this.setState({
                sleepEnd: value,
            });
        } else if (event.target.id == "deepSleepStart01") {
            this.setState({
                deepSleepStart01: value,
            });
        } else if (event.target.id == "deepSleepEnd01") {
            this.setState({
                deepSleepEnd01: value,
            });
        } else if(event.target.id == "deepSleepStart02"){
            this.setState({
                deepSleepStart02: value,
            });
        } else if (event.target.id == "deepSleepEnd02") {
            this.setState({
                deepSleepEnd02: value,
            });
        } else if (event.target.id == "deepSleepStart03") {
            this.setState({
                deepSleepStart03: value,
            });
        } else if (event.target.id == "deepSleepEnd03") {
            this.setState({
                deepSleepEnd03: value,
            });
        } else if(event.target.id == "deepSleepStart04"){
            this.setState({
                deepSleepStart04: value,
            });
        } else if (event.target.id == "deepSleepEnd04") {
            this.setState({
                deepSleepEnd04: value,
            });
        } else if (event.target.id == "deepSleepStart05") {
            this.setState({
                deepSleepStart05: value,
            });
        } else if (event.target.id == "deepSleepEnd05") {
            this.setState({
                deepSleepEnd05: value,
            });
        } else if(event.target.id == "deepSleepStart06"){
            this.setState({
                deepSleepStart06: value,
            });
        } else if (event.target.id == "deepSleepEnd06") {
            this.setState({
                deepSleepEnd06: value,
            });
        } else if (event.target.id == "deepSleepStart07") {
            this.setState({
                deepSleepStart07: value,
            });
        } else if (event.target.id == "deepSleepEnd07") {
            this.setState({
                deepSleepEnd07: value,
            });
        } else if(event.target.id == "deepSleepStart08"){
            this.setState({
                deepSleepStart08: value,
            });
        } else if (event.target.id == "deepSleepEnd08") {
            this.setState({
                deepSleepEnd08: value,
            });
        } else if (event.target.id == "deepSleepStart09") {
            this.setState({
                deepSleepStart09: value,
            });
        } else if (event.target.id == "deepSleepEnd09") {
            this.setState({
                deepSleepEnd09: value,
            });
        } else if(event.target.id == "deepSleepStart10"){
            this.setState({
                deepSleepStart10: value,
            });
        } else if (event.target.id == "deepSleepEnd10") {
            this.setState({
                deepSleepEnd10: value,
            });
        } else if (event.target.id == "awakeStart01") {
            this.setState({
                awakeStart01: value,
            });
        } else if (event.target.id == "awakeEnd01") {
            this.setState({
                awakeEnd01: value,
            });
        } else if(event.target.id == "awakeStart02"){
            this.setState({
                awakeStart02: value,
            });
        } else if (event.target.id == "awakeEnd02") {
            this.setState({
                awakeEnd02: value,
            });
        } else if (event.target.id == "awakeStart03") {
            this.setState({
                awakeStart03: value,
            });
        } else if (event.target.id == "awakeEnd03") {
            this.setState({
                awakeEnd03: value,
            });
        } else if(event.target.id == "awakeStart04"){
            this.setState({
                awakeStart04: value,
            });
        } else if (event.target.id == "awakeEnd04") {
            this.setState({
                awakeEnd04: value,
            });
        }
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

    slcHandleChange = (event, index, value) => {
        this.setState({
            personValue:value
        });
    };

    pickerHandleChange = (event, date) => {
        this.setState({
            sleepDate:date
        });
    }

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
        if(hhmm.length == 3){
            hhmm = "0" + hhmm;
        }
        if(hhmm.length == 4){
            this.setState({
                [event.target.id] : this.formatDate(sleepDate, hhmm),
            }, function () {
                this.calculateTime();
            });
        }
        if(hhmm.length == 16){
            this.calculateTime();
        }
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
        if(hhmm.length == 3){
            hhmm = "0" + hhmm;
        }
        if(hhmm.length == 4){
            this.setState({
                [event.target.id] : this.formatDate(sleepDate, hhmm),
            }, function(){
                this.calculateTime();
            });
        }
        if(hhmm.length == 16){
            this.calculateTime();
        }
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
        if(hhmm.length == 3){
            hhmm = "0" + hhmm;
        }
        if(hhmm.length == 4){
            this.setState({
                [event.target.id] : this.formatDate(sleepDate, hhmm),
            }, function(){
                this.calculateTime();
            });
        }
        if(hhmm.length == 16){
            this.calculateTime();
        }
    };

    clearHandle = (event) => {
        this.setState({
            sleepStart:"",
            sleepEnd:"",
            deepSleepStart01:"",
            deepSleepEnd01:"",
            deepSleepStart02:"",
            deepSleepEnd02:"",
            deepSleepStart03:"",
            deepSleepEnd03:"",
            deepSleepStart04:"",
            deepSleepEnd04:"",
            deepSleepStart05:"",
            deepSleepEnd05:"",
            deepSleepStart06:"",
            deepSleepEnd06:"",
            deepSleepStart07:"",
            deepSleepEnd07:"",
            deepSleepStart08:"",
            deepSleepEnd08:"",
            deepSleepStart09:"",
            deepSleepEnd09:"",
            deepSleepStart10:"",
            deepSleepEnd10:"",
            awakeStart01:"",
            awakeEnd01:"",
            awakeStart02:"",
            awakeEnd02:"",
            awakeStart03:"",
            awakeEnd03:"",
            awakeStart04:"",
            awakeEnd04:"",
        });
    }

    makeFormData = () =>{
        let postData = new FormData();
        postData.append("person", this.state.personValue);
        postData.append("sleepDate", DateTimeUtil.Date2String(this.state.sleepDate, "yyyy-MM-dd"));
        postData.append("sleepStart", CommonUtil.trim(this.state.sleepStart));
        postData.append("sleepEnd", CommonUtil.trim(this.state.sleepEnd));
        postData.append("deepSleepStart01", CommonUtil.trim(this.state.deepSleepStart01));
        postData.append("deepSleepEnd01", CommonUtil.trim(this.state.deepSleepEnd01));
        postData.append("deepSleepStart02", CommonUtil.trim(this.state.deepSleepStart02));
        postData.append("deepSleepEnd02", CommonUtil.trim(this.state.deepSleepEnd02));
        postData.append("deepSleepStart03", CommonUtil.trim(this.state.deepSleepStart03));
        postData.append("deepSleepEnd03", CommonUtil.trim(this.state.deepSleepEnd03));
        postData.append("deepSleepStart04", CommonUtil.trim(this.state.deepSleepStart04));
        postData.append("deepSleepEnd04", CommonUtil.trim(this.state.deepSleepEnd04));
        postData.append("deepSleepStart05", CommonUtil.trim(this.state.deepSleepStart05));
        postData.append("deepSleepEnd05", CommonUtil.trim(this.state.deepSleepEnd05));
        postData.append("deepSleepStart06", CommonUtil.trim(this.state.deepSleepStart06));
        postData.append("deepSleepEnd06", CommonUtil.trim(this.state.deepSleepEnd06));
        postData.append("deepSleepStart07", CommonUtil.trim(this.state.deepSleepStart07));
        postData.append("deepSleepEnd07", CommonUtil.trim(this.state.deepSleepEnd07));
        postData.append("deepSleepStart08", CommonUtil.trim(this.state.deepSleepStart08));
        postData.append("deepSleepEnd08", CommonUtil.trim(this.state.deepSleepEnd08));
        postData.append("deepSleepStart09", CommonUtil.trim(this.state.deepSleepStart09));
        postData.append("deepSleepEnd09", CommonUtil.trim(this.state.deepSleepEnd09));
        postData.append("deepSleepStart10", CommonUtil.trim(this.state.deepSleepStart10));
        postData.append("deepSleepEnd10", CommonUtil.trim(this.state.deepSleepEnd10));
        postData.append("awakeStart01", CommonUtil.trim(this.state.awakeStart01));
        postData.append("awakeEnd01", CommonUtil.trim(this.state.awakeEnd01));
        postData.append("awakeStart02", CommonUtil.trim(this.state.awakeStart02));
        postData.append("awakeEnd02", CommonUtil.trim(this.state.awakeEnd02));
        postData.append("awakeStart03", CommonUtil.trim(this.state.awakeStart03));
        postData.append("awakeEnd03", CommonUtil.trim(this.state.awakeEnd03));
        postData.append("awakeStart04", CommonUtil.trim(this.state.awakeStart04));
        postData.append("awakeEnd04", CommonUtil.trim(this.state.awakeEnd04));

        return postData;
    }

    validate = () =>{
        if(CommonUtil.trim(this.state.sleepStart) == ""){
            this.handleTouchTap("SleepStart can't be null");
            return false;
        }

        if(CommonUtil.trim(this.state.sleepEnd) == ""){
            this.handleTouchTap("SleepEnd can't be null");
            return false;
        }

        return true;
    }

    saveHandle = (event) => {
        if(this.validate()){
            let postData = this.makeFormData();
            fetch('http://192.168.1.3:8765/gzt/server/sleep/save_data/save_data.php', {
                method: 'POST',
                body: postData
            })
                .then(response => response.json())
                .then(json => {
                    this.handleTouchTap(json.msg);
                })
                .catch((err) => {
                    this.handleTouchTap(err);
                });
        }
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
            deepSleepTime += parseInt((deepSleepEnd01 - deepSleepStart01) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart02.getValue() != "" && this.deepSleepEnd02.getValue() != "") {
            let deepSleepStart02 = DateTimeUtil.String2Date(this.deepSleepStart02.getValue());
            let deepSleepEnd02 = DateTimeUtil.String2Date(this.deepSleepEnd02.getValue());
            deepSleepTime += parseInt((deepSleepEnd02 - deepSleepStart02) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart03.getValue() != "" && this.deepSleepEnd03.getValue() != "") {
            let deepSleepStart03 = DateTimeUtil.String2Date(this.deepSleepStart03.getValue());
            let deepSleepEnd03 = DateTimeUtil.String2Date(this.deepSleepEnd03.getValue());
            deepSleepTime += parseInt((deepSleepEnd03 - deepSleepStart03) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart04.getValue() != "" && this.deepSleepEnd04.getValue() != "") {
            let deepSleepStart04 = DateTimeUtil.String2Date(this.deepSleepStart04.getValue());
            let deepSleepEnd04 = DateTimeUtil.String2Date(this.deepSleepEnd04.getValue());
            deepSleepTime += parseInt((deepSleepEnd04 - deepSleepStart04) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart05.getValue() != "" && this.deepSleepEnd05.getValue() != "") {
            let deepSleepStart05 = DateTimeUtil.String2Date(this.deepSleepStart05.getValue());
            let deepSleepEnd05 = DateTimeUtil.String2Date(this.deepSleepEnd05.getValue());
            deepSleepTime += parseInt((deepSleepEnd05 - deepSleepStart05) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart06.getValue() != "" && this.deepSleepEnd06.getValue() != "") {
            let deepSleepStart06 = DateTimeUtil.String2Date(this.deepSleepStart06.getValue());
            let deepSleepEnd06 = DateTimeUtil.String2Date(this.deepSleepEnd06.getValue());
            deepSleepTime += parseInt((deepSleepEnd06 - deepSleepStart06) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart07.getValue() != "" && this.deepSleepEnd07.getValue() != "") {
            let deepSleepStart07 = DateTimeUtil.String2Date(this.deepSleepStart07.getValue());
            let deepSleepEnd07 = DateTimeUtil.String2Date(this.deepSleepEnd07.getValue());
            deepSleepTime += parseInt((deepSleepEnd07 - deepSleepStart07) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart08.getValue() != "" && this.deepSleepEnd08.getValue() != "") {
            let deepSleepStart08 = DateTimeUtil.String2Date(this.deepSleepStart08.getValue());
            let deepSleepEnd08 = DateTimeUtil.String2Date(this.deepSleepEnd08.getValue());
            deepSleepTime += parseInt((deepSleepEnd08 - deepSleepStart08) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart09.getValue() != "" && this.deepSleepEnd09.getValue() != "") {
            let deepSleepStart09 = DateTimeUtil.String2Date(this.deepSleepStart09.getValue());
            let deepSleepEnd09 = DateTimeUtil.String2Date(this.deepSleepEnd09.getValue());
            deepSleepTime += parseInt((deepSleepEnd09 - deepSleepStart09) / 1000 / 60) + 1;
        }

        if(this.deepSleepStart10.getValue() != "" && this.deepSleepEnd10.getValue() != "") {
            let deepSleepStart10 = DateTimeUtil.String2Date(this.deepSleepStart10.getValue());
            let deepSleepEnd10 = DateTimeUtil.String2Date(this.deepSleepEnd10.getValue());
            deepSleepTime += parseInt((deepSleepEnd10 - deepSleepStart10) / 1000 / 60) + 1;
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
            <Paper style={paperStyle01} zDepth={0}>
                <div >
                    <SelectField
                        id="person"
                        ref={(input) => { this.person = input; }}
                        value={this.state.personValue}
                        onChange={this.slcHandleChange}
                        floatingLabelText="Person"
                        floatingLabelFixed={true}
                    >
                        {items}
                    </SelectField>
                    <DatePicker
                        id="sleepDate"
                        ref={(input) => { this.sleepDate = input; }}
                        container="inline"
                        mode="landscape"
                        floatingLabelText="SleepDate"
                        floatingLabelFixed={true}
                        hintText="yyyy-MM-dd"
                        autoOk={true}
                        onChange={this.pickerHandleChange}
                        value={this.state.sleepDate}
                    />
                    <div>
                        <TextField
                            id="sleepStart"
                            ref={(input) => { this.sleepStart = input; }}
                            floatingLabelText="Sleep Start"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.sleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.sleepStart}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="sleepEnd"
                            ref={(input) => { this.sleepEnd = input; }}
                            floatingLabelText="Sleep End"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.sleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.sleepEnd}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart01"
                            ref={(input) => { this.deepSleepStart01 = input; }}
                            floatingLabelText="Deep Sleep Start"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart01}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd01"
                            ref={(input) => { this.deepSleepEnd01 = input; }}
                            floatingLabelText="Deep Sleep End"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd01}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart02"
                            ref={(input) => { this.deepSleepStart02 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart02}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd02"
                            ref={(input) => { this.deepSleepEnd02 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd02}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart03"
                            ref={(input) => { this.deepSleepStart03 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart03}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd03"
                            ref={(input) => { this.deepSleepEnd03 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd03}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart04"
                            ref={(input) => { this.deepSleepStart04 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart04}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd04"
                            ref={(input) => { this.deepSleepEnd04 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd04}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart05"
                            ref={(input) => { this.deepSleepStart05 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart05}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd05"
                            ref={(input) => { this.deepSleepEnd05 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd05}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart06"
                            ref={(input) => { this.deepSleepStart06 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart06}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd06"
                            ref={(input) => { this.deepSleepEnd06 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd06}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart07"
                            ref={(input) => { this.deepSleepStart07 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart07}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd07"
                            ref={(input) => { this.deepSleepEnd07 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd07}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart08"
                            ref={(input) => { this.deepSleepStart08 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart08}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd08"
                            ref={(input) => { this.deepSleepEnd08 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd08}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart09"
                            ref={(input) => { this.deepSleepStart09 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart09}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd09"
                            ref={(input) => { this.deepSleepEnd09 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd09}
                        />
                    </div>
                    <div>
                        <TextField
                            id="deepSleepStart10"
                            ref={(input) => { this.deepSleepStart10 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepStart10}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="deepSleepEnd10"
                            ref={(input) => { this.deepSleepEnd10 = input; }}
                            hintText="hhmm"
                            onBlur={this.deepSleepHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.deepSleepEnd10}
                        />
                    </div>
                    <div>
                        <TextField
                            id="awakeStart01"
                            ref={(input) => { this.awakeStart01 = input; }}
                            floatingLabelText="Awake Start"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.awakeStart01}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="awakeEnd01"
                            ref={(input) => { this.awakeEnd01 = input; }}
                            floatingLabelText="Awake End"
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.awakeEnd01}
                        />
                    </div>
                    <div>
                        <TextField
                            id="awakeStart02"
                            ref={(input) => { this.awakeStart02 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.awakeStart02}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="awakeEnd02"
                            ref={(input) => { this.awakeEnd02 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.awakeEnd02}
                        />
                    </div>
                    <div>
                        <TextField
                            id="awakeStart03"
                            ref={(input) => { this.awakeStart03 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.awakeStart03}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="awakeEnd03"
                            ref={(input) => { this.awakeEnd03 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.awakeEnd03}
                        />
                    </div>
                    <div>
                        <TextField
                            id="awakeStart04"
                            ref={(input) => { this.awakeStart04 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.awakeStart04}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="awakeEnd04"
                            ref={(input) => { this.awakeEnd04 = input; }}
                            floatingLabelFixed={true}
                            hintText="hhmm"
                            onBlur={this.awakeHandleBlur}
                            onChange={this.tfHandleChange}
                            value={this.state.awakeEnd04}
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
            <Paper style={paperStyle02} zDepth={0}>
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
