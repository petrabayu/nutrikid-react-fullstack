import axios from 'axios';

const BASE_URL_API = 'http://localhost:3001/api/programs';

// Action types
export const SET_PROGRAMS = 'SET_PROGRAMS';
export const SET_SELECTED_PROGRAM = 'SET_SELECTED_PROGRAM';

// Action creators
export const setPrograms = (programs) => ({
  type: SET_PROGRAMS,
  payload: programs,
});


// Async action creators
export const fetchPrograms = () => async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL_API);
    dispatch(setPrograms(response.data));
  } catch (error) {
    console.error('Error fetching Programs:', error);
  }
};

export const fetchProgramDetailsById = async (ProgramId) => {
  try {
    const response = await axios.get(`${BASE_URL_API}/${ProgramId}`);
    const ProgramDetails = response.data;
    return ProgramDetails;
  } catch (error) {
    console.error(`Error fetching Program with ID ${ProgramId}:`, error);
    return null;
  }
};

export const fetchOtherProgramsById = async (ProgramId) => {
  try {
    const response = await axios.get(`${BASE_URL_API}/exclude/${ProgramId}`);
    const ProgramDetails = response.data;
    
    return ProgramDetails;
  } catch (error) {
    console.error(`Error fetching Program with ID ${ProgramId}:`, error);
    return null;
  }
};


export const rupiah = (number)=>{
  if (number === 0) {
    return "FREE"
  } else {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}
}
