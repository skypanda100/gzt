import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import Master from './components/Master';
import Home from './components/pages/Home';
import ComparisonByDayPage from './components/pages/sleep/ComparisonByDay/Page';
import ComparisonByWeekPage from './components/pages/sleep/ComparisonByWeek/Page';
import ComparisonByMonthPage from './components/pages/sleep/ComparisonByMonth/Page';
import ComparisonBySumPage from './components/pages/sleep/ComparisonBySum/Page';
import SaveDataPage from './components/pages/sleep/SaveData/Page';
import RidingPage from './components/pages/track/Riding/Page';
import RealTimePage from './components/pages/other/Serial/RealTime/Page';
import HistoryPage from './components/pages/other/Serial/History/Page';
import ScreensaverPage from './components/pages/other/Screensaver/Page';
import LoginPage from './components/pages/login/Page';
import Cookies from 'js-cookie';

const requireAuth = (nextState, replace, next) => {
    let usr = Cookies.get('usr');
    let pwd = Cookies.get('pwd');
    if(typeof(usr) == 'undefined' || typeof(pwd) == 'undefined'){
        replace({ pathname: '/login' });
        next();
    }else if(usr == 'ggzdttt' && pwd == 'ggTT1206'){
        next();
    }else{
        replace({ pathname: '/login' });
        next();
    }
}

const AppRoutes = (
    <div>
        <Route path="/" component={Master}>
            <IndexRoute component={Home} onEnter={requireAuth}/>
            <Route path="home" component={Home} onEnter={requireAuth}/>
            <Route path="/login" component={LoginPage} />onEnter
            <Redirect from="sleep" to="/sleep/comparison_by_day" />
            <Route path="sleep">
                <Route path="comparison_by_day" component={ComparisonByDayPage} onEnter={requireAuth}/>
                <Route path="comparison_by_week" component={ComparisonByWeekPage} onEnter={requireAuth}/>
                <Route path="comparison_by_month" component={ComparisonByMonthPage} onEnter={requireAuth}/>
                <Route path="comparison_by_sum" component={ComparisonBySumPage} onEnter={requireAuth} />
                <Route path="save_data" component={SaveDataPage} onEnter={requireAuth} />
            </Route>
            <Redirect from="track" to="/track/riding" />
            <Route path="track">
                <Route path="riding" component={RidingPage} onEnter={requireAuth}/>
            </Route>
            <Redirect from="other" to="/other/realtime"/>
            <Route path="other">
                <Route path="realtime" component={RealTimePage} onEnter={requireAuth}/>
                <Route path="history" component={HistoryPage} onEnter={requireAuth}/>
                <Route path="screensaver" component={ScreensaverPage} onEnter={requireAuth}/>
            </Route>
        </Route>

    </div>
);

export default AppRoutes;
