/**
 * Created by Administrator on 2017/7/12.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import { Map, Marker } from 'react-amap';

class Riding extends Component {
    constructor() {
        super();
        this.toolEvents = {
            created: (tool) => {
                this.tool = tool;
            }
        }
        this.mapPlugins = ['ToolBar'];
        this.mapCenter = {longitude: 120, latitude: 35};
        this.markerPosition = {longitude: 121, latitude: 36};
    }

    render(){
        return <div>
            <div style={{width: '100%', height: '750px'}}>
                <Map
                    plugins={this.mapPlugins}
                    center={this.mapCenter}
                    zoom={6}
                >
                    <Marker position={this.markerPosition} />
                </Map>
            </div>
        </div>
    }
}

export default withWidth()(Riding);
