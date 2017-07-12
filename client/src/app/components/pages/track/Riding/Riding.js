/**
 * Created by Administrator on 2017/7/12.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import { Map } from 'react-amap';
const mapStyle = {
    height: '100%',
    width: '100%',
    position:'fixed'
};
class Riding extends Component {
    render(){
        return <div style={mapStyle}>
            <Map amapkey={'68f3565852fbef16563622d83de57562'}/>
        </div>
    }
}

export default withWidth()(Riding);
