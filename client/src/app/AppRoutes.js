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

const AppRoutes = (
  <Route path="/" component={Master}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Redirect from="sleep" to="/sleep/comparison_by_day" />
      <Route path="sleep">
          <Route path="comparison_by_day" component={ComparisonByDayPage} />
          <Route path="comparison_by_week" component={ComparisonByWeekPage} />
          <Route path="comparison_by_month" component={ComparisonByMonthPage} />
          <Route path="comparison_by_sum" component={ComparisonBySumPage} />
          <Route path="save_data" component={SaveDataPage} />
      </Route>
      <Redirect from="track" to="/track/riding" />
      <Route path="track">
          <Route path="riding" component={RidingPage} />
      </Route>
      <Redirect from="other" to="/other/realtime" />
      <Route path="other">
          <Route path="realtime" component={RealTimePage} />
      </Route>
      <Route path="other">
          <Route path="history" component={HistoryPage} />
      </Route>
  </Route>
);

export default AppRoutes;
