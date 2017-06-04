import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import Master from './components/Master';
import Home from './components/pages/Home';
import ComparisonByDayPage from './components/pages/sleep/ComparisonByDay/Page';
import ComparisonByWeek from './components/pages/sleep/ComparisonByWeek/ComparisonByWeek';
import ComparisonByMonth from './components/pages/sleep/ComparisonByMonth/ComparisonByMonth';

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Redirect from="sleep" to="/sleep/comparison_by_day" />
    <Route path="sleep">
        <Route path="comparison_by_day" component={ComparisonByDayPage} />
        <Route path="comparison_by_week" component={ComparisonByWeek} />
        <Route path="comparison_by_month" component={ComparisonByMonth} />
    </Route>
  </Route>
);

export default AppRoutes;
