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

const items = [];
items.push(<MenuItem value={0} key={0} primaryText={`GaoGe`} />);
items.push(<MenuItem value={1} key={1} primaryText={`ZhengDongTian`} />);


class SaveData extends Component {

    constructor () {
        super();
    }

    handleChange = (event, index, value) => {
        this.setState({value});
    };

    state = {
        value: 0,
    };

    render () {
        return (
            <div >
                <h3 >Person</h3>
                <SelectField
                    value={this.state.value}
                    onChange={this.handleChange}
                    maxHeight={200}
                >
                    {items}
                </SelectField>
                <br/>
                <h3>Sleep Date</h3>
                <DatePicker
                    hintText="Sleep Date"
                    container="inline"
                    mode="landscape"
                 />
                <br/>
                <h3>Sleep Date Time</h3>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <br/>
                <h3>Deep Sleep</h3>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <br/>
                <h3>Awake</h3>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <div>
                    <TextField
                        hintText="Start"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        hintText="End"
                    />
                </div>
                <br />
                <div>
                    <RaisedButton label="Clear" primary={true} style={{width:'20%'}}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <RaisedButton label="Save" secondary={true}  style={{width:'20%'}} />

                </div>
            </div>
        )
    }
}

export default withWidth()(SaveData);
