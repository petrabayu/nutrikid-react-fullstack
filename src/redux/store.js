import { configureStore } from '@reduxjs/toolkit'
import commentslicer from './reducer/commentslicer'
import articleslicer from './reducer/articleslicer'
import eventsReducer from './reducer/event'
import programsReducer from './reducer/programSlicer'

export const store = configureStore({
  reducer: {
    comments: commentslicer,
    article: articleslicer,
    events: eventsReducer,
    programs: programsReducer,
  },
})