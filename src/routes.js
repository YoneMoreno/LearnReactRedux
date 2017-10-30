import React from 'react';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import { Route, IndexRoute, NotFoundRoute } from 'react-router';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage.'; //eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/common/NotFoundPage';

let Router = require('react-router');


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
