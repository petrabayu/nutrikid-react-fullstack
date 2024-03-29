import axios from "axios";

const BASE_URL_API =
  "https://nutrikid-express-be-production.up.railway.app/api/programs";

// Action types
export const SET_PROGRAMS = "SET_PROGRAMS";
export const SET_SELECTED_PROGRAM = "SET_SELECTED_PROGRAM";

// Action creators
export const setPrograms = (programs) => ({
  type: SET_PROGRAMS,
  payload: programs,
});

export const enrollProgram = (programId) => ({
  type: 'ENROLL_PROGRAM',
  programId,
});

// Async action creators
export const fetchPrograms = () => async (dispatch) => {
  try {
    const response = await axios.get(BASE_URL_API);
    dispatch(setPrograms(response.data));
  } catch (error) {
    console.error("Error fetching Programs:", error);
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

export const rupiah = (number) => {
  if (number === 0) {
    return "FREE";
  } else {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  }
};


export const handleResetView = () => {
  window.scrollTo(0, 0);
  // Add any other logic you want to perform after resetting the view
};



