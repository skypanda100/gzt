/**
 * Created by Administrator on 2017/7/12.
 */
import React, {Component} from 'react';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';
import 'whatwg-fetch';
import Paper from 'material-ui/Paper';
import screenfull from 'screenfull';
import FadeModal from 'boron/FadeModal';
import ScaleModal from 'boron/ScaleModal';
import WaveModal from 'boron/WaveModal';
import DropModal from 'boron/DropModal';
import OutlineModal from 'boron/OutlineModal';
import FlyModal from 'boron/FlyModal';

const containerStyle = {
    height: '100%',
    width: '100%',
};

const modalStyle = {
    width: '100%',
    height: '100%',
};

var prevContentStyle = {
    backgroundColor: 'black',
    backgroundImage: 'url(images/test1.png)',
    backgroundSize:'100% 100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
};

var nextContentStyle = {
    backgroundColor: 'black',
    backgroundImage: 'url(images/test2.png)',
    backgroundSize:'100% 100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
};

const modalDivStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
};

var index = 0;
var images = new Array("images/test1.png", "images/test2.png", "images/gzt_other.jpg", "images/gzt_sleep.jpg");

class Screensaver extends Component {

    constructor(props) {
        super(props);
    }

    changeBackground(){
        if(index % 2 == 0){
            let prev_index = index % images.length;
            prevContentStyle.backgroundImage = 'url(' + images[prev_index] + ')';
        }else{
            let next_index = index % images.length;
            nextContentStyle.backgroundImage = 'url(' + images[next_index] + ')';
        }
    }

    replay(){
        this.changeBackground();

        if(index % 2 == 0){
            //prev
            this.refs.prevModal.show();
            this.refs.nextModal.hide();
        }else{
            //next
            this.refs.nextModal.show();
            this.refs.prevModal.hide();
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
                <OutlineModal
                    ref={ 'prevModal' }
                    modalStyle={modalStyle}
                    contentStyle={prevContentStyle}
                >
                    <div style={modalDivStyle} >
                        <h2>I am a fadeModal</h2>
                    </div>
                </OutlineModal>
                <ScaleModal
                    ref={ 'nextModal' }
                    modalStyle={modalStyle}
                    contentStyle={nextContentStyle}
                >
                    <div style={modalDivStyle}>
                        <h2>I am a scaleModal</h2>
                    </div>
                </ScaleModal>
            </div>

        );
    }
}

export default withWidth()(Screensaver);
