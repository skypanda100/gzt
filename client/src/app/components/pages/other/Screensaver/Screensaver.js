/**
 * Created by Administrator on 2017/7/12.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import Paper from 'material-ui/Paper';
import screenfull from 'screenfull';
import FadeModal from 'reboron/FadeModal';
import ScaleModal from 'reboron/ScaleModal';

const containerStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: 'url(images/test1.png)',
    backgroundSize:'100% 100%',
    display:'block'
};

const modalStyle = {
    height: '100%',
    width: '100%',
    display:'block'
}

const fadeModalStyle = {
    width: '100%',
    height: '100%',
    margin: '0px',
    backgroundImage: 'url(images/test1.png)',
    backgroundSize:'100% 100%',
    float: 'left',

};

const scaleModalStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: 'url(images/test2.png)',
    backgroundSize:'100% 100%',
    float: 'left',
};

var index = 0;

class Screensaver extends Component {

    constructor(props) {
        super(props);
    }

    replay(){
        if(index % 2 == 0){
            this.refs.fadeModal.show();
            this.refs.scaleModal.hide();
        }else{
            this.refs.scaleModal.show();
            this.refs.fadeModal.hide();
        }
        index++;
    }

    showModal() {
        screenfull.toggle(document.getElementById("container"));
    }

    componentDidMount() {
        this.timer = setInterval(
            function(){
                this.replay();
            }.bind(this)
            , 3000
        );
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <div id="container" style={containerStyle}>
                <button onClick={ () => this.showModal() }>Open</button>
                <FadeModal
                    ref={ 'fadeModal' }
                    modalStyle={modalStyle}
                >
                    <div style={fadeModalStyle} >
                        <h2>I am a fadeModal</h2>
                    </div>
                </FadeModal>
                <ScaleModal
                    ref={ 'scaleModal' }
                    modalStyle={modalStyle}
                >
                    <div style={scaleModalStyle}>
                        <h2>I am a scaleModal</h2>
                    </div>
                </ScaleModal>
            </div>

        );
    }
}

export default withWidth()(Screensaver);
