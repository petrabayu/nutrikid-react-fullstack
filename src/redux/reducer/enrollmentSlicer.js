const initialState = {
  enrolledPrograms: [], // Array to store enrolled program/event IDs
};

const enrollmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENROLL_PROGRAM':
      return {
        ...state,
        enrolledPrograms: [...state.enrolledPrograms, action.programId],
      };
    // Add other cases for different actions if needed

    default:
      return state;
  }
};

export default enrollmentReducer;