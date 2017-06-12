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
import SaveDataPage from './components/pages/sleep/SaveData/Page';

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Redirect from="sleep" to="/sleep/comparison_by_day" />
    <Route path="sleep">
        <Route path="comparison_by_day" component={ComparisonByDayPage} />
        <Route path="comparison_by_week" component={ComparisonByWeekPage} />
        <Route path="comparison_by_month" component={ComparisonByMonthPage} />
        <Route path="save_data" component={SaveDataPage} />
    </Route>
  </Route>
);

export default AppRoutes;
