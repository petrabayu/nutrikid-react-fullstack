import { configureStore } from '@reduxjs/toolkit'
import commentslicer from './reducer/commentslicer'
import articleslicer from './reducer/articleslicer'

export const store = configureStore({
  reducer: {
    comments: commentslicer,
    article: articleslicer,
  },
})