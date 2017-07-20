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
import DateTimeUtil from '../../../utils/DateTimeUtil';

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
    padding: '15px',
    textAlign: 'left',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
};

var index = 0;
var images = new Array("images/one.jpg", "images/two.jpg", "images/three.jpg");
var imageUrl = "http://192.168.1.3:8765/gzt/screensaver/";

var prevModal = null;
var nextModal = null;
var thisObj = null;
class Screensaver extends Component {

    constructor(props) {
        super(props);
    }

    post(postData, dispatch) {
        fetch('http://192.168.1.3:8765/gzt/server/other/screen_saver/screen_saver_query.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: postData
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    message: json,
                    isSuccess: true
                });
            })
            .catch((err) => {
                dispatch({
                    message: err.message,
                    isSuccess: false
                });
            });
    }

    on_post(data){
        let file_r = new Array();
        if(data.isSuccess){
            var data_r = data.message;
            file_r = data_r.file;
        }
        images = file_r;
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
            prevContentStyle.backgroundImage = 'url(' + encodeURI(imageUrl + images[prev_index]) + ')';
        }else{
            let next_index = index % images.length;
            nextContentStyle.backgroundImage = 'url(' + encodeURI(imageUrl + images[next_index]) + ')';
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
        thisObj.timerPic = setInterval(
            function(){
                thisObj.replay();
            }.bind(thisObj)
            , 3000
        );

        thisObj.timerTime = setInterval(
            function(){
                thisObj.changeTime();
            }.bind(thisObj)
            , 1000
        );

        screenfull.toggle(thisObj.refs.container);
    }

    changeTime(){
        let date = new Date();
        let ymdhm = DateTimeUtil.Date2String(date, "hh:mm");
/*        thisObj.ymdhmFade.innerHTML = ymdhm;
        thisObj.ymdhmScale.innerHTML = ymdhm;
        thisObj.ymdhmWave.innerHTML = ymdhm;
        thisObj.ymdhmDrop.innerHTML = ymdhm;
        thisObj.ymdhmOutline.innerHTML = ymdhm;
        thisObj.ymdhmFly.innerHTML = ymdhm;*/
    }

    componentDidMount() {
        thisObj = this;

        this.post('', this.on_post);
    }

    componentWillUnmount() {
        this.timerPic && clearTimeout(this.timerPic);
        this.timerTime && clearTimeout(this.timerTime);

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
                            <div>
                                <div
                                    style={{fontSize:35}}
                                    ref={(input) => { this.ymdhmFade = input; }}
                                >
                                </div>
                            </div>
                        </div>
                    </FadeModal>

                    <ScaleModal
                        ref = { 'scaleModal' }
                        modalStyle={modalStyle}
                        contentStyle={nextContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle}>
                            <div>
                                <div
                                    style={{fontSize:35}}
                                    ref={(input) => { this.ymdhmScale = input; }}
                                >
                                </div>
                            </div>
                        </div>
                    </ScaleModal>

                    <WaveModal
                        ref = { 'waveModal' }
                        modalStyle={modalStyle}
                        contentStyle={prevContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle}>
                            <div>
                                <div
                                    style={{fontSize:35}}
                                    ref={(input) => { this.ymdhmWave = input; }}
                                >
                                </div>
                            </div>
                        </div>
                    </WaveModal>

                    <DropModal
                        ref = { 'dropModal' }
                        modalStyle={modalStyle}
                        contentStyle={nextContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle}>
                            <div>
                                <div
                                    style={{fontSize:35}}
                                    ref={(input) => { this.ymdhmDrop = input; }}
                                >
                                </div>
                            </div>
                        </div>
                    </DropModal>

                    <OutlineModal
                        ref = { 'outlineModal' }
                        modalStyle={modalStyle}
                        contentStyle={prevContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle} >
                            <div>
                                <div
                                    style={{fontSize:35}}
                                    ref={(input) => { this.ymdhmOutline = input; }}
                                >
                                </div>
                            </div>
                        </div>
                    </OutlineModal>

                    <FlyModal
                        ref = { 'flyModal' }
                        modalStyle={modalStyle}
                        contentStyle={nextContentStyle}
                        backdropStyle={backdropStyle}
                    >
                        <div style={modalDivStyle} >
                            <div>
                                <div
                                    style={{fontSize:35}}
                                    ref={(input) => { this.ymdhmFly = input; }}
                                >
                                </div>
                            </div>
                        </div>
                    </FlyModal>
                </div>
            </div>
        );
    }
}

export default withWidth()(Screensaver);
