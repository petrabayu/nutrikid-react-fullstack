import eventsReducer from './reducer/event'
import programsReducer from './reducer/programSlicer'
import lessonsReducer from './reducer/lessonsslicer'
// This is the store.js file that creates the redux store and applies the middleware
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./reducer/articleslicer";
import enrollmentReducer from './reducer/enrollmentSlicer';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    programs: programsReducer,
    lessons: lessonsReducer,
    article: articleReducer,
    enrollment: enrollmentReducer,
  },
});

export default store;
