import axios from 'axios';

const BASE_URL_API = 'http://localhost:5001/api/lesson';

// Action types
export const SET_LESSONS = 'SET_LESSONS';
export const SET_SELECTED_LESSON = 'SET_SELECTED_LESSON';

// Action creators
export const setLessons = (lessons) => ({
  type: SET_LESSONS,
  payload: lessons,
});


// Async action creators

export const fetchLessonDetailsByModuleId = async (ModuleId) => {
  try {
    const response = await axios.get(`${BASE_URL_API}/${ModuleId}`);
    const LessonDetails = response.data;
    return LessonDetails;
  } catch (error) {
    console.error(`Error fetching Lessons with ModuleId ${ModuleId}:`, error);
    return null;
  }
};


export const fetchLessonDetailsById = async (ProgramId) => {
  try {
    const response = await axios.get(`${BASE_URL_API}/${ProgramId}`);
    const ProgramDetails = response.data;
    return ProgramDetails;
  } catch (error) {
    console.error(`Error fetching Program with ID ${ProgramId}:`, error);
    return null;
  }
};


