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
import RaisedButton from 'material-ui/RaisedButton';

const containerStyle = {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
};

const modalStyle = {
    width: '100%',
    height: '100%',
};

const backdropStyle = {
    backgroundColor: 'black',
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
var images = new Array("images/one.jpg", "images/two.jpg", "images/three.jpg");

var prevModal = null;
var nextModal = null;
var thisObj = null;
class Screensaver extends Component {

    constructor(props) {
        super(props);
    }

    changeModal() {
        if(index % 6 == 0){
            if(prevModal != null){
                prevModal.hide();
            }

            if(nextModal != null){
                nextModal.hide();
            }

            prevModal = this.refs.fadeModal;
            nextModal = this.refs.scaleModal;
        }else if(index % 6 == 2){
            if(prevModal != null){
                prevModal.hide();
            }

            if(nextModal != null){
                nextModal.hide();
            }

            prevModal = this.refs.waveModal;
            nextModal = this.refs.dropModal;
        }else if(index % 6 == 4){
            if(prevModal != null){
                prevModal.hide();
            }

            if(nextModal != null){
                nextModal.hide();
            }

            prevModal = this.refs.outlineModal;
            nextModal = this.refs.flyModal;
        }
    }

    changeBackground() {
        if(index % 2 == 0){
            let prev_index = index % images.length;
            prevContentStyle.backgroundImage = 'url(' + images[prev_index] + ')';
        }else{
            let next_index = index % images.length;
            nextContentStyle.backgroundImage = 'url(' + images[next_index] + ')';
        }
    }

    replay(){
        this.changeModal();
        this.changeBackground();

        if(index % 2 == 0){
            //prev
            setTimeout(() => {prevModal.show();}, 500);
            nextModal.hide();
        }else{
            //next
            setTimeout(() => {nextModal.show();}, 500);
            prevModal.hide();
        }
        index++;
    }

    showModal() {
        thisObj.timer = setInterval(
            function(){
                thisObj.replay();
            }.bind(thisObj)
            , 3000
        );
        
        screenfull.toggle(thisObj.refs.container);
    }

    componentDidMount() {
        thisObj = this;
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        thisObj = null;
    }

    render() {
        return (
            <div>
                <RaisedButton
                    label="Test"
                    primary={true}
                    onTouchTap={this.showModal}
                />
                <div ref={'container'} style={containerStyle}>
                    <FadeModal
                        ref = { 'fadeModal' }
                        modalStyle={modalStyle}
                        contentStyle={prevContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle} >
                            <h2>I am a fadeModal</h2>
                        </div>
                    </FadeModal>

                    <ScaleModal
                        ref = { 'scaleModal' }
                        modalStyle={modalStyle}
                        contentStyle={nextContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle}>
                            <h2>I am a scaleModal</h2>
                        </div>
                    </ScaleModal>

                    <WaveModal
                        ref = { 'waveModal' }
                        modalStyle={modalStyle}
                        contentStyle={prevContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle}>
                            <h2>I am a waveModal</h2>
                        </div>
                    </WaveModal>

                    <DropModal
                        ref = { 'dropModal' }
                        modalStyle={modalStyle}
                        contentStyle={nextContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle}>
                            <h2>I am a dropModal</h2>
                        </div>
                    </DropModal>

                    <OutlineModal
                        ref = { 'outlineModal' }
                        modalStyle={modalStyle}
                        contentStyle={prevContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle} >
                            <h2>I am a outlineModal</h2>
                        </div>
                    </OutlineModal>

                    <FlyModal
                        ref = { 'flyModal' }
                        modalStyle={modalStyle}
                        contentStyle={nextContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle} >
                            <h2>I am a flyModal</h2>
                        </div>
                    </FlyModal>
                </div>
            </div>
        );
    }
}

export default withWidth()(Screensaver);
