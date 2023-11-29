import { configureStore } from '@reduxjs/toolkit'
import commentslicer from './reducer/commentslicer'
import articleslicer from './reducer/articleslicer'
import eventsReducer from './reducer/event'
import programsReducer from './reducer/programSlicer'
import lessonsReducer from './reducer/lessonsslicer'

export const store = configureStore({
  reducer: {
    comments: commentslicer,
    article: articleslicer,
    events: eventsReducer,
    programs: programsReducer,
    lessons: lessonsReducer,
  },
})