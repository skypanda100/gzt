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
import Snackbar from 'material-ui/Snackbar';
import DateTimeUtil from '../../../utils/DateTimeUtil';
import CommonUtil from '../../../utils/CommonUtil';
import Divider from 'material-ui/Divider';
import echarts from "echarts";
import Feature from '../../Feature';
import FullWidthSection from '../../../FullWidthSection';

const items = [];
items.push(<MenuItem value={0} key={0} primaryText={`GaoGe`} />);
items.push(<MenuItem value={1} key={1} primaryText={`ZhengDongTian`} />);

var sWidth = 1516 * 0.36;
var cellSize = [55, 55];
var pieRadius = 18;
var calHeight = 400;

class SaveData extends Component {

    constructor () {
        super();
        let screenWidth = document.body.clientWidth;
        let ratio = 1;
        if(screenWidth < sWidth){
            ratio = screenWidth / sWidth;
        }
        cellSize = [parseInt(ratio * cellSize[0]), parseInt(ratio * cellSize[1])];
        pieRadius = parseInt(ratio * pieRadius);
        calHeight = calHeight * ratio;
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
        range:[],
        date_r:[],
        gg_deep_r:[],
        gg_shallow_r:[],
        zdt_deep_r:[],
        zdt_shallow_r:[],
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
        }, ()=>{
            this.calendar();
        });
    };

    pickerHandleChange = (event, date) => {
        this.setState({
            sleepDate:date
        });
    }

    sleepHandleBlur = (event) => {
        let sleepDate = this.refs.sleepDate.getDate();
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
        }else if(hhmm.length == 2){
            hhmm = "00" + hhmm;
        }else if(hhmm.length == 1){
            hhmm = "000" + hhmm;
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
        let sleepDate = this.refs.sleepDate.getDate();
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
        }else if(hhmm.length == 2){
            hhmm = "00" + hhmm;
        }else if(hhmm.length == 1){
            hhmm = "000" + hhmm;
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
        let sleepDate = this.refs.sleepDate.getDate();
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
        }else if(hhmm.length == 2){
            hhmm = "00" + hhmm;
        }else if(hhmm.length == 1){
            hhmm = "000" + hhmm;
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
            fetch('http://' + g_hostname + '/sleep/save_data/save_data.php', {
                method: 'POST',
                body: postData
            })
                .then(response => response.json())
                .then(json => {
                    this.handleTouchTap(json.msg);
                    this.lastData();
                })
                .catch((err) => {
                    this.handleTouchTap(err.message);
                });
        }
    }

    calculateTime = () => {
        let sleepLabel = this.refs.sleepLabel;
        let deepSleepLabel = this.refs.deepSleepLabel;
        let awakeLabel = this.refs.awakeLabel;
        let sleepTime = 0;
        let deepSleepTime = 0;
        let awakeTime = 0;

        if(this.refs.sleepStart.getValue() != "" && this.refs.sleepEnd.getValue() != ""){
            let sleepStart = DateTimeUtil.String2Date(this.refs.sleepStart.getValue());
            let sleepEnd = DateTimeUtil.String2Date(this.refs.sleepEnd.getValue());
            sleepTime = parseInt((sleepEnd - sleepStart) / 1000 / 60);
        }

        if(this.refs.deepSleepStart01.getValue() != "" && this.refs.deepSleepEnd01.getValue() != "") {
            let deepSleepStart01 = DateTimeUtil.String2Date(this.refs.deepSleepStart01.getValue());
            let deepSleepEnd01 = DateTimeUtil.String2Date(this.refs.deepSleepEnd01.getValue());
            deepSleepTime += parseInt((deepSleepEnd01 - deepSleepStart01) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart02.getValue() != "" && this.refs.deepSleepEnd02.getValue() != "") {
            let deepSleepStart02 = DateTimeUtil.String2Date(this.refs.deepSleepStart02.getValue());
            let deepSleepEnd02 = DateTimeUtil.String2Date(this.refs.deepSleepEnd02.getValue());
            deepSleepTime += parseInt((deepSleepEnd02 - deepSleepStart02) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart03.getValue() != "" && this.refs.deepSleepEnd03.getValue() != "") {
            let deepSleepStart03 = DateTimeUtil.String2Date(this.refs.deepSleepStart03.getValue());
            let deepSleepEnd03 = DateTimeUtil.String2Date(this.refs.deepSleepEnd03.getValue());
            deepSleepTime += parseInt((deepSleepEnd03 - deepSleepStart03) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart04.getValue() != "" && this.refs.deepSleepEnd04.getValue() != "") {
            let deepSleepStart04 = DateTimeUtil.String2Date(this.refs.deepSleepStart04.getValue());
            let deepSleepEnd04 = DateTimeUtil.String2Date(this.refs.deepSleepEnd04.getValue());
            deepSleepTime += parseInt((deepSleepEnd04 - deepSleepStart04) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart05.getValue() != "" && this.refs.deepSleepEnd05.getValue() != "") {
            let deepSleepStart05 = DateTimeUtil.String2Date(this.refs.deepSleepStart05.getValue());
            let deepSleepEnd05 = DateTimeUtil.String2Date(this.refs.deepSleepEnd05.getValue());
            deepSleepTime += parseInt((deepSleepEnd05 - deepSleepStart05) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart06.getValue() != "" && this.refs.deepSleepEnd06.getValue() != "") {
            let deepSleepStart06 = DateTimeUtil.String2Date(this.refs.deepSleepStart06.getValue());
            let deepSleepEnd06 = DateTimeUtil.String2Date(this.refs.deepSleepEnd06.getValue());
            deepSleepTime += parseInt((deepSleepEnd06 - deepSleepStart06) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart07.getValue() != "" && this.refs.deepSleepEnd07.getValue() != "") {
            let deepSleepStart07 = DateTimeUtil.String2Date(this.refs.deepSleepStart07.getValue());
            let deepSleepEnd07 = DateTimeUtil.String2Date(this.refs.deepSleepEnd07.getValue());
            deepSleepTime += parseInt((deepSleepEnd07 - deepSleepStart07) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart08.getValue() != "" && this.refs.deepSleepEnd08.getValue() != "") {
            let deepSleepStart08 = DateTimeUtil.String2Date(this.refs.deepSleepStart08.getValue());
            let deepSleepEnd08 = DateTimeUtil.String2Date(this.refs.deepSleepEnd08.getValue());
            deepSleepTime += parseInt((deepSleepEnd08 - deepSleepStart08) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart09.getValue() != "" && this.refs.deepSleepEnd09.getValue() != "") {
            let deepSleepStart09 = DateTimeUtil.String2Date(this.refs.deepSleepStart09.getValue());
            let deepSleepEnd09 = DateTimeUtil.String2Date(this.refs.deepSleepEnd09.getValue());
            deepSleepTime += parseInt((deepSleepEnd09 - deepSleepStart09) / 1000 / 60) + 1;
        }

        if(this.refs.deepSleepStart10.getValue() != "" && this.refs.deepSleepEnd10.getValue() != "") {
            let deepSleepStart10 = DateTimeUtil.String2Date(this.refs.deepSleepStart10.getValue());
            let deepSleepEnd10 = DateTimeUtil.String2Date(this.refs.deepSleepEnd10.getValue());
            deepSleepTime += parseInt((deepSleepEnd10 - deepSleepStart10) / 1000 / 60) + 1;
        }

        if(this.refs.awakeStart01.getValue() != "" && this.refs.awakeEnd01.getValue() != "") {
            let awakeStart01 = DateTimeUtil.String2Date(this.refs.awakeStart01.getValue());
            let awakeEnd01 = DateTimeUtil.String2Date(this.refs.awakeEnd01.getValue());
            awakeTime += parseInt((awakeEnd01 - awakeStart01) / 1000 / 60) + 1;
        }

        if(this.refs.awakeStart02.getValue() != "" && this.refs.awakeEnd02.getValue() != "") {
            let awakeStart02 = DateTimeUtil.String2Date(this.refs.awakeStart02.getValue());
            let awakeEnd02 = DateTimeUtil.String2Date(this.refs.awakeEnd02.getValue());
            awakeTime += parseInt((awakeEnd02 - awakeStart02) / 1000 / 60) + 1;
        }

        if(this.refs.awakeStart03.getValue() != "" && this.refs.awakeEnd03.getValue() != "") {
            let awakeStart03 = DateTimeUtil.String2Date(this.refs.awakeStart03.getValue());
            let awakeEnd03 = DateTimeUtil.String2Date(this.refs.awakeEnd03.getValue());
            awakeTime += parseInt((awakeEnd03 - awakeStart03) / 1000 / 60) + 1;
        }

        if(this.refs.awakeStart04.getValue() != "" && this.refs.awakeEnd04.getValue() != "") {
            let awakeStart04 = DateTimeUtil.String2Date(this.refs.awakeStart04.getValue());
            let awakeEnd04 = DateTimeUtil.String2Date(this.refs.awakeEnd04.getValue());
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

    lastData() {
        this.setState({
            range:[],
            date_r:[],
            gg_deep_r:[],
            gg_shallow_r:[],
            zdt_deep_r:[],
            zdt_shallow_r:[],
        });

        fetch('http://' + g_hostname + '/sleep/save_data/last_data.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: ''
        })
            .then(response => response.json())
            .then(json => {
                let range = [json.date_day[0], json.date_day[json.date_day.length - 1]];
                let date_r = [];
                for(let i = 0;i < json.date_day.length;i++){
                    date_r.push([
                        json.date_day[i],
                        Math.floor(Math.random() * 10000)
                    ]);
                }
                let gg_deep_r = json.gg_deep_day;
                let gg_shallow_r = json.gg_shallow_day;
                let zdt_deep_r = json.zdt_deep_day;
                let zdt_shallow_r = json.zdt_shallow_day;
                this.setState({
                    range:range,
                    date_r:date_r,
                    gg_deep_r:gg_deep_r,
                    gg_shallow_r:gg_shallow_r,
                    zdt_deep_r:zdt_deep_r,
                    zdt_shallow_r:zdt_shallow_r,
                });

                this.calendar();
            })
            .catch((err) => {
                this.handleTouchTap(err.message);
            });
    }

    getPieSeries = (chart) => {
        let deep = (this.state.personValue == 0 ? this.state.gg_deep_r : this.state.zdt_deep_r);
        let shallow = (this.state.personValue == 0 ? this.state.gg_shallow_r : this.state.zdt_shallow_r);
        let date_r = [];
        let deep_r = [];
        let shallow_r = [];
        for(let i = 0;i < this.state.date_r.length;i++){
            if(deep[i] == 0 && shallow[i] == 0){
                continue;
            }
            date_r.push(this.state.date_r[i]);
            deep_r.push(deep[i]);
            shallow_r.push(shallow[i]);
        }

        return echarts.util.map(date_r, function (item, index) {
            let center = chart.convertToPixel('calendar', item);
            let data_r = [
                {name: 'deep', value: deep_r[index].toFixed(1)},
                {name: 'shallow', value: shallow_r[index].toFixed(1)}
            ];
            return {
                id: index + 'pie',
                type: 'pie',
                center: center,
                label: {
                    normal: {
                        show:false,
                        formatter: '{c}',
                        position: 'inside'
                    }
                },
                color:['#0097A7', '#00BCD4'],
                radius: pieRadius,
                data: data_r
            };
        });
    }

    calendar = () => {
        echarts.dispose(document.getElementById('calendar'));
        let chart = echarts.init(document.getElementById('calendar'));

        let option = {
            tooltip : {},
            legend: {
                data: ['deep', 'shallow'],
                bottom: 20
            },
            calendar: {
                top: 'middle',
                left: 'center',
                orient: 'vertical',
                cellSize: cellSize,
                yearLabel: {
                    show: false,
                    textStyle: {
                        fontSize: 20
                    }
                },
                dayLabel: {
                    margin: 10,
                    firstDay: 1,
                    nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                monthLabel: {
                    show: false
                },
                range: this.state.range
            },
            series: [{
                id: 'label',
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: 1,
                label: {
                    normal: {
                        show: true,
                        formatter: function (params) {
                            return echarts.format.formatTime('dd', params.value[0]);
                        },
                        offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
                        textStyle: {
                            color: '#000',
                            fontSize: 12
                        }
                    }
                },
                data: this.state.date_r
            }]
        };

        chart.setOption(option);
        chart.setOption({
            series: this.getPieSeries(chart)
        });
    }

    componentDidMount() {
        this.lastData();
    }

    componentWillUnmount(){
        sWidth = 1516 * 0.36;
        cellSize = [55, 55];
        pieRadius = 18;
        calHeight = 400;
    }

    render () {
        return (
            <FullWidthSection useContent={true} base={0}>
                <Feature
                    firstChild={true}
                    w={"36%"}
                    z={0}
                >
                    <div id='calendar' style={{width:'98%',height:`${calHeight}`}}>

                    </div>
                    <div style={{width:'98%'}}>
                        <h3>Sleep Time</h3>
                        <p style={{fontSize:25}} ref='sleepLabel'>0 hours 0 minutes</p>
                        <Divider inset={false} />
                        <br/><br/>
                        <h3>Deep Sleep Time</h3>
                        <p style={{fontSize:25}} ref='deepSleepLabel'>0 hours 0 minutes</p>
                        <Divider inset={false} />
                        <br/><br/>
                        <h3>Awake Time</h3>
                        <p style={{fontSize:25}} ref='awakeLabel'>0 hours 0 minutes</p>
                        <Divider inset={false} />
                    </div>
                </Feature>
                <Feature
                    lastChild={true}
                    w={"60%"}
                    z={0}
                >
                    <div >
                        <SelectField
                            id="person"
                            ref='person'
                            value={this.state.personValue}
                            onChange={this.slcHandleChange}
                            floatingLabelText="Person"
                            floatingLabelFixed={true}
                        >
                            {items}
                        </SelectField>
                        <DatePicker
                            id="sleepDate"
                            ref='sleepDate'
                            mode=""
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
                                ref='sleepStart'
                                floatingLabelText="Sleep Start"
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.sleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.sleepStart}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="sleepEnd"
                                ref='sleepEnd'
                                floatingLabelText="Sleep End"
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.sleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.sleepEnd}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart01"
                                ref='deepSleepStart01'
                                floatingLabelText="Deep Sleep Start"
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart01}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd01"
                                ref='deepSleepEnd01'
                                floatingLabelText="Deep Sleep End"
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd01}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart02"
                                ref='deepSleepStart02'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart02}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd02"
                                ref='deepSleepEnd02'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd02}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart03"
                                ref='deepSleepStart03'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart03}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd03"
                                ref='deepSleepEnd03'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd03}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart04"
                                ref='deepSleepStart04'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart04}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd04"
                                ref='deepSleepEnd04'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd04}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart05"
                                ref='deepSleepStart05'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart05}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd05"
                                ref='deepSleepEnd05'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd05}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart06"
                                ref='deepSleepStart06'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart06}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd06"
                                ref='deepSleepEnd06'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd06}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart07"
                                ref='deepSleepStart07'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart07}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd07"
                                ref='deepSleepEnd07'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd07}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart08"
                                ref='deepSleepStart08'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart08}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd08"
                                ref='deepSleepEnd08'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd08}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart09"
                                ref='deepSleepStart09'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart09}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd09"
                                ref='deepSleepEnd09'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd09}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="deepSleepStart10"
                                ref='deepSleepStart10'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepStart10}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="deepSleepEnd10"
                                ref='deepSleepEnd10'
                                hintText="hhmm"
                                onBlur={this.deepSleepHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.deepSleepEnd10}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="awakeStart01"
                                ref='awakeStart01'
                                floatingLabelText="Awake Start"
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.awakeHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.awakeStart01}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="awakeEnd01"
                                ref='awakeEnd01'
                                floatingLabelText="Awake End"
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.awakeHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.awakeEnd01}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="awakeStart02"
                                ref='awakeStart02'
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.awakeHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.awakeStart02}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="awakeEnd02"
                                ref='awakeEnd02'
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.awakeHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.awakeEnd02}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="awakeStart03"
                                ref='awakeStart03'
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.awakeHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.awakeStart03}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="awakeEnd03"
                                ref='awakeEnd03'
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.awakeHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.awakeEnd03}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <TextField
                                id="awakeStart04"
                                ref='awakeStart04'
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.awakeHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.awakeStart04}
                                style={{width:'49%'}}
                            />
                            &nbsp;
                            <TextField
                                id="awakeEnd04"
                                ref='awakeEnd04'
                                floatingLabelFixed={true}
                                hintText="hhmm"
                                onBlur={this.awakeHandleBlur}
                                onChange={this.tfHandleChange}
                                value={this.state.awakeEnd04}
                                style={{width:'49%'}}
                            />
                        </div>
                        <div>
                            <RaisedButton
                                label="Clear"
                                primary={true}
                                style={{width:'45%',margin:'2%'}}
                                onTouchTap={this.clearHandle}
                            />
                            <RaisedButton
                                label="Save"
                                secondary={true}
                                style={{width:'45%',margin:'2%'}}
                                onTouchTap={this.saveHandle}
                            />
                        </div>
                    </div>
                </Feature>
                <Snackbar
                    ref='message'
                    open={this.state.messageOpen}
                    message={this.state.message}
                    autoHideDuration={3000}
                    onRequestClose={this.handleRequestClose}
                />
            </FullWidthSection>
        )
    }
}

export default withWidth()(SaveData);
