const initialState = {
    events: [],
  };
  
  const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EVENTS':
        return {
          ...state,
          events: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default eventsReducer;