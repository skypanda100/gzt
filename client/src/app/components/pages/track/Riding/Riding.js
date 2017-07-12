/**
 * Created by Administrator on 2017/7/12.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import { Map, Polyline } from 'react-amap';

const mapStyle = {
    height: '100%',
    width: '100%',
    position:'fixed'
};

const randomPath = () => ({
    longitude: 60 + Math.random() * 50,
    latitude: 10 + Math.random() * 40,
})

class Riding extends Component {
    constructor(){
        super();
        this.state = {
            visible: true,
            draggable: true,
            path: Array(5).fill(true).map(randomPath),
        };
        this.lineEvents = {
            created: (ins) => {console.log(ins)},
            show: () => {console.log('line show')},
            hide: () => {console.log('line hide')},
            click: () => {console.log('line clicked')},
        }
    }

    toggleVisible(){
        this.setState({
            visible: !this.state.visible,
        });
    }

    toggleDraggable(){
        this.setState({
            draggable: !this.state.draggable,
        })
    }

    changePath(){
        this.setState({
            path: Array(5).fill(true).map(randomPath),
        });
    }

    render(){
        return <div>
            <div style={mapStyle}>
                <Map
                    amapkey={'68f3565852fbef16563622d83de57562'}
                    plugins={['ToolBar']} zoom={3}>
                    <Polyline
                        path={ this.state.path }
                        events={ this.lineEvents }
                        visible={ this.state.visible }
                        draggable={ this.state.draggable }
                    />
                </Map>
            </div>
            <button onClick={() => {this.toggleVisible() } }>Toggle Visible</button>
            <button onClick={() => {this.toggleDraggable() } }>Toggle Draggable</button>
            <button onClick={() => {this.changePath() } }>Change Path</button>
        </div>
    }
}

export default withWidth()(Riding);
