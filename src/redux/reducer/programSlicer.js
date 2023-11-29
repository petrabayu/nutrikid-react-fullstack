const initialState = {
    programs: [],
  };
  
  const programsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROGRAMS':
        return {
          ...state,
          programs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default programsReducer;